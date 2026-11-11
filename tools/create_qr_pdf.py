#!/usr/bin/env python3
"""Create the print-ready Notation Lab tracked QR card sheet."""

from __future__ import annotations

import argparse
from pathlib import Path
from textwrap import wrap

from reportlab.graphics import renderPDF
from reportlab.graphics.barcode.qr import QrCodeWidget
from reportlab.graphics.shapes import Drawing
from reportlab.lib import colors
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.pdfbase.pdfmetrics import stringWidth


PAGE_W, PAGE_H = A4
ROOT = Path(__file__).resolve().parents[1]
DEFAULT_OUTPUT = ROOT / "output" / "pdf" / "Notation_Lab_QR_Print_Sheet.pdf"

CANONICAL_URL = "https://notationlab.pages.dev/"
CAMPAIGN = "notation_lab_print"
PLACEMENTS = (
    ("General Poster", "general-poster", "Poster or public display."),
    ("Handout", "handout", "Take-home sheet or leaflet."),
    ("Noticeboard", "noticeboard", "School, studio or community board."),
    ("Business Card", "business-card", "Small card or contact handoff."),
    ("Event Flyer", "event-flyer", "Event, workshop or performance flyer."),
    ("Studio Board", "studio-board", "Permanent music-room display."),
)

NAVY = HexColor("#141e36")
NEON_BLUE = HexColor("#00e5ff")
NEON_BORDER = HexColor("#008dcc")
DARK_BLUE = HexColor("#032d4d")
TEAL_TEXT = HexColor("#073b5a")
PALE_PANEL = HexColor("#e9feff")
PAGE_BG = HexColor("#eef2f8")
NOTICE_BG = HexColor("#f1f3ff")

MARGIN_X = 13 * mm
MARGIN_TOP = 10 * mm
MARGIN_BOTTOM = 9 * mm
HEADER_H = 21 * mm
NOTICE_H = 15 * mm
GRID_GAP_X = 5 * mm
GRID_GAP_Y = 5 * mm
COLS = 2
ROWS = 3
CARD_PAD = 4 * mm
QR_SIZE = 43 * mm

GRID_TOP = PAGE_H - MARGIN_TOP - HEADER_H - 4 * mm - NOTICE_H - 5 * mm
GRID_W = PAGE_W - 2 * MARGIN_X
GRID_H = PAGE_H - MARGIN_TOP - HEADER_H - 4 * mm - NOTICE_H - 5 * mm - MARGIN_BOTTOM - 8 * mm
CARD_W = (GRID_W - GRID_GAP_X) / COLS
CARD_H = (GRID_H - GRID_GAP_Y * (ROWS - 1)) / ROWS


def tracked_url(slug: str) -> str:
    return f"{CANONICAL_URL}?utm_source=qr&utm_medium=offline&utm_campaign={CAMPAIGN}&utm_content={slug}"


def draw_qr(c: canvas.Canvas, value: str, x: float, y: float, size: float) -> None:
    """Draw a vector QR with a white quiet zone and high error correction."""
    c.saveState()
    quiet = 2.3 * mm
    c.setFillColor(colors.white)
    c.roundRect(x - quiet, y - quiet, size + 2 * quiet, size + 2 * quiet, 1.5 * mm, fill=1, stroke=0)
    widget = QrCodeWidget(
        value,
        x=0,
        y=0,
        barWidth=size,
        barHeight=size,
        barBorder=4,
        barLevel="H",
        barFillColor=colors.black,
    )
    drawing = Drawing(size, size)
    drawing.add(widget)
    renderPDF.draw(drawing, c, x, y)
    c.restoreState()


def draw_wrapped(c: canvas.Canvas, text: str, x: float, y: float, width: float, font: str, size: float, leading: float, color) -> float:
    c.setFont(font, size)
    c.setFillColor(color)
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = word if not current else f"{current} {word}"
        if stringWidth(candidate, font, size) <= width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def card_position(row: int, col: int) -> tuple[float, float]:
    x = MARGIN_X + col * (CARD_W + GRID_GAP_X)
    y = GRID_TOP - (row + 1) * CARD_H - row * GRID_GAP_Y
    return x, y


def draw_card(c: canvas.Canvas, row: int, col: int, title: str, slug: str, description: str, placement_number: int) -> None:
    x, y = card_position(row, col)
    c.saveState()
    c.setFillColor(NEON_BLUE)
    c.setStrokeColor(NEON_BORDER)
    c.setLineWidth(0.8)
    c.roundRect(x, y, CARD_W, CARD_H, 4 * mm, fill=1, stroke=1)

    qr_x = x + CARD_PAD
    qr_y = y + CARD_H - CARD_PAD - QR_SIZE
    draw_qr(c, tracked_url(slug), qr_x, qr_y, QR_SIZE)

    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 11.5)
    c.drawCentredString(qr_x + QR_SIZE / 2, qr_y - 5.2 * mm, "Notation-Lab")

    text_x = x + CARD_PAD + QR_SIZE + 5 * mm
    text_w = CARD_W - (text_x - x) - CARD_PAD
    text_y = y + CARD_H - CARD_PAD - 1 * mm
    c.setFillColor(HexColor("#003b6d"))
    c.setFont("Helvetica-Bold", 6.5)
    c.drawString(text_x, text_y, f"PLACEMENT {placement_number:02d}")
    text_y -= 7 * mm
    text_y = draw_wrapped(c, title, text_x, text_y, text_w, "Helvetica-Bold", 12, 14, DARK_BLUE)
    text_y -= 2 * mm
    text_y = draw_wrapped(c, description, text_x, text_y, text_w, "Helvetica", 7.8, 10, TEAL_TEXT)
    text_y -= 4 * mm

    c.setFillColor(PALE_PANEL)
    c.roundRect(text_x, max(y + CARD_PAD, text_y - 13 * mm), text_w, 13 * mm, 1.5 * mm, fill=1, stroke=0)
    c.setFillColor(DARK_BLUE)
    code_y = max(y + CARD_PAD + 9.5 * mm, text_y - 4 * mm)
    c.setFont("Courier-Bold", 6.1)
    for line in wrap(f"utm_content={slug}", width=22):
        c.drawString(text_x + 2.2 * mm, code_y, line)
        code_y -= 7
    c.restoreState()


def draw_header(c: canvas.Canvas) -> None:
    y = PAGE_H - MARGIN_TOP - HEADER_H
    c.setFillColor(NAVY)
    c.roundRect(MARGIN_X, y, GRID_W, HEADER_H, 4 * mm, fill=1, stroke=0)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 15)
    c.drawString(MARGIN_X + 6 * mm, y + 11.6 * mm, "Tracked QR print sheet")
    c.setFillColor(HexColor("#c5cee4"))
    c.setFont("Helvetica", 7.4)
    c.drawString(MARGIN_X + 6 * mm, y + 5.6 * mm, "Six top-level Notation Lab entry codes | Print at 100% / actual size")
    c.setFillColor(HexColor("#a2adff"))
    c.setFont("Helvetica-Bold", 8.2)
    c.drawRightString(MARGIN_X + GRID_W - 6 * mm, y + 11.8 * mm, "NOTATION LAB")


def draw_notice(c: canvas.Canvas) -> None:
    y = PAGE_H - MARGIN_TOP - HEADER_H - 4 * mm - NOTICE_H
    c.setFillColor(NOTICE_BG)
    c.setStrokeColor(HexColor("#6b77ed"))
    c.setLineWidth(2.2)
    c.roundRect(MARGIN_X, y, GRID_W, NOTICE_H, 2 * mm, fill=1, stroke=0)
    c.rect(MARGIN_X, y, 1.4 * mm, NOTICE_H, fill=1, stroke=0)
    c.setFillColor(DARK_BLUE)
    c.setFont("Helvetica-Bold", 7.2)
    c.drawString(MARGIN_X + 5 * mm, y + 9.2 * mm, "Every code opens the same top-level app.")
    c.setFillColor(TEAL_TEXT)
    c.setFont("Helvetica", 6.7)
    c.drawString(MARGIN_X + 5 * mm, y + 4.0 * mm, "Visitors choose the practice tab themselves; each code carries a placement-only tracking label.")


def draw_footer(c: canvas.Canvas) -> None:
    c.setFillColor(HexColor("#64728b"))
    c.setFont("Helvetica", 6.2)
    c.drawString(MARGIN_X, 4.5 * mm, "Canonical destination: https://notationlab.pages.dev/  |  Print at 100% / Actual Size")
    c.drawRightString(PAGE_W - MARGIN_X, 4.5 * mm, "Test-scan one code before trimming")


def create_pdf(output: Path) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(output), pagesize=A4, pageCompression=1)
    c.setTitle("Notation Lab tracked QR print sheet")
    c.setAuthor("Notation Lab")
    c.setFillColor(PAGE_BG)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    draw_header(c)
    draw_notice(c)
    for index, (title, slug, description) in enumerate(PLACEMENTS):
        row, col = divmod(index, COLS)
        draw_card(c, row, col, title, slug, description, index + 1)
    draw_footer(c)
    c.showPage()
    c.save()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("output", nargs="?", type=Path, default=DEFAULT_OUTPUT)
    args = parser.parse_args()
    create_pdf(args.output)
    print(args.output)


if __name__ == "__main__":
    main()
