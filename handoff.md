# Handoff — tomhuhh.github.io

Personal academic site for Haowen Hu (Ph.D. candidate, Animal Science, Cornell).
Static site built with **Jekyll**, deployed via **GitHub Pages** at
<https://tomhuhh.github.io>.

---

## 1. Local preview

The site needs **Ruby 3.3** — GitHub Pages' Jekyll (3.x) will not run on the
Mac system Ruby (2.6) or on a too-new Ruby (4.x). Ruby 3.3 is installed via
Homebrew (`ruby@3.3`).

One-time shell setup (if `ruby -v` doesn't already show `3.3.x`):
```bash
echo 'export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
ruby -v            # expect 3.3.12
```

Preview (from the project folder):
```bash
bundle exec jekyll serve
```
Open <http://127.0.0.1:4000/>. It auto-rebuilds on save — just refresh.

- Port already in use? `pkill -f jekyll`, then re-run.
- First time on a machine: `bundle install` before serving.

## 2. Deploy

GitHub Pages builds automatically from the `main` branch. Just:
```bash
git push
```
Wait ~1–2 min (watch the repo's **Actions** tab), then hard-refresh
(Cmd+Shift+R) to clear cache.

> Note: the `Gemfile` pins the `github-pages` gem so local builds mirror
> production, but Pages ignores your local Gemfile at deploy time and uses its
> own environment. Local Jekyll actually resolves to jekyll 3.10 under Ruby 3.3.

---

## 3. Structure

```
index.html            Home (hero, workflow SVG, interests, featured cards)
about.html            About (first person)
research.html         Research themes — cards generated from _data/projects.yml
publications.html     Publications — generated from _data/publications.yml
teaching.html         Teaching — guest lectures + TA courses (static lists)
news.html             News feed — generated from _data/news.yml
media.html            Media & recognition — press cards, FFAR StoryMap, honors
contact.html          Contact — social icon cards
cv.html               CV page (links to assets/files/Haowen-Hu-CV.pdf)
404.html

_config.yml           Site title, tagline, and social URLs (edit links here)
_layouts/default.html Page shell
_includes/            head.html, header.html (nav), footer.html, icon.html
_data/                awards.yml, news.yml, projects.yml, publications.yml
assets/css/style.css  All styles (design tokens + dark mode)
assets/js/main.js     Mobile nav toggle
assets/img/           Photos, favicon, og-image
assets/files/         CV PDF
```

## 4. Editing content (no HTML needed)

Most content lives in `_data/*.yml` — copy an existing block to add an item:

- **News** (`news.yml`): reverse-chron activity feed. Use a **real** date
  (`YYYY-MM-DD` or `YYYY-MM`). Keep ~last 2 years; press coverage goes on Media,
  not here.
- **Publications** (`publications.yml`): groups `journal`, `preparation`,
  `conference`. The author name "Hu, H." is auto-highlighted (pasture green).
- **Projects** (`projects.yml`): each has a `theme`
  (`modeling` | `ammonia` | `precision` | `ai`) that files it into the matching
  section of **Research**. There is no separate Projects page.
- **Awards** (`awards.yml`): curated to ~5 "Selected honors". Extra awards are
  kept commented-out at the bottom of the file — uncomment to feature.

Social links (email, Scholar, LinkedIn, GitHub) are set once in `_config.yml`
and used site-wide.

## 5. Design system

- **Tokens**: colors/fonts are CSS custom properties in `:root`
  (`assets/css/style.css`). **Dark mode** overrides those same tokens inside a
  `@media (prefers-color-scheme: dark)` block — edit a color once, both themes
  update.
- **Fonts**: Source Serif 4 (headings) + Inter (body), loaded from Google Fonts
  in `_includes/head.html`.
- **Icons**: inline SVGs via `{% include icon.html name="github" %}`
  (names: `email`, `scholar`, `linkedin`, `github`). They inherit `currentColor`
  so they theme automatically — no external requests.
- **Reusable pieces**: `.card` (with optional full-bleed `.card-thumb` image),
  `.feature` (side-by-side photo + text), `.grid`, `.timeline`, `.chips`.
- Accessibility is intentional: skip link, `:focus-visible` outlines,
  `prefers-reduced-motion`, ARIA on nav/SVG. Preserve these.

## 6. Conventions & gotchas

- **Voice**: pages are **first person** ("I", "my"). Keep it that way. (Meta
  descriptions in frontmatter stay third-person for SEO — that's fine.)
- **Author notes**: instructions meant for the editor (not visitors) are wrapped
  in `{% comment %} … {% endcomment %}` so they never render. See research.html,
  media.html.
- **Image extensions matter**: reference the exact filename+extension. A
  `.jpeg` vs `.jpg` mismatch = broken image. Keep hero/thumbnail photos
  downscaled (~1600px) so pages stay light.
- **Only use images you own/have rights to.** Press outlets' photos are their
  copyright — link to the article instead.
- `.gitignore` excludes `_site/`, caches, `.DS_Store`, and `Gemfile.lock`.

## 7. Open items / TODO

- **Publish**: confirm the latest commits are pushed (`git push`) and verify the
  live site.
- **JDSC paper date** (`news.yml`): the "interlaboratory manure analysis" item
  uses `2026-06` — confirm the exact publication date if known.
- **Homepage hero buttons** are still text ("Google Scholar", "LinkedIn", …);
  the footer and Contact use icons. Optional: switch the hero to icons for
  consistency.
- **Image optimization**: `headshot.jpg` (~2.3 MB) could be downscaled like the
  others for faster loads.
- **Teaching**: course lists are static in `teaching.html`; update there when
  new courses are added.
