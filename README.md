# Personal CV Website

This is a static CV website with data-driven content.

## Manual Update (Very Easy)

Edit only this file:
- `data/profile.json`

Then commit and push to `main`; GitHub Pages will auto-deploy.

## Local preview

You can use any static server, e.g.:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a new GitHub repository, e.g. `chunyanghe-cv`.
2. Push this folder content to the repository root.
3. In GitHub repo settings: `Pages` -> Source: `GitHub Actions`.
4. Push to `main`, wait for workflow `Deploy CV Site to GitHub Pages`.

Your site URL will be:
- `https://<your-github-username>.github.io/<repo-name>/`
