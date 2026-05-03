```markdown
# volteryde-landing-page Development Patterns

> Auto-generated skill from repository analysis

## Overview

This skill teaches you the core development patterns, coding conventions, and common workflows for contributing to the `volteryde-landing-page` repository—a TypeScript-based, Next.js-powered landing page. You'll learn how to update branding, improve SEO, refine components, manage dependencies, and maintain site metadata, all while following the project's established conventions.

---

## Coding Conventions

### File Naming

- Use **camelCase** for file names.
  - Example: `heroSection.tsx`, `getVolteryde.tsx`

### Import Style

- Use **alias-based imports** to reference modules.
  - Example:
    ```typescript
    import Navbar from '@/components/global/Navbar';
    import HeroSection from '@/components/Home/HeroSection';
    ```

### Export Style

- Mixed usage of default and named exports.
  - Example (default export):
    ```typescript
    export default function Footer() { ... }
    ```
  - Example (named export):
    ```typescript
    export function getSiteMetadata() { ... }
    ```

### Commit Message Patterns

- Use prefixes: `feat`, `refactor`, `style`, `fix`
- Example: `feat: add new hero section animation`

---

## Workflows

### Update Site Branding and Assets

**Trigger:** When you need to change the site's branding, logo, favicon, or update related assets and metadata.  
**Command:** `/update-branding`

1. Update logo and branding image files in `public/assets` or `public/`.
2. Update references to logo or favicon in `app/layout.tsx` and/or `public/site.webmanifest`.
3. Update `Navbar` and `Footer` components to use new branding assets.
4. Update `README.md` or documentation if branding changes are significant.

**Files Involved:**
- `public/assets/Logo.png`
- `public/logotextgreen.png`
- `public/logotextwhite.png`
- `public/favicon.ico`
- `public/apple-touch-icon.png`
- `public/android-chrome-192x192.png`
- `public/android-chrome-512x512.png`
- `public/favicon-16x16.png`
- `public/favicon-32x32.png`
- `public/site.webmanifest`
- `app/layout.tsx`
- `components/global/Navbar.tsx`
- `components/global/Footer.tsx`
- `README.md`

---

### SEO and Social Metadata Enhancement

**Trigger:** When you want to enhance SEO, update social media preview images, or improve search engine discoverability.  
**Command:** `/improve-seo`

1. Update or add OpenGraph and Twitter meta tags in `app/layout.tsx`.
    ```tsx
    <meta property="og:image" content="/og.png" />
    <meta name="twitter:card" content="summary_large_image" />
    ```
2. Add or update `robots.txt` in `public/`.
3. Add or update `sitemap.ts` in `app/`.
4. Add or update `og.png`, `og_image.png`, or other social preview images in `public/`.
5. Update or add JSON-LD structured data in layout or relevant files.
6. Update manifest or other metadata files as needed.

**Files Involved:**
- `app/layout.tsx`
- `app/sitemap.ts`
- `public/robots.txt`
- `public/og.png`
- `public/og_image.png`
- `public/site.webmanifest`

---

### Component Style and Content Update

**Trigger:** When you want to tweak or improve the look, feel, or content of a component (e.g., Footer, Navbar, HeroSection).  
**Command:** `/update-component`

1. Edit component file(s) in `components/` to update styles, content, or layout.
    ```tsx
    // Example: Updating button style in HeroSection
    <button className="bg-green-600 hover:bg-green-700 text-white">
      Get Started
    </button>
    ```
2. Update related CSS or global style files if needed (`app/globals.css`).
3. Update or add assets referenced by the component.
4. Test the component visually.

**Files Involved:**
- `components/global/Footer.tsx`
- `components/global/Navbar.tsx`
- `components/Home/HeroSection.tsx`
- `components/Home/GetVolteryde.tsx`
- `components/Home/HowItWorks.tsx`
- `app/globals.css`

---

### Dependency and Lockfile Update

**Trigger:** When you want to update a dependency or fix lockfile inconsistencies.  
**Command:** `/update-deps`

1. Update `package.json` (and/or `package-lock.json`, `pnpm-lock.yaml`) with new dependency versions.
    ```json
    {
      "dependencies": {
        "next": "^13.4.0"
      }
    }
    ```
2. Regenerate lockfiles:
    ```sh
    npm install
    # or
    pnpm install
    ```
3. Test build to ensure compatibility:
    ```sh
    npm run build
    ```

**Files Involved:**
- `package.json`
- `pnpm-lock.yaml`
- `package-lock.json`

---

### Site Metadata and Description Update

**Trigger:** When you want to change the company description or target market displayed on the site.  
**Command:** `/update-company-description`

1. Edit `app/layout.tsx` to update metadata.
    ```tsx
    export const metadata = {
      description: "Volteryde: Clean energy solutions for modern businesses.",
      ...
    }
    ```
2. Edit `components/global/Footer.tsx` to update footer description.
    ```tsx
    <p>Empowering the next generation of sustainable companies.</p>
    ```
3. Commit both files together.

**Files Involved:**
- `app/layout.tsx`
- `components/global/Footer.tsx`

---

## Testing Patterns

- **Framework:** Unknown (not detected in analysis).
- **File Pattern:** Test files follow the `*.test.*` naming convention.
    - Example: `navbar.test.tsx`
- **Location:** Typically alongside component files or in a `__tests__` directory.

---

## Commands

| Command                    | Purpose                                                      |
|----------------------------|--------------------------------------------------------------|
| /update-branding           | Update site branding, logos, favicon, and related assets     |
| /improve-seo               | Enhance SEO and social sharing metadata                      |
| /update-component          | Update or refine a component's style, content, or layout     |
| /update-deps               | Upgrade dependencies and update lockfiles                    |
| /update-company-description| Update company description and business metadata             |
```
