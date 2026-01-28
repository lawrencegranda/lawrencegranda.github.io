#!/usr/bin/env bash
#
# Development workflow: format, test, then run the site with drafts
#

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$(dirname "$SCRIPT_DIR")"

echo "=== Formatting ==="
bash "$SCRIPT_DIR/format.sh"

echo "=== Testing ==="
bash "$SCRIPT_DIR/test.sh"

echo "=== Running Dev Server ==="
bundle exec jekyll s -l
