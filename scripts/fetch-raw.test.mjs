import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import { access, chmod, copyFile, mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import test from "node:test";

const run = promisify(execFile);

test("取得失敗時は検証済みの途中成果もRawへ追加しない", async (t) => {
  const root = await mkdtemp(path.join(tmpdir(), "fetch-raw-test-"));
  const raw = path.join(root, "raw");
  await mkdir(raw);
  await copyFile("raw/fetch.sh", path.join(raw, "fetch.sh"));
  t.after(() => rm(root, { recursive: true, force: true }));

  const good = Buffer.from("good\n");
  const bin = path.join(root, "bin");
  await mkdir(bin);
  await writeFile(path.join(bin, "curl"), "#!/bin/sh\nwhile [ \"$#\" -gt 0 ]; do if [ \"$1\" = --output ]; then output=$2; shift 2; else url=$1; shift; fi; done\ncase $url in */good) printf 'good\\n' > \"$output\" ;; *) printf 'bad\\n' > \"$output\" ;; esac\n");
  await chmod(path.join(bin, "curl"), 0o755);
  const digest = createHash("sha256").update(good).digest("hex");
  const manifest = [
    "# kind\toutput\tsource URL\tacquired date\tcontent identifier",
    `file\titems/example.test/good.txt\thttp://example.test/good\t2026-08-11\tsha256:${digest}`,
    `file\titems/example.test/bad.txt\thttp://example.test/bad\t2026-08-11\tsha256:${"0".repeat(64)}`,
    "",
  ].join("\n");
  await writeFile(path.join(raw, "sources.tsv"), manifest);

  await assert.rejects(run("sh", [path.join(raw, "fetch.sh")], { cwd: root, env: { ...process.env, PATH: `${bin}:${process.env.PATH}` } }));
  await assert.rejects(access(path.join(raw, "items/example.test/good.txt")));
});
