# Chunyang He Academic Website

This repository hosts the formal Jekyll site for a bilingual academic homepage on GitHub Pages.

## Maintenance model

The site is maintained with:

- Markdown for pages, research entries, and blog posts
- YAML for short structured data
- LaTeX inside Markdown through MathJax

Long-form English and Chinese content should always live in separate files.

## Main content sources

- `index.md` and `cn/index.md`: homepage-specific copy
- `_pages/` and `cn/`: English and Chinese standalone pages
- `_research/`: bilingual research detail pages
- `_posts/`: optional blog posts
- `_data/profile.yml`: short identity facts, links, badges, metrics
- `_data/publications.yml`: publication metadata
- `_data/cv.yml`: education, experience, skills, awards
- `_data/news.yml`: timeline entries for homepage and news page

## Local preview

Use a Jekyll-compatible preview workflow when available, for example:

```bash
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000/`.

If Ruby is unavailable on the current machine, content can still be edited directly and published through GitHub Pages.

## Deployment

The site deploys through GitHub Pages from the repository default branch and workflow configuration already included in `.github/workflows/pages.yml`.
