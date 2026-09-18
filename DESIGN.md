# DESIGN.md — Goutham Raj Portfolio Source of Truth

This document defines the visual design system, token specifications, layout structures, animation physics, and interactive behaviors for the **Goutham Raj Portfolio**, retrieved directly from the finalized Stitch design (`projects/10612909424023640693`).

---

## 1. Design Philosophy & Aesthetic Identity

- **Style**: High-contrast, minimalist editorial and architectural design.
- **Tone**: Professional, restrained, technical, premium, deliberate.
- **Imagery**: Real authentic portraits with high-contrast monochrome and subtle duotone grading. No mockups, stock illustrations, or fake product screenshots.
- **Section Contrast Rhythm**:
  - `Hero` — **Dark** (`#0D0D0D`)
  - `About Me` — **Light Editorial** (`#E6E6E6`)
  - `Technical Skills` — **Dark Systems** (`#0D0D0D`)
  - `Contact & Footer` — **Light Editorial** (`#E6E6E6`)
  - `Projects Page (/projects)` — **Dark Monolith** (`#0D0D0D` / `#0E0E0E`)

---

## 2. Color Palette & Token System

### Core Palette
| Token | Hex Value | Role |
|---|---|---|
| `primary` | `#E6E6E6` | Light text, high-contrast light accents |
| `background-dark` | `#0D0D0D` | Primary dark section background |
| `background-light` | `#E6E6E6` | Primary light section background |
| `mono.black` | `#0D0D0D` | Ink black typography in light sections |
| `mono.graphite`| `#2B2B2B` | Hairlines, borders, subtle dark accents |
| `mono.muted` | `#8E8E8E` | Captions, metadata, secondary copy |
| `mono.light` | `#E6E6E6` | Pure silver-white highlights |
| `surface-container-lowest` | `#0E0E0E` | Project cards background |
| `outline` | `#8E9192` | Technical tags and subtle icons |
| `outline-variant` | `#444748` | Blueprint grid lines and hairline borders |

### Silver Gradient Tokens
- **Silver Accent Gradient**: `linear-gradient(90deg, #8E8E8E 0%, #E6E6E6 50%, #8E8E8E 100%)`
- **Silver Perimeter SVG Stroke**: Linear gradient stop 0% `#8E8E8E`, stop 50% `#FFFFFF`, stop 100% `#8E8E8E`

---

## 3. Typography Hierarchy

### Font Families
- **Display & Editorial Serif**: `"Cormorant Garamond"`, `Georgia`, `serif` (Hero headline, section titles `ABOUT ME`, `LET'S CONNECT`, `SELECTED PROJECTS`)
- **Primary Body Sans**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `sans-serif`
- **Technical Monospace**: `ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, `monospace` (Coordinates, tags, section numbering, ledger labels)

### Scale & Styles
| Level | Font Family | Size / Line-height | Letter-spacing | Weight | Usage |
|---|---|---|---|---|---|
| `display-hero` | Serif | 112px / 104px | `-0.04em` | 400 | Desktop monumental titles |
| `display-hero-mobile` | Serif | 56px / 58px | `-0.03em` | 400 | Mobile hero & section titles |
| `headline-xl` | Serif / Sans | 64px–72px / 68px | `-0.02em` | 400 / 600 | Section headers (`ABOUT ME`, `DEV-AI`) |
| `headline-lg` | Serif | 40px / 46px | `-0.01em` | 400 | Card titles & subheadings |
| `headline-md` | Serif | 28px / 36px | `0em` | 400 | Project numbers, subsections |
| `body-xl` | Sans | 20px / 32px | `-0.01em` | 300 | Lead introductions |
| `body-md` | Sans | 15px–17.5px / 26px–31px | `0em` | 400 | Main narrative body |
| `body-sm` | Sans | 13px / 20px | `0.01em` | 400 | Descriptions & metadata |
| `label-caps` | Monospace / Sans | 10px–11px / 14px | `0.2em`–`0.35em` | 500 | Section markers (`02 / ABOUT`), tags |
| `label-code` | Monospace | 11px–12px / 16px | `0.05em` | 400 | Coordinates, telemetry, references |

---

## 4. Spacing, Grid & Container Architecture

- **Max Container Width**:
  - Home spreads: `max-w-[1560px] mx-auto`
  - Projects page: `max-w-7xl (1280px) mx-auto`
- **Horizontal Padding**:
  - Mobile (`< 768px`): `px-6` (`1.5rem`)
  - Tablet (`768px - 1024px`): `px-12` (`3rem`)
  - Desktop (`1024px - 1280px`): `px-20` (`5rem`)
  - Wide Desktop (`> 1280px`): `px-24` (`6rem`)
- **Vertical Section Spacing**:
  - `py-28 md:py-36 lg:py-40` (`7rem` to `10rem`)
- **12-Column Grid Layouts**:
  - About Section: Left column `lg:col-span-5` (Portrait), Right column `lg:col-span-7` (Editorial)
  - Skills Section: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` (2 rows × 3 columns)
  - Contact Section: Left column `lg:col-span-5` (Headline & Portrait), Right column `lg:col-span-7` (Ledger & Actions)
  - Project Cards: Left column `lg:col-span-6` (Title, bio, specimen), Right column `lg:col-span-6` (Ledger, specs, actions)

---

## 5. Global Navbar & Theme Adaptation

### Dimensions & Structure
- **Position**: `fixed top-0 left-0 w-full z-50`
- **Height**: `~70px` (`py-5`)
- **Layout**: Left brand logo/name with status dot, center links (desktop), right resume button + mobile hamburger.

### Navigation Links & Target Behavior
1. `GOUTHAM RAJ` (Brand) → `/` (scrolls to top if on home)
2. `WORK` → `/projects`
3. `ABOUT` → `/` (smoothly scrolls to `#about` with 70px offset)
4. `SKILLS` → `/` (smoothly scrolls to `#skills` with 70px offset)
5. `CONTACT` → `/` (smoothly scrolls to `#contact` with 70px offset)
6. `RESUME` → `/resume.pdf` (opens in new tab)

### Color Adaptation Mechanism
Using `IntersectionObserver` across the viewport, the navbar automatically morphs:
- **Over Dark Sections** (`#hero`, `#skills`, `/projects` page):
  - Background: `rgba(13, 13, 13, 0.85)` + `backdrop-filter: blur(16px)`
  - Border: `border-b border-[rgba(230,230,230,0.1)]`
  - Brand & Active Link: `#E6E6E6`
  - Indicator Dot: `#E6E6E6`
  - Unselected Links: `#8E8E8E` (hover: `#E6E6E6`)
  - Resume Button: Border `rgba(230, 230, 230, 0.4)`, text `#E6E6E6`, background `rgba(43, 43, 43, 0.4)`
- **Over Light Sections** (`#about`, `#contact`):
  - Background: `rgba(230, 230, 230, 0.88)` + `backdrop-filter: blur(16px)`
  - Border: `border-b border-[rgba(13,13,13,0.12)]`
  - Brand & Active Link: `#0D0D0D`
  - Indicator Dot: `#0D0D0D`
  - Unselected Links: `#2B2B2B` (hover: `#0D0D0D`)
  - Resume Button: Border `rgba(13, 13, 13, 0.4)`, text `#0D0D0D`, background `rgba(13, 13, 13, 0.05)`

---

## 6. Detailed Section Specifications

### A. Hero Section (`#hero`)
- **Theme**: Dark (`#0D0D0D`)
- **Dimensions**: Full viewport (`h-screen min-h-[720px] max-h-screen relative overflow-hidden`)
- **Subject Image**: `image1.png` (seated in front of monumental typography), object-contain, contrast 1.03, brightness 0.98.
- **Vignettes**: Bottom gradient `from-[#0D0D0D]/95 via-[#0D0D0D]/20 to-transparent`, horizontal gradient `from-[#0D0D0D]/85 via-[#0D0D0D]/40 to-transparent`.
- **Telemetry**: Right-side coordinate badge `17.3850° N, 78.4867° E | SYSTEM STATUS: OPTIMAL`.
- **Identity Hierarchy**:
  - Kicker: `GOUTHAM RAJ` (Sans, uppercase, 12px, tracking `0.25em`, font-semibold)
  - Headline: `AI/ML × FULL-STACK` (Serif, 5xl–6xl, light) + `<span class="italic font-normal">DEVELOPER</span>`
  - Description: `Building intelligent products, full-stack applications, and thoughtful digital experiences.`
  - CTA Button: `liquid-pill` with cursor-tracking liquid blob, text `VIEW MY WORK`, navigates to `/projects`.
  - Scroll Indicator: Vertical drawing line animation + text `SCROLL TO EXPLORE`.

### B. About Section (`#about`)
- **Theme**: Light Editorial (`bg-[#E6E6E6] text-[#0D0D0D]`)
- **Header**: `02 / ABOUT` with divider line and `PEOPLE × PRODUCTS × PROGRESS`
- **Left Column**:
  - Vertical text: `DEVELOPER × PROBLEM SOLVER × LIFELONG LEARNER`
  - Portrait frame (`#portrait-frame`): `image2.png`, aspect ratio 2/3, grayscale contrast 1.06, hover micro-parallax tilt and subtle zoom (`scale-[1.04]`).
  - Overlay on hover: Floating pill with `GOUTHAM RAJ | PORTRAIT · 02` and `FIGURE [01]`.
- **Right Column**:
  - Monumental title: `ABOUT ME` (Serif, italic, 6xl–9xl)
  - Headline: `I BUILD AT THE INTERSECTION OF CODE, INTELLIGENCE AND EXPERIENCE.`
  - Narrative bio paragraphs.
  - Quote: `“Currently learning. Constantly building.”` with solid black left border.
  - Capability 3-Column Ledger:
    - `01 — FRONTEND`: Interfaces / Interaction / Experiences
    - `02 — FULL-STACK`: Systems / APIs / Scalable Products
    - `03 — AI / ML`: Models / Intelligence / Real World Impact
- **Section Marker**: `02 — IDEAS TO IMPACT | STUDENT × BUILDER × CREATIVE TECH`.

### C. Technical Skills Section (`#skills`)
- **Theme**: Dark Systems (`bg-[#0D0D0D] text-[#E6E6E6]`)
- **Header**: `03 / TECHNICAL SKILLS | CAPABILITIES × FRAMEWORKS × PROFICIENCIES`
- **Background Layer**: Interactive HTML5 Canvas Cursor Ring Particle Field (`#skills-cursor-field`).
  - Subtle floating particles drifting upward.
  - Particles repel smoothly from cursor position within 140px radius.
  - Radial cursor ring halo (`rgba(230,230,230,0.55)` stroke) appears and pulses subtly around cursor on mouse movement.
- **2 × 3 Card Layout**:
  - Card 1: `01 / PROGRAMMING` → Java (90%), Python (85%), SQL (80%)
  - Card 2: `02 / BACKEND` → Spring Boot (85%), Spring Security (80%), REST APIs (85%), JWT Authentication (80%), BCrypt (75%), MVC (75%)
  - Card 3: `03 / FRONTEND` → React.js (85%), HTML5 (90%), CSS3 (85%), Bootstrap (80%)
  - Card 4: `04 / AI / MACHINE LEARNING` → Machine Learning (80%), Scikit-learn (75%), Data Analytics (75%)
  - Card 5: `05 / DATABASE` → MySQL (85%), DBMS (80%)
  - Card 6: `06 / TOOLS & TECHNOLOGIES` → Git (85%), GitHub (85%), Maven (75%), Postman (80%)
- **Animated Silver Card Perimeter**:
  - Default: Clean border `border-[#2B2B2B]/40`, no animated perimeter.
  - Hover: ONLY the hovered card displays an animated SVG stroke travelling around its perimeter (`stroke-dasharray: 120 400`, 4s linear infinite animation with silver gradient).
  - Peer De-emphasis: Hovering any card lowers peer cards to 0.72 opacity.
- **Skill Familiarity Bars**: Fill smoothly to target percentage via IntersectionObserver.

### D. Contact Section (`#contact`)
- **Theme**: Light Editorial (`bg-[#E6E6E6] text-[#0D0D0D]`)
- **Background Layer**: Concentric architectural circles and arcs with interactive mouse parallax.
- **Header**: `04 / CONTACT | OPEN TO OPPORTUNITIES × COLLABORATION × BUILDING`
- **Left Column**:
  - Monumental title: `LET'S CONNECT.` (Serif, italic, 6xl–9xl)
  - Subtitle: `Have an idea, an opportunity, or something worth building?`
  - Portrait frame: `image3.png` (or `image2.png`), aspect ratio 4/5, floating badge `GOUTHAM RAJ / CONTACT · 04` and `ACTIVE NOW`.
- **Right Column**:
  - Header: `BUILDING SOLUTIONS FOR A BRIGHTER TOMORROW.`
  - Ledger Rows with hover shift:
    - **EMAIL**: `gouthamvangari4420@gmail.com`
    - **PHONE**: `8688734420`
    - **LINKEDIN**: `Goutham Raj` (`https://linkedin.com/in/goutham-raj`)
    - **GITHUB**: `Goutham` (`https://github.com/goutham`)
  - Magnetic CTA Button: `START A CONVERSATION →` (`mailto:gouthamvangari4420@gmail.com`)
  - Quote: `“Building, learning, and looking for the next problem worth solving.”`
  - Location: `HYDERABAD, INDIA`
- **Footer**:
  - Left: `© 2026 GOUTHAM RAJ`
  - Center: `AI/ML × FULL-STACK DEVELOPER`
  - Right: `BACK TO TOP ↑` button (smoothly scrolls to top).

---

## 7. Projects Page Layout & Specifications (`/projects`)

- **Theme**: Dark Monolith (`bg-[#0D0D0D]`)
- **Background**: Architectural coordinates (`LAT: 12.9716° N / LON: 77.5946° E`), concentric geometric blueprint vectors.
- **Right Sticky Index**: Vertical dots `01`, `02`, `03` tracking active viewport project via IntersectionObserver.
- **Masthead**: `03 / WORK | SELECTED ARCHIVES — REPOSITORIES | INDEX 2024–2026`
  - Title: `SELECTED PROJECTS` (Serif, 112px desktop / 56px mobile)
  - Subtitle: `THREE PROJECTS. DIFFERENT PROBLEMS. ONE APPROACH.`
  - Lead paragraph describing systems, intelligent applications, and software experiments.
- **Strict Constraint**: EXACTLY THREE PROJECTS. NO SCREENSHOTS, NO MOCKUPS. Pure architectural typography, metadata ledgers, and SVG specimens.

### Project 01: ATTENDANCE MANAGEMENT SYSTEM
- **Number & Category**: `01 / FULL-STACK DEVELOPMENT`
- **Reference**: `REF: AMS-PROD-2024`
- **Title**: `ATTENDANCE MANAGEMENT SYSTEM`
- **Summary**: Full-stack attendance management system designed to manage attendance across multiple academic batches with dedicated workflows for students, teachers, and administrators.
- **Specimen**: Abstract system pipeline vector diagram (Batch Registry → Daily Ledger → Verification Node).
- **Ledger Rows**:
  - `CORE PROBLEM`: Inefficient and manual paper attendance tracking across large academic cohorts.
  - `KEY CAPABILITIES`: Multi-batch scheduling, role-based dashboards, automated percentage calculation, daily reporting.
  - `TECH STACK`: Java, Spring Boot, Spring Security, MySQL, Thymeleaf / HTML5, Bootstrap.
  - `ARCHITECTURE`: Layered MVC Architecture with RESTful APIs, Session Management, and Role-Based Access Control (RBAC).
- **Actions**:
  - GitHub: `https://github.com/goutham-oss/attendance_management` (`target="_blank"`)
  - Learn More: `/projects/attendance`

### Project 02: AI VOICE ASSISTANT
- **Number & Category**: `02 / AI / VOICE / AUTOMATION`
- **Reference**: `REF: AVA-AI-2024`
- **Title**: `AI VOICE ASSISTANT`
- **Summary**: Intelligent desktop voice assistant capable of speech recognition, natural language query handling, and automated desktop operations.
- **Specimen**: Abstract acoustic audio waveform vector diagram (Acoustic Capture → Intent Classifier → Execution Engine).
- **Ledger Rows**:
  - `CORE PROBLEM`: Hands-free task execution and desktop workflow automation via natural speech commands.
  - `KEY CAPABILITIES`: Speech-to-text conversion, system command execution, web queries, text-to-speech feedback.
  - `TECH STACK`: Python, SpeechRecognition, Pyttsx3, OS / Subprocess APIs, Web Scraping.
  - `ARCHITECTURE`: Pipeline-driven architecture: Audio Stream Ingestion → Intent Recognition & Parsing → Subsystem Dispatcher.
- **Actions**:
  - GitHub: `https://github.com/goutham-oss/ai-voice-assistant` (`target="_blank"`)
  - Learn More: `/projects/ai-voice-assistant`

### Project 03: DEV-AI
- **Number & Category**: `03 / AI / DESKTOP AUTOMATION`
- **Status**: `UNDER DEVELOPMENT` (Blinking status indicator dot)
- **Reference**: `REF: DEVAI-WIP-2026`
- **Title**: `DEV-AI`
- **Summary**: An experimental AI system under active development, designed to explore desktop workflow automation, intelligent developer assistance, and local AI agent interaction.
- **Specimen**: Abstract agent graph vector diagram (Agent Core → Reasoning Loop → Context Memory → Tool Sandbox).
- **Ledger Rows**:
  - `CORE PROBLEM`: High cognitive load and repetitive context switching in complex development environments.
  - `KEY OBJECTIVES`: Autonomous workspace exploration, developer tool orchestration, intelligent command synthesis.
  - `PLANNED STACK`: Python, Local LLMs, Agentic Tool Frameworks, System IPC.
  - `CURRENT STATUS`: Active Architecture Design & Prototype Phase. Not yet for production deployment.
- **Actions**:
  - GitHub: `https://github.com/goutham-oss/DEV-AI` (`target="_blank"`)
  - Learn More: `/projects/dev-ai`

### Projects Page Footer & CTA
- Section: `MORE TO BUILD. HAVE A PROJECT OR PROBLEM IN MIND?`
- CTA: `START A CONVERSATION →` (`mailto:gouthamvangari4420@gmail.com`)
- Quick Navigation: `RETURN TO MAIN PORTFOLIO` (`/`)
- Footer ledger with copyright and Back to Top.

---

## 8. Animations & Motion Physics

1. **Entrance Stagger**:
   - Stagger classes `reveal-delay-1` through `reveal-delay-5` (0.15s, 0.35s, 0.55s, 0.75s, 0.95s).
   - Curve: `cubic-bezier(0.16, 1, 0.3, 1)` (smooth deceleration).
2. **Scroll-Triggered Reveals**:
   - Elements with `.reveal-on-scroll` start at `opacity: 0; transform: translateY(24px);`.
   - On intersecting 15% of viewport, `.is-visible` adds `opacity: 1; transform: translateY(0);` over 0.9s.
3. **Card Silver Perimeter Stroke**:
   - `stroke-dasharray: 120 400`, `@keyframes strokeTravel` with `stroke-dashoffset: -1000` over 4s linear infinite.
4. **Hero Liquid Button**:
   - Radial cursor tracking blob transitions position with ease; on hover scales from 0 to 1.15.
5. **Portraits Micro-Parallax**:
   - Mousemove tilts image by `x * strength` and `y * strength` pixels with `scale(1.03)`.
6. **Skills Canvas Field**:
   - 50 gentle particles with repulsion within 140px cursor radius.
7. **Reduced Motion**:
   - Full `@media (prefers-reduced-motion: reduce)` support: disables particle loop, disables transforms, renders static opacity 1 and full familiarity bars immediately.

---

## 9. Responsive Breakpoints

| Breakpoint | Width | Composition Adjustments |
|---|---|---|
| `Desktop XL` | `1440px+` | Full 1560px container, max editorial spacing, side coordinates, vertical catalog index |
| `Desktop` | `1280px` | 12-column grids side-by-side, full typography sizing |
| `Laptop` | `1024px` | 12-column grids side-by-side with reduced gap, full navigation |
| `Tablet` | `768px` | Grids stack to single column, mobile navigation drawer activates, cards stack |
| `Mobile LG` | `390px` | 56px hero display, full-width portrait, single-column skill cards, touch targets |
| `Mobile SM` | `375px` | Proportional fluid padding, 100% card width, legible 14px body text |

---

## 10. Local Asset Mapping

- Hero Subject: `image1.png` (served from `/assets/image1.png` or bundled in React)
- About Portrait: `image2.png`
- Contact Portrait: `image3.png` (or `image2.png`)
- Resume PDF: `/resume.pdf` (mapped from `VANGARI_GOUTHAM_RAJ_Resume.pdf` in workspace root)
- Netlify SPA Configuration: `public/_redirects` containing `/* /index.html 200`
