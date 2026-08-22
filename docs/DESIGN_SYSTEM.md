# WISER ACC — UI/UX Design System & Brand Identity
**Style Concept:** Minimalist Industrial Luxury (Stodford Simplicity + PureStar Trust + Shanghai WISER Authority)  
**Target Atmosphere:** Crisp, Pristine, Engineering-Grade Reliability, 5-Star Hospitality Refinement  

---

## 1. Brand Identity & Visual Language

### 1.1 Logo Architecture & Meaning
- **Primary Mark:** Continuous 3D gradient ribbon forming the letter **"W"** (WISER) with 3 ascending hydro-bubbles.
- **Symbolism:**
  - **Fabric Flow:** The smooth curving ribbon represents luxurious, wrinkle-free 5-star linen and gentle textile movement.
  - **Water Flow & Bubbles:** Represents pure, hygienic water circulation, micro-bubble deep cleaning, and eco-filtration.
  - **Möbius Loop (Continuous Care):** Signifies an unbroken lifecycle of partnership: *Collect -> Clean -> Care -> Deliver -> Partner*.
- **Official Brand Typography:**
  - Logotype: Geometric, balanced sans-serif with high x-height (`Wiser ACC`).
  - Tagline: *"智洗未来 洞见价值"* | *"SMART LAUNDRY. SMARTER BUSINESS."*

---

## 2. Color Palette & Design Tokens

### 2.1 Primary & Accent Palette

| Role | Color Name | Hex Code | Tailwind Token | Description / Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Base** | Deep Navy | `#0E2A47` / `#0F172A` | `bg-navy-900` / `navy-950` | Dominant brand anchor, footer, dark hero sections, heavy industrial authority |
| **Primary Accent**| Ocean Blue | `#1877F2` / `#1D4ED8` | `bg-blue-600` / `blue-700` | Primary action buttons, active navigation states, interactive highlights |
| **Eco / Hygiene** | Fresh Teal | `#18C7B7` | `bg-teal-500` / `teal-400` | Hygiene badges, eco-savings indicators, water conservation callouts |
| **Light Accent**  | Sky Blue | `#4FC3F7` | `text-sky-400` / `sky-300` | Subtle gradient accents, glow effects, badge backgrounds |
| **Luxury Accent** | Warm Gold | `#D4AF37` / `#E5C05B` | `border-gold-500` / `text-gold-400` | 5-Star hotel Sidefu linen highlights, premium warranty stamps |
| **Canvas Light**  | Crisp Pearl | `#F8FAFC` / `#F2F6FA` | `bg-slate-50` / `bg-gray-100` | Clean background for maximum contrast against linen and machinery |
| **Text Dark**     | Slate Obsidian | `#0F172A` / `#1E293B` | `text-slate-900` / `slate-800` | Body and heading text for impeccable legibility |
| **Text Muted**    | Slate Grey | `#64748B` | `text-slate-500` | Supporting captions, technical specification keys |

```css
:root {
  --color-navy-deep: #0E2A47;
  --color-navy-midnight: #0F172A;
  --color-blue-ocean: #1877F2;
  --color-blue-royal: #1D4ED8;
  --color-teal-fresh: #18C7B7;
  --color-blue-sky: #4FC3F7;
  --color-gold-luxury: #D4AF37;
  --color-bg-light: #F8FAFC;
  --color-text-main: #0F172A;
  --color-text-muted: #64748B;
}
```

---

## 3. Typography Hierarchy

| Hierarchy | Font Family | Size (Desktop) | Size (Mobile) | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / Hero** | Plus Jakarta Sans | 56px – 64px | 36px – 42px | 700 (Bold) | 1.1 | -0.02em |
| **Section Title (H2)**| Plus Jakarta Sans | 32px – 38px | 26px – 30px | 600 (SemiBold)| 1.2 | -0.01em |
| **Subsection (H3)** | Plus Jakarta Sans | 22px – 26px | 18px – 20px | 600 (SemiBold)| 1.3 | 0 |
| **Card / Item Title**| Plus Jakarta Sans | 18px – 20px | 16px – 18px | 600 (SemiBold)| 1.4 | 0 |
| **Body (Lead)** | Inter | 18px | 16px | 400 (Regular) | 1.6 | 0 |
| **Body (Standard)** | Inter | 15px – 16px | 14px – 15px | 400 (Regular) | 1.5 | 0 |
| **Caption / Spec Key**| Inter / JetBrains Mono| 12px – 14px | 12px | 500 (Medium) | 1.4 | +0.05em (Upper) |

---

## 4. UI Component Specifications

### 4.1 Buttons & CTAs
- **Primary CTA (Ocean Blue Solid):**
  - Background: `#1877F2` -> Hover: `#1D4ED8`
  - Text: `#FFFFFF`, Font: 15px SemiBold, Rounded: 8px (Modern subtle curve, not pill)
  - Shadow: `0 4px 14px rgba(24, 119, 242, 0.25)`
  - Transition: `all 0.25s cubic-bezier(0.4, 0, 0.2, 1)`
- **Secondary CTA (Minimal Outline):**
  - Border: 1.5px solid `#CBD5E1` -> Hover: `#0E2A47`
  - Background: Transparent -> Hover: `#F8FAFC`
  - Text: `#0E2A47`
- **Gold Luxury CTA (Sidefu Linen Specials):**
  - Border: 1.5px solid `#D4AF37`
  - Text: `#B48C1C` / `#FFFFFF` on dark
  - Hover: Background `#D4AF37`, Text `#0F172A`

### 4.2 Cards & Containers
- **Product Card (Machinery & Linen):**
  - Background: `#FFFFFF`
  - Border: 1px solid `#E2E8F0`
  - Corner Radius: 12px
  - Hover Effect: Subtle lift `translate-y(-4px)`, shadow `0 12px 30px -10px rgba(15, 23, 42, 0.08)`, border turns `#1877F2/30%`.
- **Engineering Spec Table / Grid:**
  - Clean two-column alternating zebra striping or light border dividers (`#F1F5F9`).
  - Monospace or high-legibility tabular figures for metrics (e.g. `50 kg/load`, `3000 mm drum`).

### 4.3 Interactive Service Flow Component
Five-step horizontal milestone stepper with active pulse and connecting lines:
1. **Collect (รับผ้า):** Logistics & RFID textile intake
2. **Clean (ซักทำความสะอาด):** Barrier extraction & eco-chemical dosing
3. **Care (ดูแลอย่างใส่ใจ):** Automated ironing, softening & moisture control
4. **Deliver (จัดส่งตรงเวลา):** Automated folding, bagging & climate-controlled fleet
5. **Partner (เติบโตไปด้วยกัน):** Continuous inventory analytics & machinery maintenance

---

## 5. Spacing, Grid & Layout Rules
- **Desktop Grid:** 12-Column grid, max-width `1280px` or `1400px` centered with `24px` gutter.
- **Generous Whitespace:** Section vertical padding of `80px – 112px` (Desktop) and `48px – 64px` (Mobile) to reflect the Stodford luxury ethos.
- **Breakpoints:**
  - Mobile: `320px – 639px`
  - Tablet: `640px – 1023px`
  - Desktop: `1024px – 1440px`
  - Ultra-Wide: `1441px+`
