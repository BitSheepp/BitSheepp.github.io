#!/usr/bin/env python3
from __future__ import annotations

import csv
import json
import re
from pathlib import Path

CSV_PATH = Path(r"D:\0_实验室\0-hcy-cv\文献引用\citations.csv")
OUT_PATH = Path(r"C:\Users\1\Documents\Playground\personal-cv-site\data\publications.json")

JOURNAL_IF = {
    "journal of pineal research": 7.24,
    "plant communications": 10.26,
    "horticultural plant journal": 7.04,
    "scientia horticulturae": 5.03,
}

TITLE_ZH = {
    "Identification of a COMT Gene Involved in the Biosynthesis of Melatonin Which Mediates Resistance to Citrus Canker": "参与褪黑素生物合成并介导柑橘溃疡病抗性的 COMT 基因鉴定",
    "Molecular mechanisms of high levels of L-ascorbic acid accumulation in chestnut rose fruits": "刺梨果实高水平 L-抗坏血酸积累的分子机制",
    "RroxbHLH91 positively regulates multiple genes involved in the accumulation of L-ascorbic acid": "RroxbHLH91 正向调控多基因促进 L-抗坏血酸积累",
    "PhenoCitrus: An automated platform to phenotyping morphological traits of citrus fruit": "PhenoCitrus：用于柑橘果实形态性状自动表型分析的平台",
}

JOURNAL_ZH = {
    "Journal of pineal research": "Journal of Pineal Research",
    "Plant Communications": "Plant Communications",
    "Horticultural Plant Journal": "Horticultural Plant Journal",
    "Scientia Horticulturae": "Scientia Horticulturae",
}

UNPUBLISHED_HINTS = ["submitted", "in preparation", "under review", "manuscript", "preprint"]


def norm(s: str) -> str:
    return re.sub(r"\s+", " ", (s or "").strip().lower())


def infer_status(publication: str, title: str) -> str:
    text = f"{publication} {title}".lower()
    for h in UNPUBLISHED_HINTS:
        if h in text:
            return "Unpublished"
    if not publication.strip():
        return "Unpublished"
    return "Published"


def normalize_doi(v: str) -> tuple[str, str]:
    raw = (v or "").strip()
    if not raw:
        return "", ""
    if raw.startswith("http://") or raw.startswith("https://"):
        doi = raw.split("doi.org/")[-1].strip()
        return doi, raw
    doi = raw.replace("doi:", "").strip()
    return doi, f"https://doi.org/{doi}"


def parse_rows(path: Path) -> list[dict]:
    items: list[dict] = []
    with path.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        for i, r in enumerate(reader, start=1):
            title = (r.get("Title") or "").strip()
            pub = (r.get("Publication") or "").strip()
            year = (r.get("Year") or "").strip()
            doi, doi_url = normalize_doi(r.get("doi", ""))

            status = infer_status(pub, title)
            impact_factor = JOURNAL_IF.get(norm(pub), 0.0)

            items.append({
                "id": f"P.{i}",
                "title_en": title,
                "title_zh": TITLE_ZH.get(title, title),
                "publication_en": pub,
                "publication_zh": JOURNAL_ZH.get(pub, pub),
                "year": year,
                "status": status,
                "impact_factor": impact_factor,
                "doi": doi,
                "doi_url": doi_url,
                "authors": (r.get("Authors") or "").strip(),
            })
    return items


def sort_key(item: dict):
    status_rank = 0 if item.get("status") == "Published" else 1
    ifv = float(item.get("impact_factor") or 0)
    try:
        year = int(item.get("year") or 0)
    except ValueError:
        year = 0
    return (status_rank, -ifv, -year)


def main() -> None:
    if not CSV_PATH.exists():
        raise SystemExit(f"CSV not found: {CSV_PATH}")
    rows = parse_rows(CSV_PATH)
    rows.sort(key=sort_key)
    OUT_PATH.write_text(json.dumps(rows, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Generated: {OUT_PATH} ({len(rows)} records)")


if __name__ == "__main__":
    main()
