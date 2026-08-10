#!/bin/sh
set -eu

root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
raw="$root/raw"
manifest="$raw/sources.tsv"
[ "$#" -eq 0 ] || { echo "usage: $0" >&2; exit 2; }
[ -z "$(git -C "$root" status --porcelain -- raw ':!raw/README.md' ':!raw/fetch.sh' ':!raw/sources.tsv')" ] || { echo 'raw has uncommitted changes' >&2; exit 1; }

tmp=$(mktemp -d "${TMPDIR:-/tmp}/fetch-raw.XXXXXX")
cleanup() {
	[ -d "$raw" ] || [ ! -d "$tmp/raw.old" ] || mv "$tmp/raw.old" "$raw"
	rm -rf "$tmp"
}
trap cleanup EXIT HUP INT TERM
stage="$tmp/raw"
mkdir "$stage"
cp "$raw/README.md" "$raw/fetch.sh" "$manifest" "$stage"

tab=$(printf '\t')
while IFS="$tab" read -r kind output url; do
	case "$kind" in ''|'#'*) continue ;; esac
	download="$tmp/download"
	echo "fetch $output"
	curl --fail --location --proto '=https' --retry 3 --silent --show-error --output "$download" "$url"
	case "$kind" in
		file) mkdir -p "$stage/$(dirname "$output")"; mv "$download" "$stage/$output" ;;
		zip)
			unzip -Z1 "$download" | grep -Eq '(^/|(^|/)\.\.(/|$))' && { echo "unsafe archive: $url" >&2; exit 1; }
			mkdir "$stage/$output"
			unzip -q "$download" -d "$stage/$output"
			;;
		tar)
			tar -tf "$download" | grep -Eq '(^/|(^|/)\.\.(/|$))' && { echo "unsafe archive: $url" >&2; exit 1; }
			tar -xf "$download" -C "$stage"
			[ -d "$stage/$output" ]
			;;
		*) echo "unknown source kind: $kind" >&2; exit 1 ;;
	esac
done < "$manifest"

mv "$raw" "$tmp/raw.old"
mv "$stage" "$raw" || { mv "$tmp/raw.old" "$raw"; exit 1; }
echo 'raw updated'
