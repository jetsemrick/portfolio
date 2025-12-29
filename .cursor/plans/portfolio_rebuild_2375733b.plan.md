---
name: Portfolio Rebuild
overview: Rebuild the personal website from scratch using Bun, Next.js, and TypeScript, with a design inspired by The Browser Company (serifs, blue accent) and static export for hosting.
todos:
  - id: backup-data
    content: Backup existing data (src/data, src/img) to a temporary location
    status: completed
  - id: clean-root
    content: Delete legacy root files (src, public, config files)
    status: completed
  - id: setup-nextjs
    content: Move portfolio/ contents to root and install dependencies with Bun
    status: completed
  - id: config-design
    content: Configure TypeScript (strict), Tailwind (Noise texture), and Fonts
    status: completed
  - id: implement-content-layer
    content: Implement lib/posts.ts and lib/data.ts with TypeScript interfaces
    status: completed
  - id: implement-layout
    content: Create Layout with Sticky Header and Noise Overlay
    status: completed
  - id: implement-home
    content: Create Home page with Bento grid and Typography
    status: completed
  - id: implement-blog
    content: Create Blog and Post pages
    status: completed
  - id: update-placeholders
    content: Change placeholder names in writing and projects sections to "Placeholder"
    status: pending
---

# Portfolio Rebuild Plan

## 1. Project Initialization

- [ ] Initialize Next.js project in the root directory:
- sCommand: `bunx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-bun --no-git`
- [ ] Move `CNAME` to `public/CNAME`.
- [ ] Install additional dependencies: `gray-matter` (for MDX frontmatter), `date-fns` (for date formatting), `@tailwindcss/typography` (for easy prose styling).

## 2. Configuration

- [ ] Update `next.config.ts` (or .js) to enable `output: 'export'` for static hosting.
- [ ] Configure `tailwind.config.ts`:
- Add typography plugin.
- Define custom blue accent color (e.g., `#2563EB`).
- Configure `font-family` to use `Libre Baskerville`.

## 3. Design & Layout

- [ ] Update `src/app/layout.tsx`:
- Import `Libre Baskerville` via `next/font/google`.
- Apply the serif font globally.
- Create a minimal Header and Footer component.

## 4. Content Logic

- [ ] Create `content/posts/` directory for Markdown files.
- [ ] Create `src/lib/posts.ts`:
- Implement `getSortedPostsData` to read file system and parse frontmatter.
- Implement `getPostData` to read individual post content.

## 5. Feature Implementation

- [ ] **Home Page (`src/app/page.tsx`)**:
- **Hero/Intro**: Create a layout with a photo placeholder (left or right aligned) and a natural, narrative introduction text (no "Bio" header).

## 6. Content Updates

- [ ] Update placeholder names to "Placeholder":
  - In `src/components/ProjectGrid.tsx`: Change "Project Alpha" and "Design System" project titles to "Placeholder".
  - In `content/posts/hello-world.md`: Change the title from "Hello World" to "Placeholder".