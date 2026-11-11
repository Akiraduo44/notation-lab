#!/usr/bin/env python3
"""Add a small beamed-eighth-notes mark to the center of existing QR SVGs."""

from __future__ import annotations

import argparse
from pathlib import Path
import re


OVERLAY = (
    '<g data-notation-lab-logo="beamed-eighth-notes">'
    '<rect x="17.5" y="17.5" width="14" height="14" rx="2" fill="#ffffff" stroke="#7CC8EB" stroke-width="0.9"/>'
    '<ellipse cx="22.2" cy="28.1" rx="2.2" ry="1.4" fill="#032d4d"/>'
    '<ellipse cx="28.2" cy="28.1" rx="2.2" ry="1.4" fill="#032d4d"/>'
    '<path d="M24.1 27.8V21.9 M30.1 27.8V20.5" fill="none" stroke="#032d4d" stroke-width="1.35" stroke-linecap="round"/>'
    '<path d="M24.1 21.9L30.1 20.5V22.1L24.1 23.5Z" fill="#032d4d"/>'
    '</g>'
)
OVERLAY_RE = re.compile(r'<g data-notation-lab-logo="beamed-eighth-notes">.*?</g>')


def add_logo(directory: Path) -> int:
    changed = 0
    for path in sorted(directory.glob("*.svg")):
        source = path.read_text(encoding="utf-8").rstrip()
        if 'data-notation-lab-logo="beamed-eighth-notes"' in source:
            continue
        if not source.endswith("</svg>"):
            raise ValueError(f"SVG does not end with </svg>: {path}")
        path.write_text(source[:-6] + OVERLAY + "</svg>", encoding="utf-8")
        changed += 1
    return changed


def remove_logo(directory: Path) -> int:
    changed = 0
    for path in sorted(directory.glob("*.svg")):
        source = path.read_text(encoding="utf-8")
        updated = OVERLAY_RE.sub("", source)
        if updated == source:
            continue
        path.write_text(updated, encoding="utf-8")
        changed += 1
    return changed


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("directories", nargs="+", type=Path)
    parser.add_argument("--remove", action="store_true", help="remove the embedded musical logo")
    args = parser.parse_args()
    operation = remove_logo if args.remove else add_logo
    total = sum(operation(directory) for directory in args.directories)
    print(f"updated {total} QR SVGs")


if __name__ == "__main__":
    main()
