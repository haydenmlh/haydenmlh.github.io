# Hayden Mak Personal Website (React)

This website has been refactored from static HTML pages into a React app using Vite.

## Version

- Current version: `1.0.0` (see `VERSION`)
- Release notes: see `CHANGELOG.md`

## Tech Stack

- React
- React Router
- Vite
- Streamlined legacy CSS imported through a single React entry stylesheet

## Project Structure

- `src/`
	- `components/` shared UI (layout, navbar, footer)
	- `pages/` route pages
	- `hooks/` reusable behavior hooks
	- `styles/app.css` single CSS entry that imports active site styles
- `index.html`, `resume.html`, `projects.html`, `contact.html`, `projects/personal_website.html` route shells that boot the React app
- `.github/workflows/deploy-pages.yml` CI deployment workflow

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open the URL shown in terminal (default: http://localhost:5175).

## Production Build

```bash
npm run build
```

Build artifacts are output to `dist/`.

## Deployment (GitHub Pages)

- Workflow file: `.github/workflows/deploy-pages.yml`
- Trigger: push to `main` (or manual run)
- Process: installs dependencies, builds `dist/`, copies `CNAME`, and publishes to `gh-pages` branch
- Domain: `haydenmlh.com` via the repository `CNAME` file

## Route Compatibility

The app supports these URL paths:

- /
- /resume.html
- /projects.html
- /contact.html
- /projects/personal_website.html

Legacy route files now boot the React app so existing links continue to work.
 
