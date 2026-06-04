
# Sivasakthi Science Foundation (SSF) — Official Website
> Repository Domain: `Bharat-Genome-Database-BGDB/SSF`

## 🎯 Project Overview
This repository contains the source code for the official, streamlined web presence of the **Sivasakthi Science Foundation (SSF)**. Built with Next.js, this site serves as the central public hub for the foundation’s strategic scientific narrative, ongoing research publications, community initiatives, and internship/fellowship applications.

Unlike its partner databases, the SSF website is an **entirely public platform** designed for maximum accessibility, search engine visibility, and fast layout rendering.

---

## 🛠️ System Dependencies & Stack

The architecture is built on top of modern front-end engineering tools to optimize performance and enforce high-fidelity styling:
* **Framework:** Next.js (App Router architecture using React Server Components)
* **Styling Engine:** Vanilla CSS + Sass/SCSS (`.scss`) for centralized variable tracking
* **Testing Engine:** Vitest + JSDOM (Simulated browser environment for Shift-Left validation)
* **Database Client (Upcoming):** `@supabase/supabase-js` (Pre-configured for contact storage)

---

## 💻 Installation & Local Set Up

Follow these steps to spin up the development environment locally on your machine.

### 1. Prerequisites
Ensure you have **Node.js (v18.x or higher)** and **npm** installed on your system.

### 2. Install Project Dependencies
Run the following command from the root of the project directory to clean-install the required packages:
```bash
npm install

```

### 3. Launch the Local Server

Start the Next.js hot-reloading development environment:

```bash
npm run dev

```

Once initialized, open your browser and navigate to **`http://localhost:3000`** to view the live interface.

### 4. Execute the Quality Gate (Testing)

To verify that the path aliases and core page structures are completely green and error-free:

```bash
npx vitest run

```

---

## 💾 Upcoming Database Integration (Contact Us Pipeline)

While the core informational layers of the SSF site are static, we are pre-wiring a backend connection to handle community outreach and inquiry submissions.

### The Contact Us Architecture

* **Engine:** Powered by a decoupled Cloud Database layer via Supabase.
* **Storage Target:** Submissions from the interactive `Contact Us` form will securely stream directly into a centralized `contact_inquiries` data table.
* **Security:** Because SSF is entirely public, user registration roles are **disabled**. Form submissions bypass Role-Based Access Control (RBAC) and rely on localized public write-only API keys secured via Row-Level Security (RLS) policies.

### Local Environment Verification (`.env.local`)

When the database goes live, copy `.env.example` into a new file named `.env.local` and plug in the credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=[https://your-project-id.supabase.co](https://your-project-id.supabase.co)
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-public-anonymous-api-key

```

---

## 📁 Workspace Layout Blueprint

```text
SSF/
├── public/                 # Static assets (Brand Logos, Icons, Images)
├── src/
│   ├── app/                # Next.js App Routing Hub (Server & Client Views)
│   │   ├── about/          # Sub-slugs (/about/ourstory, /about/trustees)
│   │   ├── faq/            # Interactive Accordion Page
│   │   ├── contact/        # Contact Us form views (Connects to DB soon)
│   │   ├── layout.jsx      # Global shell component wrapping all routes
│   │   └── page.jsx        # Homepage Entry Component (localhost:3000)
│   ├── components/
│   │   └── Layout/         # Core Persistent UI Shells
│   │       ├── Footer.jsx  # Persistent localized footer
│   │       ├── Header.jsx  # Double-tiered dynamic layout navigation header
│   │       ├── Layout.jsx  # Page structure container layout engine
│   │       └── SEO.jsx     # Semantic search engine optimization engine
│   ├── services/           # Supabase DB client layer initialization instances
│   ├── styles/             # Global centralized SCSS design variables & deep plum color palettes
│   └── unitHelper/         # Shift-Left Testing Gate (setupTests.js execution rules)
├── jsconfig.json           # Next.js Application Route Map absolute path definitions
├── package.json            # Framework dependencies & execution script listings
└── vite.config.js          # Vitest path mapping hub matching Next.js aliases

```

---

## 🧭 Absolute Path Aliasing Map

To eliminate broken relative path lines (e.g., `../../components`), utilize these absolute shortcuts mapped in `jsconfig.json`:

* `@/*` ➜ `src/*`
* `@components` ➜ `src/components`
* `@layout` ➜ `src/components/Layout`
* `@styles` ➜ `src/styles`
* `@db` ➜ `src/services`

---

## 🦅 Git Operations Cheat Sheet

Use these quick commands for daily development workflows on the `main` branch:

### Wiping Local Build Caches

If changes aren't appearing or dependencies are acting up:

```bash
# Windows (PowerShell)
Remove-Item -Recurse -Force .next, node_modules; npm install

# Mac / Linux
rm -rf .next node_modules && npm install

```

### Staging and Committing Code Changes

```bash
# Check changed or untracked files
git status

# Stage all adjustments
git add .

# Save snapshot with meaningful POT commit history message
git commit -m "feat: updated contact page database hooks"

```

### Syncing with the Remote GitHub Repository

```bash
# Pull down changes from team members before working
git pull origin main

# Push your verified, green local builds up to the live cloud repo
git push origin main

```

---

*Maintained with absolute structural precision by Sivasakthi Science Foundation.*
