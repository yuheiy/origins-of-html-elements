import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { generateIndex } from './generate-index.mjs';

const page = (status, summary, title, body = '', confidence) => `---\nstatus: ${status}\nsummary: ${summary}\n---\n\n# ${title}\n\n${body}${confidence ? `\n\n## 確度\n\n**${confidence}**` : ''}\n`;

test('分類、順序、集計を生成し、検証失敗時は既存Indexを保持する', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'html-origins-index-'));
  try {
    for (const type of ['elements', 'sources', 'lineages', 'syntheses']) await mkdir(path.join(root, 'wiki', type), { recursive: true });
    await writeFile(path.join(root, 'wiki', 'elements', 'b.md'), page('完成', 'B summary', '`<b>`', '', 'B'));
    await writeFile(path.join(root, 'wiki', 'elements', 'h1-h6.md'), page('要検証', 'Heading summary', '`<h1>`〜`<h6>`', '[scope](../syntheses/scope.md)', 'A−'));
    await writeFile(path.join(root, 'wiki', 'syntheses', 'scope.md'), page('調査中', 'Scope summary', 'Scope'));

    const output = await generateIndex(root);
    const generated = await readFile(output, 'utf8');
    assert.match(generated, /Pages — 調査中: 1 \/ 要検証: 1 \/ 完成: 1/);
    assert.match(generated, /Elements — 調査中: 0 \/ 要検証: 6 \/ 完成: 1/);
    assert.match(generated, /Confidence — A: 0 \/ A−: 6 \/ B: 1 \/ C: 0 \/ 未評価: 0/);
    assert.ok(generated.indexOf('elements/b.md') < generated.indexOf('elements/h1-h6.md'));
    assert.match(generated, /## Syntheses[\s\S]*syntheses\/scope.md/);

    await writeFile(path.join(root, 'wiki', 'elements', 'h1-h6.md'), page('要検証', 'Heading summary', '`<h1>`〜`<h6>`', '[missing](missing.md)', 'A−'));
    await assert.rejects(generateIndex(root), /壊れた内部リンク/);
    assert.equal(await readFile(output, 'utf8'), generated);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
