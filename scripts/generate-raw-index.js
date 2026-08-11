#!/usr/bin/env node

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const [nodeMajor, nodeMinor] = process.versions.node.split(".").map(Number);
if (nodeMajor < 24 || (nodeMajor === 24 && nodeMinor < 12)) throw new Error("Node.js 24.12.0 or newer is required");
if (process.argv.length !== 2) {
  console.error(`usage: ${process.argv[1]}`);
  process.exit(2);
}

const repository = path.join(import.meta.dirname, "..");
const raw = path.join(repository, "raw");
const output = path.join(repository, "wiki", "raw-index.md");

function resourceFiles(directory, prefix = "") {
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true }).sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)) {
    const relative = path.posix.join(prefix, entry.name);
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...resourceFiles(absolute, relative));
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
const files = hosts.flatMap((host) => resourceFiles(path.join(raw, host), host)).sort();
const rows = files.map((file) => `| [${tableCell(file)}](../raw/${file}) | ${tableCell(documentTitle(path.join(raw, ...file.split("/"))))} |`);
const page = [
  "# Rawソース",
  "",
  "> このファイルは`scripts/generate-raw-index.js`による生成物である。直接編集せず、このスクリプトを実行して再生成する。",
  "",
  "| Rawファイル | 文書タイトル |",
  "|---|---|",
  ...rows,
  "",
].join("\n");

writeFileSync(output, page);
console.log(`wiki/raw-index.mdを生成（${files.length}ファイル）`);
