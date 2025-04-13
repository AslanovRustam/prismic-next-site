# Glisten AI✨

**Designs that shine with dynamic intelligence.**  
Glisten is a modern, AI-enhanced landing and content website for design-focused products, built using Next.js, TypeScript, Tailwind CSS, Prismic CMS, and GSAP animations.

## ✨ Project Overview

Glisten introduces a new standard for creative tools and workflows. It leverages advanced UI animations and clean layout systems to help showcase your product's full potential, powered by seamless CMS integration and AI-assisted design language.

### 🔧 Tech Stack

- **Next.js** – App router, file-based routing, SSR/SSG
- **TypeScript** – Strict typing for better DX and reliability
- **Tailwind CSS** – Rapid styling and responsive design
- **GSAP** – Smooth and powerful UI animations
- **Prismic CMS** – Headless content management for articles and marketing pages

---

## 🗂 Pages

| Path                | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `/`                 | Landing page with product introduction & hero section |
| `/case-study/[uid]` | Individual article pages, powered by Prismic          |
| `/features`         | Features list (currently under construction)          |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AslanovRustam/prismic-next-site.git
cd prismic-next-site
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Dev Server

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 to see it in action.

## 📦 Features

Fully responsive layout with Tailwind

Smooth animations with GSAP

Content managed via Prismic slices

Typed Prismic data using auto-generated TypeScript types

Modular and reusable components

SEO-friendly head meta via next/head

## 📖 Prismic Setup

Connect your project to Prismic via prismic.io

Configure custom types for "Article", "Homepage", and "Features"

Use Slice Machine to sync components and auto-generate types
