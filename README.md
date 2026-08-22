# WISER ACC — Industrial Laundry Machinery & 5-Star Hotel Linens

[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-navy.svg)](#)
[![Version: 1.0.0](https://img.shields.io/badge/Version-1.0.0-teal.svg)](#)
[![Languages: EN | 中文 | ไทย](https://img.shields.io/badge/Languages-EN%20%7C%20%E4%B8%AD%E6%96%87%20%7C%20%E0%B9%84%E0%B8%97%E0%B8%A2-blue.svg)](#multilingual-localization-i18n)
[![Tailwind CSS: v3.x](https://img.shields.io/badge/TailwindCSS-v3.x-38bdf8.svg)](#tech-stack)
[![SEO: 100% Core Web Vitals](https://img.shields.io/badge/Lighthouse-98%2F100-emerald.svg)](#performance--seo)

> **Authorized Overseas Sample Factory of Shanghai WISER Machinery Co., Ltd.** and **Strategic Partner of Sidefu China (5-Star Luxury Hotel Linens)**.  
> WISER ACC provides turnkey commercial plant design, high-spin soft-mount laundry equipment, medical cleanroom barrier washers, chest ironers, automated folders, and OEKO-TEX® 100 certified 5-star hotel linens to hospitality and healthcare clients worldwide.

---

## 📑 Table of Contents
- [Executive Overview](#executive-overview)
- [Architecture & Page Map](#architecture--page-map)
- [Multilingual Localization (i18n)](#multilingual-localization-i18n)
- [Design System & UI Tokens](#design-system--ui-tokens)
- [Continuous Care Workflow (Möbius Cycle)](#continuous-care-workflow-m%C3%B6bius-cycle)
- [Interactive Features & Tools](#interactive-features--tools)
- [Project Directory Structure](#project-directory-structure)
- [Local Development & Build Guide](#local-development--build-guide)
- [Production Deployment](#production-deployment)
- [SEO, Schema & Performance](#seo-schema--performance)
- [Git & Branching Workflow](#git--branching-workflow)

---

## 🏢 Executive Overview

WISER ACC bridges two industry-leading manufacturing powerhouses:
1. **Shanghai WISER Machinery Co., Ltd. (上海威士机械)**: Premier heavy-duty machinery manufacturer since 2004, specializing in 350G high-extract washers, barrier washers, high-speed flatwork ironers, and lane folders with CE (2006/42/EC), ISO 9001, and ISO 14001 certifications.
2. **Sidefu China (斯得福纺织)**: Founded in 1984, trusted luxury linen partner for international hotel chains including Marriott, Hilton, InterContinental, Hyatt, and Kempinski, featuring OEKO-TEX® 100 Class 1 non-toxic certified long-staple cotton textiles.

---

## 🗺️ Architecture & Page Map

The platform comprises **7 fully responsive, localized static web pages**:

| Page File | Page Title | Primary Purpose & Features |
| :--- | :--- | :--- |
| [`index.html`](./index.html) | **Home Page** | Brand clarity in 3 seconds, real factory hero showcase, 4 factory credential cards, 5-stage Continuous Care workflow diagram, interactive laundry sizing calculator, and featured equipment matrix. |
| [`about.html`](./about.html) | **About Us** | Shanghai WISER heritage (est. 2004), Sidefu partnership story, 100+ turnkey plant track record, engineering philosophy, and official authorization credentials. |
| [`products.html`](./products.html) | **Products & Linens** | Complete 11-item catalog (6 heavy machinery models + 5 luxury hotel linen specifications) with real-time category filtering and live search. |
| [`product-detail.html`](./product-detail.html) | **Technical Specs Portal** | Deep engineering data sheets, utility consumption metrics (steam, power, air, water), and CAD/BIM floorplan request integration. |
| [`solutions.html`](./solutions.html) | **Turnkey Solutions** | Turnkey architectural blueprints for: (1) 5-Star Hotel On-Premise Laundry (OPL), (2) Hospital Cleanroom Bio-Barrier Infection Control, and (3) Commercial Central Plants (10–50 Tons/Day). |
| [`projects.html`](./projects.html) | **Project Gallery** | Filterable gallery of real installations across luxury island resorts, hospital cleanrooms, regional industrial laundries, and the Shanghai WISER factory showroom. |
| [`contact.html`](./contact.html) | **RFQ & Contact** | Streamlined B2B formal quotation form, direct WhatsApp engineering hotline, global dispatch desks, and 24-hour turnaround SLA guarantees. |

---

## 🌐 Multilingual Localization (i18n)

The site features a client-side **Internationalization (i18n)** engine supporting 3 languages with zero page flicker:

1. **English (`en`)**: Global commercial standard.
2. **Simplified Chinese (`zh`)**: 上海威士 & 斯得福 native B2B terminology.
3. **Thai (`th`)**: Southeast Asia hospitality and hospital procurement terminology.

### How i18n Works
- **Translation Dictionaries**: Stored in JSON files under [`translations/`](./translations/) (`en.json`, `zh.json`, `th.json`).
- **Reactive Engine**: [`assets/js/i18n.js`](./assets/js/i18n.js) auto-detects language via URL (`?lang=zh`), `localStorage.getItem('wiser_lang')`, or `navigator.language`.
- **Dynamic DOM Tagging**: Elements use `data-i18n="key.subkey"`, `data-i18n-placeholder`, and `data-i18n-html`.
- **Event Bus**: Dispatches a `languageChanged` event so dynamic scripts (like [`catalog.js`](./assets/js/catalog.js)) re-render button labels and modals immediately.

---

## 🎨 Design System & UI Tokens

The design is crafted in **Tailwind CSS v3** with bespoke utility extensions:

### Color Palette
- **Deep Navy (`#030712`, `#0B1528`, `#0f172a`)**: Represents heavy-duty industrial precision and stability.
- **Ocean Blue (`#0284c7`, `#0369a1`)**: Signifies clean water, high-spin extraction, and efficiency.
- **Teal / Emerald (`#0d9488`, `#059669`)**: Conveys energy conservation, healthcare hygiene, and safety.
- **Warm Amber / Gold (`#d97706`, `#b45309`)**: Accents Sidefu 5-star hotel luxury linens and OEKO-TEX® quality.

### Typography
- **Display Font**: *Plus Jakarta Sans* / *Montserrat* (Bold, modern, authoritative).
- **Body Font**: *Inter* (High legibility for engineering specifications).

### Visual Effects
- **Hero Mesh Gradients**: Ambient dark-mode gradient depth.
- **5% Watermark**: Subtle brand emblem watermark embedded in inner-page hero sections.
- **Glassmorphism**: Backdrop blur with border stroke (`backdrop-blur-md bg-white/80` and `glass-card-dark`).

---

## 🔄 Continuous Care Workflow (Möbius Cycle)

Inspired by the Möbius loop in the WISER ACC brand mark, the workflow section features a **5-Node Dashed Stepper Diagram** coupled with **authentic process photography**:

```
      ( 1 ) - - - - - ( 2 ) - - - - - ( 3 ) - - - - - ( 4 ) - - - - - ( 5 )
     Collect          Clean           Care           Deliver         Partner
```

1. **Stage 01: COLLECT** (`Collect.jpg`) — RFID batch tracking, load categorization, and weight verification.
2. **Stage 02: CLEAN** (`Clean.jpg`) — Precision chemical dosing and 350G high-speed dewatering extraction.
3. **Stage 03: CARE** (`Care.jpg`) — Mirror-polished cylinder flatwork ironing and Sidefu fiber softening.
4. **Stage 04: DELIVER** (`Deliver.jpg`) — Automated 4-lane folding, hygienic vacuum packaging, and logistics dispatch.
5. **Stage 05: PARTNER** (`Partner.jpg`) — Linen inventory optimization and 24/7 preventive machinery maintenance.

---

## ⚡ Interactive Features & Tools

1. **Laundry Capacity & Sizing Calculator** ([`assets/js/calculator.js`](./assets/js/calculator.js)):
   - Input facility type (Hotel, Resort, Hospital, Central Plant), room/bed count, occupancy %, and shift length.
   - Automatically calculates daily wash volume (kg/day), required kg/hour throughput, recommended Shanghai WISER machinery lineup, and estimated utility savings.
2. **Product Catalog & Quick Spec Modal** ([`assets/js/catalog.js`](./assets/js/catalog.js)):
   - Instant search and category switching between Machinery and Hotel Linens.
   - Interactive modal with full dimension tables and PDF data sheet download triggers.
3. **Project Installation Filter** ([`assets/js/gallery.js`](./assets/js/gallery.js)):
   - Filter projects across Resorts, Healthcare Cleanrooms, and Factory Showrooms.

---

## 📁 Project Directory Structure

```
WISER ACC/
├── .gitignore                      # Git ignore rules
├── input.css                       # Tailwind source entry point with custom utilities
├── tailwind.config.js              # Custom color tokens, fonts & animations
├── index.html                      # Home Page
├── about.html                      # About Us & Brand Heritage
├── products.html                   # Product & Linen Catalog
├── product-detail.html             # Engineering Specifications & CAD Request
├── solutions.html                  # Turnkey Plant Blueprints
├── projects.html                   # Global Project Installations Gallery
├── contact.html                    # Official B2B RFQ Form & WhatsApp Desk
├── sitemap.xml                     # XML Sitemap with multilingual hreflang
├── robots.txt                      # Search engine crawler directives
├── serve.js                        # Lightweight local testing server
├── translations/                   # Translation JSON dictionaries
│   ├── en.json                     # English dictionary
│   ├── zh.json                     # Simplified Chinese dictionary
│   └── th.json                     # Thai dictionary
├── assets/
│   ├── branding/                   # Brand logo marks & guides
│   ├── css/
│   │   ├── style.css               # Core styling overrides
│   │   └── tailwind.min.css        # Production compiled & minified Tailwind CSS
│   ├── images/
│   │   ├── factory/                # Real factory floor & balancing test photos
│   │   ├── linen/                  # Sidefu luxury linen photography
│   │   ├── machinery/              # Shanghai WISER industrial machinery photos
│   │   ├── projects/               # Real project case study photos
│   │   ├── quality/                # 5-step continuous process photography
│   │   └── real/                   # High-resolution hero showcase photos
│   └── js/
│       ├── i18n.js                 # 3-Language internationalization engine
│       ├── catalog.js              # Product catalog data & modal renderer
│       ├── calculator.js           # Interactive laundry capacity sizing tool
│       ├── gallery.js              # Project showcase gallery filter
│       ├── contact.js              # Form validation & RFQ handler
│       └── main.js                 # Header scroll effects, mobile drawer, animations
└── docs/                           # Architectural blueprints & design system specs
```

---

## 🛠️ Local Development & Build Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- `npx` (included with Node.js)

### 1. Clone Repository
```bash
git clone https://github.com/laconic-smart-solution/wiser-acc.git
cd wiser-acc
git checkout dev
```

### 2. Compile Tailwind CSS
To watch and compile Tailwind CSS in development:
```bash
npx tailwindcss -i ./input.css -o ./assets/css/tailwind.min.css --watch
```

To build and minify for production:
```bash
npx tailwindcss -i ./input.css -o ./assets/css/tailwind.min.css --minify
```

### 3. Run Local Server
Run the built-in HTTP server:
```bash
node serve.js
```
Open your browser at `http://localhost:3000`.

---

## 🚀 Production Deployment

Because WISER ACC is built with clean, standards-compliant HTML5, CSS3, and Vanilla JavaScript, it can be deployed instantly to any static hosting provider:

- **Cloudflare Pages / Vercel / Netlify**: Deploy by selecting the root directory.
- **Nginx / Apache**: Copy all files to `/var/www/html/` or document root.
- **GitHub Pages**: Go to *Repository Settings -> Pages -> Source: Deploy from branch (`main` or `dev`)*.

---

## 📈 SEO, Schema & Performance

- **Google `hreflang` Alternate Tags**: Included on every page for `x-default`, `en`, `zh`, and `th`.
- **JSON-LD Structured Data**: Embedded `Organization`, `Brand`, `CollectionPage`, and `AboutPage` schemas.
- **Asset Optimization**: High-resolution photography loaded with `loading="lazy"` and `decoding="async"` to safeguard First Contentful Paint (FCP) and Largest Contentful Paint (LCP).
- **Core Web Vitals**: Zero blocking framework overhead ensures near-instant page loads.

---

## 🌿 Git & Branching Workflow

```
main (Production Ready)
  ▲
  └── dev (Active Development & Integration)
```

- **`dev`**: Main integration branch for all new features, translations, and asset updates.
- **`main`**: Production deployment branch.

To push changes to development:
```bash
git add .
git commit -m "feat: your descriptive message"
git push origin dev
```

---

## 📄 License & Intellectual Property
© 2026 **WISER ACC**. All rights reserved.  
Authorized Overseas Sample Factory of **Shanghai WISER Machinery Co., Ltd.** & Strategic Partner of **Sidefu China**.
