#!/usr/bin/env node

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

if (process.argv.length !== 2) {
  console.error(`usage: ${process.argv[1]}`);
  process.exit(2);
}

const repository = path.join(import.meta.dirname, "..");
const raw = path.join(repository, "raw");
const output = path.join(repository, "wiki", "raw-source-index.md");

function sourceFiles(directory, prefix = "") {
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true }).sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)) {
    const relative = path.posix.join(prefix, entry.name);
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...sourceFiles(absolute, relative));
    else if (entry.isFile()) files.push(relative);
  }
  return files;
}

function decodeEntities(value) {
  const named = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: '"' };
  return value.replace(/&(#x[\da-f]+|#\d+|amp|apos|gt|lt|nbsp|quot);/gi, (entity, key) => {
    if (key[0] !== "#") return named[key.toLowerCase()];
    const codePoint = Number.parseInt(key[1].toLowerCase() === "x" ? key.slice(2) : key.slice(1), key[1].toLowerCase() === "x" ? 16 : 10);
    return codePoint <= 0x10ffff ? String.fromCodePoint(codePoint) : entity;
  });
}

function documentTitle(file) {
  const contents = readFileSync(file);
  const head = contents.subarray(0, Math.min(contents.length, 262144)).toString("utf8");
  let start = head.replace(/^\uFEFF?\s*/, "");
  while (start.startsWith("<!--")) {
    const end = start.indexOf("-->");
    if (end === -1) return "—";
    start = start.slice(end + 3).trimStart();
  }
  if (!/^(?:<!doctype\b|<\?xml\b|<html\b|<head\b|<header\b|<title\b)/i.test(start)) return "—";
  const title = head.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title\s*>/i)?.[1];
  return title ? decodeEntities(title.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()) : "—";
}

function tableCell(value) {
  return value.replaceAll("\\", "\\\\").replaceAll("|", "\\|").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

const hosts = readdirSync(raw, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();
const sources = hosts.map((host) => ({ host, files: sourceFiles(path.join(raw, host)).sort() }));
const fileCount = sources.reduce((total, source) => total + source.files.length, 0);
const sections = sources.flatMap(({ host, files }) => [
  `## \`${host}\`（${files.length}ファイル）`,
  "",
  "| Rawファイル | 文書タイトル |",
  "|---|---|",
  ...files.map((file) => `| [${tableCell(file)}](../raw/${host}/${file}) | ${tableCell(documentTitle(path.join(raw, host, ...file.split("/"))))} |`),
  "",
]);
const page = [
  "# Rawソース索引",
  "",
  "> このファイルは`tools/generate-raw-source-index.js`による生成物である。直接編集せず、このツールを実行して再生成する。",
  "",
  `Rawに保存された${fileCount}ファイルを、${sources.length}の取得元ホストごとに収録する。`,
  "",
  ...sections,
].join("\n");

writeFileSync(output, page);
console.log(`generated wiki/raw-source-index.md (${fileCount} files)`);
