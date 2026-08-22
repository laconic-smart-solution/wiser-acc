# Business Requirements Document (BRD) & Project Plan
**Project Name:** WISER ACC — Luxury Industrial Laundry & Hospitality Linen Solutions  
**Client / Brand:** WISER ACC (Authorized Overseas Factory of Shanghai WISER Machinery Co., Ltd. & Partner of Sidefu Linen)  
**Location / Target Markets:** International Hospitality, Commercial Laundries, Healthcare Facilities  
**Project Path:** D:\laconic\WISER ACC  

---

## 1. Executive Summary & Brand Positioning

### 1.1 Brand Background
- **Shanghai WISER Machinery Co., Ltd.** (www.shweishi.com): Leading manufacturer of heavy-duty industrial laundry equipment, automated ironing lines, and tunnel washers.
- **WISER ACC**: The authorized sample factory and exclusive overseas trademark operating center of WISER Group, featuring genuine WISER machinery and engineering standards.
- **Sidefu Linen** (www.sidefu-china.com): Renowned premium hotel textile manufacturer supplying 5-star international hotel chains (Hilton, Marriott, InterContinental, etc.).
- **Tagline**:  
  - English: *"Smart Laundry. Smarter Business."*  
  - Chinese: *"智洗未来 洞见价值"*

### 1.2 Core Value Proposition
WISER ACC bridges the gap between **heavy-duty industrial laundry engineering** and **luxury 5-star textile refinement**:
1. Turnkey industrial laundry machinery (Washers, Dryers, Ironers, Folders).
2. Certified Sidefu hotel bedding and bath linen lines engineered for 300+ industrial wash cycles.
3. Turnkey plant design, utility optimization (steam, gas, water reuse), and 24/7 technical lifecycle support.

---

## 2. Benchmark Analysis & Design Influence

| Benchmark Brand | URL | Core Elements Borrowed |
| :--- | :--- | :--- |
| **Stodford** | Reference Site | Minimal layout, generous white space, refined typography, quiet luxury and high build quality. |
| **PureStar** | https://www.purestar.com/ | Hospitality focus, ESG / water conservation metrics, cleanliness guarantee, scale and dependability. |
| **Alpenwascherei** | https://alpenwascherei.com/ | Alpine freshness, hygienic standards, clean modern German/Swiss industrial aesthetic. |
| **Shanghai WISER** | http://www.shweishi.com/ | Authentic machine blueprints, CE/ISO engineering authority, technical depth. |
| **Sidefu China** | https://www.sidefu-china.com/ | Tactile fabric closeups, thread count standards, 5-star hotel luxury imagery. |

---

## 3. Tech Stack & Architecture (Aligned with WISER_ACC_Project_Plan)

- **Frontend Core:** Semantic **HTML5** (Multi-page architecture)
- **Styling & Design System:** **Tailwind CSS** + Custom CSS Animations (`assets/css/style.css`)
- **Interactive Scripting:** **Vanilla JavaScript (ES6+)** for catalog filters, capacity calculator, modal viewer, image gallery lightbox
- **B2B Forms & Lead Dispatch:** **EmailJS / FormSubmit** for zero-backend direct email inquiry forwarding + Direct WhatsApp Chat API
- **Deployment Platform:** **Vercel / Netlify / Static Cloud CDN**

---

## 4. Deliverables Checklist

- [x] Comprehensive Architecture & Design System Documentation
- [x] Brand Asset Library (Logo variations, ribbon marks, CI guide)
- [ ] Responsive 6-Page Static Website (`index.html`, `about.html`, `products.html`, `solutions.html`, `projects.html`, `contact.html`)
- [ ] Interactive Laundry Capacity & Equipment ROI Calculator
- [ ] Machinery & Sidefu Linen Filterable Catalog with Detail Modals
- [ ] High-Resolution Image Lightbox Gallery
- [ ] Downloadable PDF Catalog & Spec Sheet Links
- [ ] Working B2B Inquiry Form (EmailJS/FormSubmit)
- [ ] Basic SEO Setup (Meta tags, Open Graph, Schema.org JSON-LD, Sitemap)

---

## 5. Timeline & Milestones

| Timeline | Phase | Deliverables |
| :--- | :--- | :--- |
| **Week 1** | Requirement & UI Specs | BRD, Sitemap, Design Tokens, Information Architecture, Assets Setup *(Complete)* |
| **Week 2** | HTML & Frontend Development | Multi-page HTML5 templates, Tailwind CSS layout, Catalogs, Calculator, Gallery |
| **Week 3** | Testing, Polish & Deployment | EmailJS/FormSubmit integration, Mobile & Cross-browser testing, SEO, Vercel/Netlify Deployment |

---

## 6. Target KPIs
- **Lighthouse Performance Score:** > 95/100
- **Lighthouse Accessibility & SEO:** > 98/100
- **Time to Interactive (TTI):** < 1.2s on 4G mobile
- **B2B Conversion:** Inquiry submission within 3 clicks from any page.
