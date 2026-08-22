# WISER ACC — Information Architecture & Content Specifications
**Project:** WISER ACC Luxury Industrial Laundry & Sidefu Hospitality Linen Solutions  
**Document Version:** 1.1 (Synchronized with WISER_ACC_Project_Plan)  

---

## 1. Project Directory & File Routing Map

```
D:\laconic\WISER ACC/
├── index.html                       # Home (Hero, Trust metrics, Dual Showcase, Calculator, CTA)
├── about.html                       # About Us (Factory pedigree, 5-Step Service Cycle, Quality Certs)
├── products.html                    # Products (Machinery & Sidefu Linen catalog + spec modals)
├── solutions.html                   # Solutions (Hotel, Hospital, Commercial Plant, OPL)
├── projects.html                    # Projects & Installations Gallery (Filterable grid + lightbox)
├── contact.html                     # Contact & Interactive RFQ Form (EmailJS/FormSubmit + Map)
├── assets/
│   ├── css/
│   │   └── style.css                # Custom animations, typography tweaks, glassmorphism
│   ├── js/
│   │   ├── main.js                  # Mobile drawer, navigation, scroll-reveal
│   │   ├── catalog.js               # Filter tabs, product modal viewer, search
│   │   ├── calculator.js            # Interactive Laundry ROI & Capacity Estimator
│   │   ├── gallery.js               # Lightbox image preview modal
│   │   └── contact.js               # EmailJS / FormSubmit handler + validation
│   ├── branding/                    # High-res logos, ribbon marks, badge variations
│   ├── images/
│   │   ├── machinery/               # Washers, Dryers, Flatwork Ironers, Folders
│   │   ├── linen/                   # Sidefu bed sheets, duvet covers, towels, bathrobes
│   │   ├── factory/                 # Showroom, assembly floor, dynamic balancing test
│   │   └── projects/                # 5-star hotel & hospital installation photos
│   └── docs/                        # Downloadable PDF catalogs & technical spec sheets
```

---

## 2. Page Specifications & Content Breakdown

### 2.1 Home Page (`index.html`)
- **Hero Section:**
  - Headline: *Industrial Laundry Engineering Meets 5-Star Hospitality Refinement.*
  - Subheadline: *Authorized sample factory of Shanghai WISER machinery and certified provider of Sidefu luxury hotel linens.*
  - Primary CTA: `[ View Product Catalog ]` | Secondary CTA: `[ Calculate Capacity ]`
- **Trust & Scale Metrics Bar:**
  - `20+ Years` Engineering Heritage
  - `100+` Complete Turnkey Laundry Plant Deployments
  - `100%` CE & ISO Standard Authorized Manufacturing
  - `300+ Wash Cycles` Sidefu Linen Durability Guarantee
- **Dual Division Split Showcase:**
  - *Industrial Laundry Machinery:* High-spin Washers, Dryers, Flatwork Ironers, Folders.
  - *Sidefu Luxury Linen:* 400T–1000T Egyptian Cotton Bed Sheets, Duvets, 650 GSM Plush Towels.
- **Interactive Laundry Capacity Estimator Widget:**
  - Dropdowns for Property Type & Volume -> Outputs recommended machinery lineup and sends prefilled data to `contact.html`.
- **5-Step Service Lifecycle:** *Collect -> Clean -> Care -> Deliver -> Partner*.
- **Client Logos & Global References:** Highlighting hospitality & healthcare sectors.

### 2.2 About Us (`about.html`)
- **Authorized Factory Mandate:** Shanghai WISER Machinery Co., Ltd. (`www.shweishi.com`) overseas sample factory authorization and trademark.
- **Sidefu Linen Strategic Partnership:** Supplying 5-star international hotel chains worldwide (`www.sidefu-china.com`).
- **Quality & Certifications:** CE Mark, ISO9001, ISO14001, Oeko-Tex Standard 100 textile safety.
- **Virtual Showroom & Factory Tour:** High-definition photography of the test floor, balancing stands, and spare parts facility.

### 2.3 Products & Catalogs (`products.html`)
- **Category Filter Tabs:** `All`, `Industrial Machinery`, `Sidefu Hotel Linen`, `Ancillary Equipment`.
- **Machinery Lineup:**
  - *Washer Extractors (15kg, 30kg, 50kg, 100kg)* — 350G extract force, 304/316L stainless steel.
  - *Barrier Hygienic Washers (30kg, 50kg, 100kg)* — Cleanroom partition for hospitals.
  - *Eco-Series Tumble Dryers (25kg, 35kg, 50kg, 100kg)* — Gas / Steam / Electric heating.
  - *High-Speed Flatwork Ironers (3000mm–3300mm)* — Mirror-polished rollers, 5–35 m/min.
  - *Automated Sheet & Towel Folders* — Multi-lane auto-stacking.
- **Sidefu Luxury Linen Lineup:**
  - *400T–1000T Egyptian Cotton Bed Sheets & Duvet Sets*
  - *550–700 GSM Combed Cotton Bath Towels & Mats*
  - *Plush Velour Bathrobes & Slippers*
  - *Banquet & Restaurant Table Linens*
- **Detail Modals & Catalog Download:** Each product features an interactive spec popup with a direct PDF download button.

### 2.4 Solutions (`solutions.html`)
- **5-Star Hotels & Resorts:** Soft linen finish, high whiteness retention, low noise.
- **Hospital & Healthcare Facilities:** Bio-barrier infection control, thermal disinfection at 85°C+.
- **Commercial Central Laundry Plants:** High-volume continuous batch washing, automated ironer-folder lines.
- **On-Premise Laundry (OPL):** Compact setups for boutique properties, spas, and wellness clubs.

### 2.5 Projects & Gallery (`projects.html`)
- **Filterable Grid:** *All*, *Hospitality Installations*, *Healthcare Cleanrooms*, *Factory & Showroom*.
- **Lightbox Integration (`assets/js/gallery.js`):** Click to expand full-resolution photo with technical project summary.

### 2.6 Contact & RFQ Builder (`contact.html`)
- **Interactive Multi-Step Form (Integrated with EmailJS / FormSubmit):**
  - Facility Type, Daily Washing Volume, Equipment / Linen requirements, Notes.
- **Instant Connect Options:**
  - WhatsApp Direct Chat Button with pre-filled inquiry.
  - WeChat QR code modal.
  - Direct sales email & phone hotline.
- **Factory Map & Address:** Interactive location map embed.

---

## 3. FormSubmit / EmailJS Integration Specification

```html
<!-- FormSubmit Zero-Backend Integration -->
<form action="https://formsubmit.co/your-sales-email@wiseracc.com" method="POST" id="rfq-form">
  <input type="hidden" name="_subject" value="New B2B Quotation Request - WISER ACC">
  <input type="hidden" name="_captcha" value="false">
  <input type="hidden" name="_template" value="table">
  <input type="hidden" name="_next" value="https://wiseracc.com/thank-you.html">
  <!-- Interactive Fields -->
</form>
```
