# TCongs Infotech — Premium Homepage Recreation

This repository contains a pixel-perfect, premium recreation of the TCongs Infotech digital agency homepage. The project was rebuilt from scratch using modern frontend technologies, focusing on refining the UI/UX, improving spacing, typography, responsiveness, animations, accessibility, and overall visual polish while strictly maintaining the original branding and content hierarchy.

## 🚀 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod

## ✨ Enhancements & Their Need

While the original website had a solid structure, this recreation elevates it to feel like a premium, enterprise-grade digital agency platform.

1. **Modern Component Architecture**
   - *Need*: The original codebase was likely monolithic or less modular.
   - *Enhancement*: Built using highly reusable React components (e.g., `GlassCard`, `Button`, `SectionHeading`). This makes future updates easier, reduces code duplication, and ensures consistency across the site.

2. **Premium Animations & Micro-interactions**
   - *Need*: A digital agency needs to showcase cutting-edge design to build trust with high-value clients.
   - *Enhancement*: Integrated Framer Motion for smooth scroll reveals, magnetic button hover effects, subtle card lifts, and an animated Mega Menu. These animations are kept under 500ms to feel responsive, not distracting.

3. **Glassmorphism & Lighting Effects**
   - *Need*: The "Dark Theme" requested needed to feel luxurious, not flat.
   - *Enhancement*: Implemented subtle radial gradients, background blurs, and glass-like cards (`bg-card/80 backdrop-blur-sm`). This creates depth and makes the UI elements pop against the dark `#090909` background.

4. **Refined Typography & Spacing**
   - *Need*: Content needs to be highly readable and visually balanced to communicate professionalism.
   - *Enhancement*: Strict adherence to an 8px grid system for consistent whitespace. Improved typographic hierarchy using `Space Grotesk` for bold, impactful headings and `Inter` for clean, readable body text.

5. **Advanced Mega Menu Navigation**
   - *Need*: Complex service offerings need intuitive navigation without overwhelming the user.
   - *Enhancement*: The "Solution" dropdown was transformed into a full-width Mega Menu with animated category switching, hover glows, and a responsive mobile slide-over variant.

6. **Form Validation & UX**
   - *Need*: Contact forms must be robust and provide clear feedback.
   - *Enhancement*: Rebuilt the contact form with `react-hook-form` and `zod` for strict client-side validation. Added floating labels and success state animations for a polished user experience.

## 📁 File Structure

The project is organized into a clean, scalable structure:

```text
src/
├── components/
│   ├── layout/         # Core layout wrappers
│   │   ├── Footer.tsx
│   │   ├── MegaMenu.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Navbar.tsx
│   ├── sections/       # Distinct page sections
│   │   ├── BuildScaleGrow.tsx
│   │   ├── Contact.tsx
│   │   ├── FAQ.tsx
│   │   ├── Hero.tsx
│   │   ├── ProcessTimeline.tsx
│   │   └── ServiceGrid.tsx
│   └── ui/             # Reusable primitive components
│       ├── Button.tsx
│       ├── GlassCard.tsx
│       └── SectionHeading.tsx
├── data/               # Static data structures
│   ├── faq.ts
│   ├── process.ts
│   └── services.ts
├── hooks/              # Custom React hooks
│   └── useScrollPosition.ts
├── lib/                # Utilities and animation configs
│   └── animations.ts
├── App.tsx             # Main page assembly
├── index.css           # Global Tailwind tokens & CSS
└── main.tsx            # Application entry point
```

## 🛠️ Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## ♿ Accessibility & Performance
- Semantic HTML tags (`<nav>`, `<section>`, `<main>`).
- ARIA labels on interactive elements (Mega Menu, Accordions).
- Proper color contrast ratios maintained against the dark background.
- Optimized asset loading and CSS custom properties for high performance without layout shifts.
