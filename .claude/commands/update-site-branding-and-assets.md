---
name: update-site-branding-and-assets
description: Workflow command scaffold for update-site-branding-and-assets in volteryde-landing-page.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /update-site-branding-and-assets

Use this workflow when working on **update-site-branding-and-assets** in `volteryde-landing-page`.

## Goal

Updates site branding, logos, favicon, and related visual or metadata assets across the codebase.

## Common Files

- `public/assets/Logo.png`
- `public/logotextgreen.png`
- `public/logotextwhite.png`
- `public/favicon.ico`
- `public/apple-touch-icon.png`
- `public/android-chrome-192x192.png`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Update logo and branding image files in public/assets or public/
- Update references to logo or favicon in app/layout.tsx and/or app/site.webmanifest
- Update Navbar and Footer components to use new branding assets
- Update README.md or documentation if branding changes are significant

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.