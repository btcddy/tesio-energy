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
    Services.tsx         + Services.css
    FragmentedSolutions.tsx + FragmentedSolutions.css
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
  ✅ 4. Hero.tsx + Hero.css
  ✅ 5. CircuitStrip.tsx + CircuitStrip.css
  ✅ 6. Services.tsx + Services.css
  ✅ 7. FragmentedSolutions.tsx + FragmentedSolutions.css
  ✅ 8. Solution.tsx + Solution.css
  ✅ 9. Financials.tsx + Financials.css
  ✅ 10. Transform.tsx + Transform.css
  ✅ 11. CaseStudy.tsx + CaseStudy.css
  ✅ 12. Partners.tsx + Partners.css
  ✅ 13. Team.tsx + Team.css
  ✅ 14. Process.tsx + Process.css
  ✅ 15. CTA.tsx + CTA.css
  ✅ 16. Footer.tsx + Footer.css

═══ SECTION ORDER ON PAGE ═══
Navbar → Hero → CircuitStrip → Services → FragmentedSolutions → Solution → Financials → Transform → CaseStudy → Partners → Team → Process → CTA → Footer

═══ HOW TO RESUME ═══
When starting a new chat, upload this prompt.md, then say:
"Continue from [section name]. Here is my current [filename] if needed."
Attach the current version of any file you want me to work on or review.

═══ DESIGN NOTES ═══
- Dark sections (navy): Hero, CircuitStrip, FragmentedSolutions, Transform, Partners, Process
- Light sections (sage/sand): Services, Solution, Financials, CaseStudy, Team, CTA, Footer
- Hero: full-width centered, pulsing green dot, 3 stat cards (65%, $0, 30yr)
- CircuitStrip: PCB-inspired with traces, pulses, junction nodes, 3 info cards, center $44M ring
- Nav: dark glass (rgba(15,25,35,0.92)), green glow hover, hamburger on mobile
- Team avatars: 160px round on desktop, 120px on mobile (corrected from original 56px squish)