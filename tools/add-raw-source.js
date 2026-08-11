#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, mkdtempDisposableSync, renameSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

const [source, kind = "file", extra] = process.argv.slice(2);
if (!source || extra || !["file", "zip", "tar"].includes(kind)) {
  console.error(`usage: ${process.argv[1]} <URL> [file|zip|tar]`);
  process.exit(2);
}

function outputFor(source) {
  const url = new URL(source);
  if (url.protocol !== "https:" && url.protocol !== "http:") throw new Error(`unsupported URL: ${source}`);
  const host = url.port ? `${url.hostname}%3A${url.port}` : url.hostname;
  let pathname = url.pathname.replace(/^\/+/, "").replaceAll(":", "%3A").replace(/\/{2,}/g, "/");
  if (!pathname || pathname.endsWith("/")) pathname += "index.html";
  const parts = pathname.split("/");
  if (parts.some((part) => !part || part === "." || part === ".." || part.includes("\\"))) throw new Error(`unsafe URL path: ${source}`);
  if (url.search) pathname += `-${createHash("sha256").update(source).digest("hex").slice(0, 16)}`;
  return path.posix.join(host, pathname);
}

function assertSafeEntries(entries) {
  for (const entry of entries.trim().split("\n")) {
    if (!entry) continue;
    const parts = entry.split("/");
    if (entry.startsWith("/") || entry.includes("\\") || parts.includes("..")) throw new Error(`unsafe archive: ${source}`);
  }
}

const raw = path.join(import.meta.dirname, "..", "raw");
const output = outputFor(source);
const target = path.join(raw, ...output.split("/"));
if (existsSync(target)) throw new Error(`target already exists: raw/${output}`);

using temporary = mkdtempDisposableSync(path.join(tmpdir(), "add-raw-source-"));
const download = path.join(temporary.path, "download");
const response = await fetch(source);
if (!response.ok) throw new Error(`fetch failed (${response.status}): ${source}`);
const retrievedAt = new Date().toISOString();
// ponytail: one response is buffered; stream it if Raw sources become large.
writeFileSync(download, Buffer.from(await response.arrayBuffer()));

let candidate = download;
if (kind !== "file") {
  candidate = path.join(temporary.path, "source");
  mkdirSync(candidate);
  const command = kind === "zip" ? "unzip" : "tar";
  const listArgs = kind === "zip" ? ["-Z1", download] : ["-tf", download];
  assertSafeEntries(execFileSync(command, listArgs, { encoding: "utf8" }));
  const extractArgs = kind === "zip" ? ["-q", download, "-d", candidate] : ["-xf", download, "-C", candidate];
  execFileSync(command, extractArgs, { stdio: "inherit" });
}

if (existsSync(target)) throw new Error(`target already exists: raw/${output}`);
mkdirSync(path.dirname(target), { recursive: true });
renameSync(candidate, target);
console.log(`source ${source}`);
console.log(`final ${response.url}`);
console.log(`retrieved ${retrievedAt}`);
console.log(`added raw/${output}`);
