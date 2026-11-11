#!/usr/bin/env python3
"""Create the minimal Notation Lab tracked QR card sheet."""

from __future__ import annotations

import argparse
from pathlib import Path

from reportlab.graphics import renderPDF
from reportlab.graphics.barcode.qr import QrCodeWidget
from reportlab.graphics.shapes import Drawing
from reportlab.lib import colors
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas


PAGE_W, PAGE_H = A4
ROOT = Path(__file__).resolve().parents[1]
DEFAULT_OUTPUT = ROOT / "output" / "pdf" / "Notation_Lab_QR_Print_Sheet.pdf"

CANONICAL_URL = "https://notationlab.pages.dev/"
CAMPAIGN = "notation_lab_print"
PLACEMENT_SLUGS = (
    "general-poster",
    "handout",
    "noticeboard",
    "business-card",
    "event-flyer",
    "studio-board",
)

# Soft baby blue: clearly blue, but no longer fluorescent.
BABY_BLUE = HexColor("#7CC8EB")
BABY_BLUE_BORDER = HexColor("#4EA8D6")

MARGIN_X = 13 * mm
MARGIN_Y = 13 * mm
GRID_GAP_X = 5 * mm
GRID_GAP_Y = 5 * mm
COLS = 2
ROWS = 3
CARD_W = (PAGE_W - 2 * MARGIN_X - GRID_GAP_X) / COLS
CARD_H = (PAGE_H - 2 * MARGIN_Y - GRID_GAP_Y * (ROWS - 1)) / ROWS
QR_SIZE = 48 * mm
CARD_RADIUS = 4 * mm


def tracked_url(slug: str) -> str:
    return f"{CANONICAL_URL}?utm_source=qr&utm_medium=offline&utm_campaign={CAMPAIGN}&utm_content={slug}"


def card_position(row: int, col: int) -> tuple[float, float]:
    x = MARGIN_X + col * (CARD_W + GRID_GAP_X)
    y = PAGE_H - MARGIN_Y - (row + 1) * CARD_H - row * GRID_GAP_Y
    return x, y


def draw_beamed_eighth_notes(c: canvas.Canvas, cx: float, cy: float) -> None:
    """Draw a small beamed-eighth-notes logo over the QR centre."""
    logo = 12 * mm
    x = cx - logo / 2
    y = cy - logo / 2
    c.saveState()
    c.setFillColor(colors.white)
    c.setStrokeColor(BABY_BLUE)
    c.setLineWidth(0.7)
    c.roundRect(x, y, logo, logo, 1.4 * mm, fill=1, stroke=1)
    scale = logo / 20
    c.setFillColor(HexColor("#032d4d"))
    c.ellipse(x + 2.2 * scale, y + 2.2 * scale, x + 6.6 * scale, y + 5 * scale, fill=1, stroke=0)
    c.ellipse(x + 8.2 * scale, y + 2.2 * scale, x + 12.6 * scale, y + 5 * scale, fill=1, stroke=0)
    c.setStrokeColor(HexColor("#032d4d"))
    c.setLineWidth(1.35 * scale)
    c.setLineCap(1)
    c.line(x + 6.1 * scale, y + 4.8 * scale, x + 6.1 * scale, y + 12.2 * scale)
    c.line(x + 12.1 * scale, y + 4.8 * scale, x + 12.1 * scale, y + 13.7 * scale)
    c.setFillColor(HexColor("#032d4d"))
    c.setStrokeColor(HexColor("#032d4d"))
    c.setLineWidth(0)
    c.saveState()
    p = c.beginPath()
    p.moveTo(x + 6.1 * scale, y + 12.2 * scale)
    p.lineTo(x + 12.1 * scale, y + 13.7 * scale)
    p.lineTo(x + 12.1 * scale, y + 12.2 * scale)
    p.lineTo(x + 6.1 * scale, y + 10.7 * scale)
    p.close()
    c.drawPath(p, fill=1, stroke=0)
    c.restoreState()
    c.restoreState()


def draw_qr(c: canvas.Canvas, value: str, x: float, y: float, size: float) -> None:
    """Draw a vector QR with a white quiet zone and high error correction."""
    c.saveState()
    quiet = 2.5 * mm
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
    draw_beamed_eighth_notes(c, x + size / 2, y + size / 2)
    c.restoreState()


def draw_card(c: canvas.Canvas, row: int, col: int, slug: str) -> None:
    x, y = card_position(row, col)
    c.saveState()
    c.setFillColor(BABY_BLUE)
    c.setStrokeColor(BABY_BLUE_BORDER)
    c.setLineWidth(0.8)
    c.roundRect(x, y, CARD_W, CARD_H, CARD_RADIUS, fill=1, stroke=1)

    qr_x = x + (CARD_W - QR_SIZE) / 2
    qr_y = y + (CARD_H + 8 * mm - QR_SIZE) / 2
    draw_qr(c, tracked_url(slug), qr_x, qr_y, QR_SIZE)

    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 15)
    c.drawCentredString(x + CARD_W / 2, qr_y - 8 * mm, "Notation-Lab")
    c.restoreState()


def create_pdf(output: Path) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(output), pagesize=A4, pageCompression=1)
    c.setTitle("Notation Lab QR code cards")
    c.setAuthor("Notation Lab")
    for index, slug in enumerate(PLACEMENT_SLUGS):
        row, col = divmod(index, COLS)
        draw_card(c, row, col, slug)
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
