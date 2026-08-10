#!/usr/bin/env node

import { readdir, readFile, rename, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const pageTypes = new Map([
  ['elements', 'Elements'],
  ['sources', 'Sources'],
  ['lineages', 'Lineages'],
  ['syntheses', 'Syntheses'],
]);
const statuses = new Set(['調査中', '要検証', '完成']);
const confidences = new Set(['A', 'A−', 'B', 'C', '未評価']);

function scalar(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (!match) return undefined;
  const value = match[1].trim();
  if (value.startsWith('"') && value.endsWith('"')) return JSON.parse(value);
  if (value.startsWith("'") && value.endsWith("'")) return value.slice(1, -1).replaceAll("''", "'");
  return value;
}

function parsePage(file, content, type) {
  const frontmatter = content.match(/^---\n([\s\S]*?)\n---\n/);
  const title = content.match(/^#\s+(.+)$/m)?.[1].trim();
  const status = frontmatter && scalar(frontmatter[1], 'status');
  const summary = frontmatter && scalar(frontmatter[1], 'summary');
  const confidence = content.match(/^## 確度\s*\n+(?:\*\*)?(A−|A|B|C|未評価)(?:\*\*)?\s*$/m)?.[1];
  const errors = [];
  if (!frontmatter) errors.push(`${file}: frontmatterがない`);
  if (!title) errors.push(`${file}: H1タイトルがない`);
  if (!statuses.has(status)) errors.push(`${file}: statusが不正または欠落している`);
  if (!summary || ['|', '>'].includes(summary) || summary.includes('\n')) errors.push(`${file}: 一行のsummaryがない`);
  if (type === 'elements' && !confidences.has(confidence)) errors.push(`${file}: 確度が不正または欠落している`);
  return { file, type, title, status, summary, confidence, content, errors };
}

async function markdownFiles(directory) {
  try {
    const entries = await readdir(directory, { withFileTypes: true });
    const nested = await Promise.all(entries.map(async (entry) => {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) return markdownFiles(file);
      return entry.isFile() && entry.name.endsWith('.md') ? [file] : [];
    }));
    return nested.flat();
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

function linkTargets(content) {
  return [...content.matchAll(/\[[^\]]*\]\((<[^>]+>|[^)\s]+)(?:\s+"[^"]*")?\)/g)]
    .map((match) => match[1].replace(/^<|>$/g, ''));
}

async function exists(file) {
  try {
    return (await stat(file)).isFile();
  } catch (error) {
    if (error.code === 'ENOENT') return false;
    throw error;
  }
}

async function validateLinks(root, page) {
  const errors = [];
  for (const target of linkTargets(page.content)) {
    if (/^[a-z][a-z+.-]*:/i.test(target) || target.startsWith('#')) continue;
    const pathname = decodeURIComponent(target.split('#')[0]);
    if (!pathname) continue;
    const resolved = path.resolve(path.dirname(page.file), pathname);
    if (!resolved.startsWith(`${root}${path.sep}`) || !(await exists(resolved))) {
      errors.push(`${page.file}: 壊れた内部リンク ${target}`);
    }
  }
  return errors;
}

function renderIndex(root, pages) {
  const relative = (file) => path.relative(path.join(root, 'wiki'), file).split(path.sep).join('/');
  const weight = (page) => page.type === 'elements' && path.basename(page.file) === 'h1-h6.md' ? 6 : 1;
  const count = (items, values, field, weighted = false) => [...values].map((value) => `${value}: ${items.filter((item) => item[field] === value).reduce((sum, item) => sum + (weighted ? weight(item) : 1), 0)}`).join(' / ');
  const elements = pages.filter((page) => page.type === 'elements');
  const pageCounts = count(pages, statuses, 'status');
  const elementStatusCounts = count(elements, statuses, 'status', true);
  const confidenceCounts = count(elements, confidences, 'confidence', true);
  const sections = [...pageTypes].map(([type, heading]) => {
    const items = pages
      .filter((page) => page.type === type)
      .sort((a, b) => a.file < b.file ? -1 : a.file > b.file ? 1 : 0)
      .map((page) => `- [${page.title}](${relative(page.file)}) — ${page.summary}（${page.status}）`)
      .join('\n');
    return `## ${heading}\n\n${items || 'なし'}`;
  });
  return `# Index\n\nこのファイルは\`node scripts/generate-index.mjs\`で生成する。手編集しない。\n\n## Status\n\nPages — ${pageCounts}\n\nElements — ${elementStatusCounts}\n\nConfidence — ${confidenceCounts}\n\n${sections.join('\n\n')}\n`;
}

export async function generateIndex(root = process.cwd()) {
  root = path.resolve(root);
  const wiki = path.join(root, 'wiki');
  const pages = [];
  const errors = [];
  for (const [type] of pageTypes) {
    for (const file of await markdownFiles(path.join(wiki, type))) {
      const page = parsePage(file, await readFile(file, 'utf8'), type);
      pages.push(page);
      errors.push(...page.errors);
    }
  }

  for (const file of await markdownFiles(wiki)) {
    const relative = path.relative(wiki, file);
    const top = relative.split(path.sep)[0];
    if (!pageTypes.has(top) && !['index.md', 'log.md'].includes(relative)) errors.push(`${file}: 未知のページ種別`);
  }

  const titles = new Map();
  for (const page of pages) {
    if (page.title && titles.has(page.title)) errors.push(`${page.file}: タイトルが${titles.get(page.title)}と重複している`);
    if (page.title) titles.set(page.title, page.file);
    errors.push(...await validateLinks(root, page));
  }

  const scope = path.join(wiki, 'syntheses', 'scope.md');
  if (!(await exists(scope))) errors.push(`${scope}: 収録範囲の正本がない`);
  if (errors.length) throw new Error(errors.join('\n'));

  const output = path.join(wiki, 'index.md');
  const temporary = `${output}.tmp-${process.pid}`;
  try {
    await writeFile(temporary, renderIndex(root, pages));
    await rename(temporary, output);
  } finally {
    await rm(temporary, { force: true });
  }
  return output;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateIndex(process.argv[2]).then(
    (output) => console.log(`generated ${output}`),
    (error) => { console.error(error.message); process.exitCode = 1; },
  );
}
