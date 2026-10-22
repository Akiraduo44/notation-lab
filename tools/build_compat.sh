#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
dist="$root/dist"
tmp="${TMPDIR:-/tmp}/notationlab-compat.$$"
mkdir -p "$tmp"
trap 'rm -rf "$tmp"' EXIT

# ES2015 is the public syntax floor. Runtime guards in the app cover APIs that
# are absent in older Safari, Firefox and embedded webviews.
npx --yes esbuild@0.25.6 "$dist/assets/app.js" --target=es2015 --minify=false --legal-comments=eof --outfile="$tmp/app.js"
npx --yes esbuild@0.25.6 "$dist/assets/vexflow-4.2.5.js" --target=es2015 --minify=false --legal-comments=eof --outfile="$tmp/vexflow.js"
npx --yes esbuild@0.25.6 "$dist/assets/engraving.js" --target=es2015 --minify=false --legal-comments=eof --outfile="$tmp/engraving.js"
mv "$tmp/app.js" "$dist/assets/app.js"
mv "$tmp/vexflow.js" "$dist/assets/vexflow-4.2.5.js"
mv "$tmp/engraving.js" "$dist/assets/engraving.js"
printf 'Built ES2015-compatible public assets in %s\n' "$dist/assets"
