# 🚖 Garibook - Modern Intercity Travel & Mobility Platform

Garibook is a next-generation intercity travel, smart car rental, and mobility platform in Bangladesh. It connects passengers, car owners, and smart drivers through a zero-commission, subscription-based model. This repository contains the source code for the high-performance modern frontend homepage built with React, Tailwind CSS, and GSAP ScrollTrigger animations.

## ✨ Live Preview
🔗 **Live Website:** [https://garibook-homepage.vercel.app/](https://garibook-homepage.vercel.app/)

---

## 🚀 Tech Stack & Tools
* **Frontend Library:** React.js (Vite)
* **Styling & Design:** Tailwind CSS
* **Animations & Scrolling:** GSAP (GreenSock Animation Platform) & ScrollTrigger
* **Icons & UI Elements:** Lucide React
* **Localization:** Custom Language Context (English & Bengali Support)

---

## 📌 Key Features & Sections
1. **Dynamic Navigation & Hero Section:** 
   * Fully responsive global navbar with consistent padding alignment (`px-4 sm:px-6 md:px-12`).
   * Localized dynamic text typing effect with custom background shape assets (`bg-shape1.png`).
   * Integrated smart multi-tab booking form component (`HeroBookingForm`).
2. **Services & Freedom Sections:**
   * Modern service cards and a custom 3-step process layout featuring SVG curves and floating indicators.
3. **Gallery & Smart Experience Section:**
   * Advanced GSAP-pinned sticky image slider with pagination dots and smooth transition controls.
   * "Pop-out" driver image effect with optimized background pattern usage (`cta-2-bg.png`).
4. **Newsroom & Testimonials:**
   * Seamless infinite horizontal auto-slider for press mentions with pause-on-hover functionality.
   * Interactive video review modals for passenger testimonials with responsive 16:9 iframe integration.
5. **Blogs & Download App Section:**
   * Modern cards layout with localized content rendering (`en/bn`).
   * Reusable `DownloadAppBtn` component integration across multiple sections.

---

## 🛠️ Getting Started Locally

To run this project locally on your machine, follow these steps:

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/Sanjida-Parven-Alfe/garibook-homepage.git
cd garibook-homepage
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Run Development Server
\`\`\`bash
npm run dev
\`\`\`
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 4. Build for Production
\`\`\`bash
npm run build
\`\`\`

## 📂 Project Structure
```text
src/
├── assets/
│   ├── images/       # Project graphics, shapes, and background patterns
│   └── icons/        # Custom SVG icons and logos
├── components/
│   ├── common/       # Reusable components (e.g., DownloadAppBtn)
│   ├── layout/       # Global layout components (Navbar, Footer)
│   └── sections/     # Individual landing page sections (Hero, Services, Gallery, SmartDriver, Newsroom, Testimonials, Blog, DownloadApp)
├── context/          # LanguageContext for dynamic English/Bengali localization
├── styles/           # Global Tailwind and custom CSS configurations
└── App.jsx           # Main application entry point



