#!/bin/sh
set -eu

root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
raw="$root/raw"
manifest="$raw/sources.tsv"
[ "$#" -eq 0 ] || { echo "usage: $0" >&2; exit 2; }

tmp=$(mktemp -d "${TMPDIR:-/tmp}/fetch-raw.XXXXXX")
trap 'rm -rf "$tmp"' EXIT HUP INT TERM
stage="$tmp/stage"
mkdir "$stage"
tab=$(printf '\t')

while IFS="$tab" read -r kind output url acquired identifier; do
	case "$kind" in ''|'#'*) continue ;; esac
	digest=${identifier#sha256:}
	[ "$identifier" = "sha256:$digest" ] && [ "${#digest}" -eq 64 ] || { echo "invalid digest: $output" >&2; exit 1; }
	target="$raw/$output"
	if [ "$kind" = file ] && [ -f "$target" ]; then
		actual=$(shasum -a 256 "$target" | cut -d ' ' -f 1)
		[ "$actual" = "$digest" ] || { echo "digest mismatch: $output" >&2; exit 1; }
		continue
	fi
	if [ "$kind" != file ] && [ -d "$target" ]; then
		continue
	fi
	[ ! -e "$target" ] || { echo "unexpected target: $output" >&2; exit 1; }
	candidate="$stage/$output"

	download="$tmp/download"
	echo "fetch $output"
	curl --fail --location --proto '=https,http' --retry 3 --silent --show-error --output "$download" "$url"
	actual=$(shasum -a 256 "$download" | cut -d ' ' -f 1)
	[ "$actual" = "$digest" ] || { echo "digest mismatch: $output" >&2; exit 1; }

	case "$kind" in
		file)
			mkdir -p "$(dirname "$candidate")"
			mv "$download" "$candidate"
			;;
		zip)
			unzip -Z1 "$download" | grep -Eq '(^/|(^|/)\.\.(/|$))' && { echo "unsafe archive: $url" >&2; exit 1; }
			mkdir -p "$candidate"
			unzip -q "$download" -d "$candidate"
			;;
		tar)
			tar -tf "$download" | grep -Eq '(^/|(^|/)\.\.(/|$))' && { echo "unsafe archive: $url" >&2; exit 1; }
			extract=$(mktemp -d "$tmp/archive.XXXXXX")
			tar -xf "$download" -C "$extract"
			[ -d "$extract/$output" ] || { echo "archive root mismatch: $output" >&2; exit 1; }
			mkdir -p "$(dirname "$candidate")"
			mv "$extract/$output" "$candidate"
			;;
		*) echo "unknown source kind: $kind" >&2; exit 1 ;;
	esac
done < "$manifest"

while IFS="$tab" read -r kind output url acquired identifier; do
	case "$kind" in ''|'#'*) continue ;; esac
	[ ! -e "$stage/$output" ] || [ ! -e "$raw/$output" ] || { echo "unexpected target: $output" >&2; exit 1; }
done < "$manifest"

while IFS="$tab" read -r kind output url acquired identifier; do
	case "$kind" in ''|'#'*) continue ;; esac
	[ -e "$stage/$output" ] || continue
	mkdir -p "$(dirname "$raw/$output")"
	mv "$stage/$output" "$raw/$output"
done < "$manifest"

echo 'raw verified'
