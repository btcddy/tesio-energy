TESIO ENERGY — PROJECT INSTRUCTIONS

═══ PROJECT OVERVIEW ═══
Commercial solar + roofing website for TESIO Energy. Built with Next.js + TypeScript. Dark cinematic design with green (#3DD962) accents on navy (#0F1923) backgrounds, alternating with sage (#EEF2EC) and sand (#F0EBE1) light sections. Fonts: Playfair Display (headings), Instrument Sans (body), JetBrains Mono (labels/mono).

═══ WORKFLOW RULES ═══
1. ONE SECTION AT A TIME. Do not touch other sections.
2. SEPARATE FILES per section: ComponentName.tsx + ComponentName.css
3. page.tsx is a CLEAN IMPORT LIST only (~36 lines). Never add section code to it.
4. globals.css contains ONLY: variables, resets, fonts, nav, hamburger, animations, shared classes. No section styles.
5. Each component CSS file includes its OWN responsive breakpoints (1024px, 640px, 380px).
6. Only output the files being actively worked on. Do not rewrite files we aren't changing.
7. Complete and check off each section before moving to the next.
8. Use the checklist below to track progress.

═══ FILE STRUCTURE ═══
tesio-energy/
  app/
    globals.css          ← Shared only (variables, nav, hamburger, animations, reusable classes)
    layout.tsx           ← Existing, don't touch
    page.tsx             ← Clean import list only
  components/
    Navbar.tsx           ← Existing, don't touch
    ScrollAnimator.tsx   ← Existing, don't touch
    Icons.tsx            ← Shared SVG icon components (IconSolar, IconRoof, IconTax, IconDoc, IconBolt, IconPulse)
    Hero.tsx             + Hero.css
    CircuitStrip.tsx     + CircuitStrip.css
    FragmentedSolutions.tsx + FragmentedSolutions.css
    Services.tsx         + Services.css
    Solution.tsx         + Solution.css
    Financials.tsx       + Financials.css
    Transform.tsx        + Transform.css
    CaseStudy.tsx        + CaseStudy.css
    Partners.tsx         + Partners.css
    Team.tsx             + Team.css
    Process.tsx          + Process.css
    CTA.tsx              + CTA.css
    Footer.tsx           + Footer.css
  public/
    Ben Pauluhn.jpg, Mechelle Pope.png, Randy Headshot.jpg, Rick Mariucci.jpg, logo2.png, Flat_roof_BLDG.png

═══ COMPONENT IMPORT PATTERN ═══
Each component follows this pattern:
  import './ComponentName.css';
  export default function ComponentName() { return (...); }
Components that need icons:
  import { IconSolar, IconRoof } from './Icons';

═══ SECTION CHECKLIST ═══
Migration complete. All sections split into separate component + CSS files and verified working.
Update status below as sections are refined/redesigned.

  ✅ 0. Navbar (existing, dark theme in globals.css)
  ✅ 1. globals.css (shared foundation)
  ✅ 2. page.tsx (clean import list)
  ✅ 3. Icons.tsx (shared SVG components)
  ✅ 4. Hero.tsx + Hero.css — REDESIGNED (Concept C Circuit Topology, centered layout, CSS-only)
  ✅ 5. CircuitStrip.tsx + CircuitStrip.css — REDESIGNED (mobile responsive, 50% scaled cards/ring, no icons on mobile)
  ✅ 6. FragmentedSolutions.tsx + FragmentedSolutions.css — Moved above Services in page order
  ✅ 7. Services.tsx + Services.css — FULLY REDESIGNED (partner pipeline, glass morphism, see design notes below)
  ✅ 8. Solution.tsx + Solution.css
  ✅ 9. Financials.tsx + Financials.css
  ✅ 10. Transform.tsx + Transform.css
  ✅ 11. CaseStudy.tsx + CaseStudy.css
  ✅ 12. Partners.tsx + Partners.css
  ✅ 13. Team.tsx + Team.css
  ✅ 14. Process.tsx + Process.css
  ✅ 15. CTA.tsx + CTA.css
  ✅ 16. Footer.tsx + Footer.css

═══ SECTION ORDER ON PAGE (UPDATED) ═══
Navbar → Hero → CircuitStrip → FragmentedSolutions → Services → Solution → Financials → Transform → CaseStudy → Partners → Team → Process → CTA → Footer

NOTE: FragmentedSolutions was moved ABOVE Services (swapped from original order).

═══ HOW TO RESUME ═══
When starting a new chat, upload this prompt.md, then say:
"Continue from [section name]. Here is my current [filename] if needed."
Attach the current version of any file you want me to work on or review.

═══ DESIGN NOTES ═══
- Dark sections (navy): Hero, CircuitStrip, FragmentedSolutions, Services, Transform, Partners, Process
- Light sections (sage/sand): Solution, Financials, CaseStudy, Team, CTA, Footer
- Hero: full-width centered, pulsing green dot, 3 stat cards (65%, $0, 30yr), Concept C Circuit Topology
- CircuitStrip: PCB-inspired with traces, pulses, junction nodes, 3 info cards, center $44M ring
- Nav: dark glass (rgba(15,25,35,0.92)), green glow hover, hamburger on mobile
- Team avatars: 160px round on desktop, 120px on mobile (corrected from original 56px squish)

═══ SERVICES SECTION — DETAILED DESIGN SPEC ═══
Completely redesigned as a "Partner Pipeline" visualization. Dark gradient background (NOT a light section anymore).

LAYOUT: Horizontal flow — Partner Cards (stacked) → SVG Flow Lines → Hub → TESIO Card → Arrow → Client Card
- 'use client' component (uses useState for hover state)
- Header: "Partner Ecosystem" label + "Trusted Partners Powering One Integrated Solution" (Playfair Display, 38px, #fff)
- Dark gradient background: linear-gradient(160deg, #0F1923 0%, #162233 40%, #1a3025 100%)
- Ambient orbs (green + amber) with blur for depth
- All text colors: #fff (pure white, no off-whites)
- All cards/text scaled 25% larger than initial design

PARTNER CARDS (4, stacked vertically, alternating indent):
  Each has: colored left border (3px), stat badge, name, role, description
  Hover: border brightens, card shifts right 8px, stat text turns partner color
  Stagger: odd cards indented 30px right

  Partner data and colors:
    FiberTite  | Roof Systems   | 30+ yr    | #D4920F (amber)  | "Leading commercial roof systems with 30+ year durability and a global brand reputation."
    Panelclaw  | Solar Racking  | Fastest   | #1A9E8F (teal)   | "Lightest flat-roof solar racking with ultra-fast installation and simplified maintenance."
    Anchor     | Anchoring      | −50% load | #D14B3A (coral)  | "Roof-safe solar anchoring that reduces roof load by 50% and integrates warranty coverage."
    Amicus     | Solar EPCs     | Tier 1    | #3D8EDE (blue)   | "Cooperative of top-tier solar EPCs delivering quality, safety, and reputable deployment."

SVG FLOW LINES:
  - 4 colored bezier curves from partner cards converging to central hub
  - Each line uses partner's color, animated dot traveling along path
  - Hub: green glow circle (pulsing r=5-8-5) with 4 colored orbit dots
  - Lines currently close but may not perfectly touch card edges (SVG coordinate alignment is tricky)
  - flowY positions: [70, 220, 380, 560], hub center at Y=315
  - SVG viewBox: "-60 0 160 640", margin-left: -60px overlap into card area
  - startX: even cards (FiberTite, Anchor) = -23, odd cards (Panelclaw, Amicus) = 7

TESIO CARD:
  - Glass morphism, green border, glow ring behind
  - "TESIO" label (JetBrains Mono, green) + "Energy" (Playfair Display, 45px)
  - Green gradient divider line
  - "Tax equity & single-point contact for all partners"
  - "Managing All Partners" badge (green on dark)

CLIENT CARD:
  - Briefcase/portfolio SVG icon (amber stroke) in circular container
  - "Your Portfolio" title + "Protected" label (amber)
  - "Scalable, bankable solution delivered"

ARROW (between TESIO and Client):
  - Animated amber dot traveling along arrow path

RESPONSIVE:
  - 1024px: Flow lines + arrow hidden, vertical stack centered
  - 640px: Full-width cards, reduced padding
  - 380px: Compact spacing

═══ HERO SECTION — DESIGN SPEC ═══
Concept C "Circuit Topology" — dark navy full-width centered layout.
- CSS-only animations (no JavaScript for layout/animation)
- Centered text block with headline, subtitle, CTA button
- 3 stat cards (65%, $0, 30yr) positioned below
- Pulsing green dot accent
- Responsive: cards stack vertically on mobile

═══ CIRCUITSTRIP SECTION — DESIGN SPEC ═══
PCB/circuit board inspired horizontal strip.
- Center: $44M animated ring
- 3 info cards with circuit traces and pulse animations
- Junction nodes connecting elements
- Mobile: 50% scale on cards and ring, icons removed
- Responsive grid layout at 640px breakpoint

═══ KNOWN ISSUES / IN PROGRESS ═══
- SVG flow lines in Services don't perfectly align to partner card edges — coordinate math
  is approximate and varies by screen size. The lines converge to the hub area but start
  points may float slightly. Future fix: consider JS refs for actual card positions, or
  accept visual approximation.
- FragmentedSolutions and remaining sections (Solution through Footer) still use original/
  placeholder CSS from globals migration — not yet redesigned individually.

═══ NEXT STEPS ═══
1. Fine-tune SVG flow line alignment on Services section (or accept current state)
2. Redesign FragmentedSolutions section (now appears before Services in page flow)
3. Continue through remaining sections: Solution, Financials, Transform, CaseStudy, Partners, Team, Process, CTA, Footer
4. Each section gets the same treatment: mockup concepts → select → implement as component + CSS