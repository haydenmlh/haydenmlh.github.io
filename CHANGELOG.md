# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by Keep a Changelog and this project uses Semantic Versioning.

## [1.0.0] - 2026-08-13

### Added
- React + Vite application scaffold and build configuration.
- Route-based page structure for:
  - `/`
  - `/resume.html`
  - `/projects.html`
  - `/contact.html`
  - `/projects/personal_website.html`
- Shared React components for site layout, navigation, and footer.
- React hooks for page title updates and UI behavior:
  - Header typewriter effect
  - Content header parallax
  - Project tile resizing
- Updated README for React development/build workflow.
- Added project version tracking file (`VERSION`).

### Changed
- Migrated legacy multi-page static HTML content into React page components.
- Converted route HTML files into React app entry shells to preserve direct URL access.
- Reused existing CSS and asset structure with React imports.

### Notes
- Legacy script behavior is now implemented through React hooks and component logic.
