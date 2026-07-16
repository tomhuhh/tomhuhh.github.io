# tomhuhh.github.io — Haowen Hu's academic site

A Jekyll site built for GitHub Pages. Content lives in plain YAML/HTML files
separate from layout, so most updates never require touching CSS or Liquid.

## Live site
https://tomhuhh.github.io/

## How the site is organized

```
_config.yml         Site-wide settings: title, email, Scholar/LinkedIn/GitHub
                     links, CV filename. Edit this for anything global.
_layouts/default.html   The single page wrapper (header + footer + <head>).
_includes/           head.html, header.html (nav), footer.html.
_data/               <- MOST CONTENT UPDATES HAPPEN HERE
  publications.yml   Journal articles, in-prep manuscripts, conference abstracts.
  projects.yml       Research project cards (used on Projects and Research pages).
  news.yml           Dated timeline entries for the News & Updates page.
  awards.yml         Honors and awards list (Media & Recognition page).
index.html, about.html, research.html, publications.html, projects.html,
news.html, media.html, cv.html, contact.html, 404.html
                     One file per page. Mostly static prose + Liquid loops
                     over the _data files above.
assets/
  css/style.css      All styling and design tokens (colors, spacing, fonts).
  js/main.js         Small script for the mobile nav toggle.
  img/               favicon.svg, og-image.png (placeholder), headshot (add yours).
  (no CV file — the CV is intentionally not published on the site; share
   it directly with people who ask, e.g. by email)
```

## Common edits (no HTML needed)

**Add a publication** → open `_data/publications.yml`, copy an existing
entry under `journal`, `preparation`, or `conference`, and fill in the
fields.

**Add a project** → open `_data/projects.yml`, copy a block, set `theme` to
`modeling`, `ammonia`, `precision`, or `ai` (this also places it in the
matching section of the Research page).

**Add a news/update item** → open `_data/news.yml`, copy a block to the top,
use a real date. Don't invent a date — leave it out or ask before guessing.

**Add an award** → open `_data/awards.yml`, copy a block.

**Add/update your headshot** → just replace the file at
`assets/img/headshot.jpg` (the homepage already points here — no other
edit needed).

**Change colors/fonts** → all design tokens are CSS variables at the top of
`assets/css/style.css` (`:root { ... }`).

## Local preview (optional but recommended before pushing big changes)

```bash
bundle install
bundle exec jekyll serve
# visit http://localhost:4000
```

Requires Ruby + Bundler installed locally. If you don't want to install
Ruby, you can skip local preview — GitHub Pages will build and publish the
site automatically on every push to `main` (usually within 1–2 minutes),
and you can just check the live URL.

## First-time deployment

1. Create a **public** GitHub repository named exactly `tomhuhh.github.io`
   under the `tomhuhh` account (Settings → repository name must match your
   username exactly for GitHub to serve it at the root domain).
2. Push this folder's contents to that repository's `main` branch (see
   commands below).
3. In the repo, go to **Settings → Pages** and confirm the source is set to
   "Deploy from a branch," branch `main`, folder `/ (root)`. GitHub detects
   the Jekyll site automatically — no GitHub Actions workflow is required.
4. Wait 1–2 minutes, then visit https://tomhuhh.github.io/

```bash
cd path/to/this/folder
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/tomhuhh/tomhuhh.github.io.git
git push -u origin main
```

## Notes / known placeholders

See the running list in the project handoff message, or search this repo
for the string `placeholder-note` / `Placeholder` to find every spot
flagged for your review directly on the live pages.
