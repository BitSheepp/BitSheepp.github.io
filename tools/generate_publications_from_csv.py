#!/usr/bin/env python3
"""从固定 CSV 生成网站论文数据，并按规则排序。
排序规则：
1) 已发表在前，未发表在后
2) 同组内按影响因子从高到低
3) 再按年份从新到旧
"""

from __future__ import annotations

import csv
import json
import re
from pathlib import Path

CSV_PATH = Path(r"D:\0_实验室\0-hcy-cv\文献引用\citations.csv")
OUT_PATH = Path(r"C:\Users\1\Documents\Playground\personal-cv-site\data\publications.json")

# 可手动维护：后续你知道更精确 IF 后，只需改这里的值。
JOURNAL_IF = {
    "journal of pineal research": 7.4,
    "plant communications": 9.4,
    "horticultural plant journal": 5.7,
    "scientia horticulturae": 4.3,
}

UNPUBLISHED_HINTS = [
    "submitted",
    "in preparation",
    "under review",
    "manuscript",
    "preprint",
]


def normalize_journal(name: str) -> str:
    return re.sub(r"\s+", " ", (name or "").strip().lower())


def infer_status(publication: str, title: str) -> str:
    text = f"{publication} {title}".lower()
    for h in UNPUBLISHED_HINTS:
        if h in text:
            return "Unpublished"
    return "Published"


def parse_rows(path: Path) -> list[dict]:
    rows: list[dict] = []
    with path.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        for i, r in enumerate(reader, start=1):
            pub = (r.get("Publication") or "").strip()
            title = (r.get("Title") or "").strip()
            year = (r.get("Year") or "").strip()
            journal_key = normalize_journal(pub)
            impact_factor = JOURNAL_IF.get(journal_key, 0.0)
            status = infer_status(pub, title)

            rows.append(
                {
                    "id": f"P.{i}",
                    "title": title,
                    "publication": pub,
                    "year": year,
                    "status": status,
                    "impact_factor": impact_factor,
                    "doi_url": "",
                    "pdf_url": "",
                    "authors": (r.get("Authors") or "").strip(),
                    "publisher": (r.get("Publisher") or "").strip(),
                }
            )
    return rows


def sort_key(item: dict):
    published_rank = 0 if item.get("status") == "Published" else 1
    impact_factor = float(item.get("impact_factor") or 0)
    try:
        year = int(item.get("year") or 0)
    except ValueError:
        year = 0
    return (published_rank, -impact_factor, -year)


def main() -> None:
    if not CSV_PATH.exists():
        raise SystemExit(f"CSV not found: {CSV_PATH}")

    rows = parse_rows(CSV_PATH)
    rows.sort(key=sort_key)

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(json.dumps(rows, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Generated: {OUT_PATH} ({len(rows)} records)")


if __name__ == "__main__":
    main()
