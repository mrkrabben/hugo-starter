# Hugo starter — design driven by `data/design.json`

## Run it
1. Install Hugo (extended not required): https://gohugo.io/installation/  (built and tested with 0.168.0)
2. In this folder run: `hugo server`
3. Open http://localhost:1313/
4. Edit `data/design.json` (e.g. change `"accent"` to `"#b3261e"`) and save. The page updates by itself.

## How the design reaches the page
`data/design.json` -> `layouts/partials/design-vars.html` prints every key as a CSS variable (`"accent"` becomes `--accent`)
-> `assets/css/main.css` uses `var(--accent, fallback)`. Add a new key to the JSON and use `var(--your-key)` in the CSS.
`hugo.toml` holds no design. The Design Studio only ever writes `data/design.json`.

## Content
- Stories live in `content/stories/<slug>/index.md`. A photo named `cover.jpg` (or .png) in the same folder is optional.
- Front matter: `title`, `author`, `tags` (first tag = the pill), `summary`, `hero: true` (can appear in the rotating hero).
- New story: `hugo new stories/my-story/index.md`

## Components (layouts/partials)
`card.html`, `card-hero.html`, `card-row.html`, `byline.html`, `tag.html`. Per-category pill colours: `tag-<slug>-bg` / `tag-<slug>-fg`.

## Cloudflare Pages
Build command `hugo`, output directory `public`, environment variable `HUGO_VERSION=0.168.0`, production branch = the branch the Studio publishes to.
