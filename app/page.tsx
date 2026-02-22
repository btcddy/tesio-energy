import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ScrollAnimator from '@/components/ScrollAnimator';

/* ── SVG Icon helpers ── */
const IconSolar = ({ stroke = '#2DB54E' }: { stroke?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2m-8-10H4m16 0h2m-2.93-7.07l-1.41 1.41m-9.32 9.32l-1.41 1.41m0-12.14l1.41 1.41m9.32 9.32l1.41 1.41" />
  </svg>
);
const IconRoof = ({ stroke = '#D4920F' }: { stroke?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18M4 21V10l8-6 8 6v11M9 21v-6h6v6" />
  </svg>
);
const IconTax = ({ stroke = '#1A9E8F' }: { stroke?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="14" rx="2" />
    <path d="M12 10v4m-2-2h4M6 10h.01M6 14h.01" />
  </svg>
);
const IconDoc = ({ stroke = '#2DB54E' }: { stroke?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);
const IconBolt = ({ stroke = '#3D5A80' }: { stroke?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);
const IconPulse = ({ stroke = '#3DD962' }: { stroke?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

/* ── Small reusable bits ── */
const CsPanels = () => (
  <div className="cs-panels">
    {Array.from({ length: 50 }).map((_, i) => (
      <div key={i} className="cs-p" />
    ))}
  </div>
);

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero-left">
          
        
          <h1>
            Roof + Solar +<br />Tax Incentives<br />
          </h1>
          <p className="hero-desc">
            Tesio Energy combines premium roof retrofits with solar installations
            and a 40% Investment Tax Credit to turn aging roofs into profit centers.
          </p>
          <div className="hero-pillrow">
            <div className="h-pill"><span className="pill-dot dot-g" />Premium Roofing</div>
            <div className="h-pill"><span className="pill-dot dot-a" />Solar Systems</div>
            <div className="h-pill"><span className="pill-dot dot-t" />Tax Incentives</div>
          </div>
          <div className="hero-btns">

            <button className="btn-ol">View Case Study</button>
          </div>
        </div>
        <div className="hero-right">
          <Image
            src="/Flat_roof_BLDG.png"
            alt="Commercial flat roof building — ideal for solar retrofit"
            fill
            className="hero-img"
            priority
          />
        </div>
      </section>


      {/* ═══ SERVICES ═══ */}
      <section className="services" id="services">
        <div className="svc-header anim">
          <div className="sec-label">What We Do</div>
          <h2 className="sec-h2">One Partner. Full-Spectrum<br />Energy Solutions.</h2>
          <p className="sec-sub">
            We bring funding opportunities and conduct on-site studies at no upfront cost. Our team
            handles applications, hires expert contractors, and implements each project after approval.
          </p>
        </div>
        <div className="svc-grid">
          <div className="svc-card anim">
            <div className="icon-box ib-gl"><IconSolar /></div>
            <h3>Solar Energy</h3>
            <p>Industrial rooftop and ground-mount photovoltaic systems at commercial scale.</p>
          </div>
          <div className="svc-card anim">
            <div className="icon-box ib-al"><IconRoof /></div>
            <h3>Roof Retrofits</h3>
            <p>Premium FiberTite membrane systems extending roof life 30+ years without tear-off.</p>
          </div>
          <div className="svc-card anim">
            <div className="icon-box ib-tl"><IconTax /></div>
            <h3>Tax Consulting</h3>
            <p>ITC, bonus depreciation, and tax equity planning to maximize financial returns.</p>
          </div>
          <div className="svc-card anim">
            <div className="icon-box ib-gl"><IconDoc /></div>
            <h3>USDA Grants</h3>
            <p>REAP grants up to $1.5M for rural manufacturers. Full application management.</p>
          </div>
          <div className="svc-card anim">
            <div className="icon-box ib-nl"><IconBolt /></div>
            <h3>Energy Upgrades</h3>
            <p>Chillers, boilers, compressors, motors, fans and lighting — cutting 20–30% energy waste.</p>
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM ═══ */}
      <section className="problem" id="problem">
        <div className="problem-top anim">
          <div>
            <div className="sec-label">The Problem</div>
            <h2 className="sec-h2">Fragmented Solutions<br />= Missed Value</h2>
          </div>
          <p className="sec-sub">
            Siloed approaches lead to delays, missed incentives, and lost portfolio value for asset owners.
          </p>
        </div>
        <div className="problem-grid">
          <div className="prob-card anim">
            <div className="icon-box ib-cl" style={{ border: '1.5px solid rgba(209,75,58,0.15)' }}>
              <IconRoof stroke="#D14B3A" />
            </div>
            <h3>Roofing Installation</h3>
            <ul className="prob-list">
              <li>CapEx heavy with no clear ROI</li>
              <li>Treated as an expense, not an investment</li>
              <li>No access to tax credits standalone</li>
            </ul>
          </div>
          <div className="prob-card anim">
            <div className="icon-box ib-cl" style={{ border: '1.5px solid rgba(209,75,58,0.15)' }}>
              <IconSolar stroke="#D14B3A" />
            </div>
            <h3>Solar Installation</h3>
            <ul className="prob-list">
              <li>Dependent on existing roof condition</li>
              <li>Voids roof warranties, increasing risk</li>
              <li>Low vendor reliability across market</li>
            </ul>
          </div>
          <div className="prob-card anim">
            <div className="icon-box ib-cl" style={{ border: '1.5px solid rgba(209,75,58,0.15)' }}>
              <IconTax stroke="#D14B3A" />
            </div>
            <h3>Tax &amp; Financing</h3>
            <ul className="prob-list">
              <li>Incentives commonly missed or misunderstood</li>
              <li>Poor coordination with project execution</li>
              <li>Benefits left on the table entirely</li>
            </ul>
          </div>
        </div>
        <div className="problem-callout anim">
          <strong>Result:</strong> Asset owners manage multiple vendors, face higher costs, delayed
          execution, and leave millions in incentives unrealized.
        </div>
      </section>

      {/* ═══ SOLUTION ═══ */}
      <section className="solution" id="solution">
        <div className="sol-card anim">
          <div className="sol-top">
            <div>
              <div className="sec-label">One Integrated Solution</div>
              <h2 className="sec-h2">Unlock 30 Years of Value with Tax Benefits + Financing</h2>
            </div>
            <div className="sol-top-right">
              <p>Combine a roofing upgrade with solar, unlocking federal incentives that fund the entire project.</p>
              <div className="itc-badge">40% ITC + 100% Bonus Depreciation</div>
            </div>
          </div>
          <div className="sol-flow">
            <div className="sol-step">
              <div className="icon-box ib-gd"><IconRoof stroke="#3DD962" /></div>
              <h3>Premium Roof Retrofit</h3>
              <ul className="sol-list">
                <li>Retrofit qualifies for tax benefits as solar foundation</li>
                <li>Boosts longevity &amp; minimizes sunken costs</li>
                <li>No downtime or roof tear-off required</li>
              </ul>
              <div className="sol-impact">
                <div className="sol-impact-label">Impact</div>
                <div className="sol-impact-val">Up to 30-year roof life extension</div>
              </div>
            </div>
            <div className="sol-arrow">→</div>
            <div className="sol-step">
              <div className="icon-box ib-gd"><IconSolar stroke="#3DD962" /></div>
              <h3>Solar System</h3>
              <ul className="sol-list">
                <li>Long-term on-site power generation</li>
                <li>Offsets uncertain electricity price increases</li>
                <li>Tax credits sold for immediate cash</li>
              </ul>
              <div className="sol-impact">
                <div className="sol-impact-label">Impact</div>
                <div className="sol-impact-val">Tenants &amp; investors favor low-carbon</div>
              </div>
            </div>
            <div className="sol-arrow">→</div>
            <div className="sol-step">
              <div className="icon-box ib-gd"><IconPulse /></div>
              <h3>Asset Value &amp; Liquidity</h3>
              <ul className="sol-list">
                <li>Flexible ownership — sell property, keep solar</li>
                <li>New roof retrofit increases property value</li>
                <li>Reinvest free capital across portfolio</li>
              </ul>
              <div className="sol-impact">
                <div className="sol-impact-label">Impact</div>
                <div className="sol-impact-val">New Roof = Greater Asset Value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINANCIALS ═══ */}
      <section className="financial" id="financial">
        <div className="fin-header anim">
          <div className="sec-label">Financial Model</div>
          <h2 className="sec-h2">$100M Project Example</h2>
          <p className="sec-sub">
            4 million sq. ft. of existing roof retrofitted with FiberTite &amp; Solar. 6% interest, 0% down payment.
          </p>
        </div>
        <div className="fin-grid">
          <div className="fin-box anim">
            <h3>Cash In <span className="tag tag-g">~$162.5M</span></h3>
            <div className="fin-row"><span className="lbl">Project Financing</span><span className="val val-g">$90.0M</span></div>
            <div className="fin-row"><span className="lbl">Bridge Loan</span><span className="val val-g">$10.0M</span></div>
            <div className="fin-row"><span className="lbl">Tax Credits (40% ITC)</span><span className="val val-g">$40.0M</span></div>
            <div className="fin-row"><span className="lbl">Depreciation Benefits</span><span className="val val-g">$16.0M</span></div>
            <div className="fin-row"><span className="lbl">Electricity Income</span><span className="val val-g">$5.5M</span></div>
            <div className="fin-row"><span className="lbl">Maintenance Savings</span><span className="val val-g">$1.0M</span></div>
            <div className="fin-total"><span className="lbl">Total Cash In</span><span className="val val-g">$162.5M</span></div>
          </div>
          <div className="fin-box anim">
            <h3>Cash Out <span className="tag tag-r">~$118.5M</span></h3>
            <div className="fin-row"><span className="lbl">Project Costs</span><span className="val val-r">($100.0M)</span></div>
            <div className="fin-row"><span className="lbl">0% Down Payment</span><span className="val val-r">($11.4M)</span></div>
            <div className="fin-row"><span className="lbl">Financing Interest</span><span className="val val-r">($5.4M)</span></div>
            <div className="fin-row"><span className="lbl">Principal Repayment</span><span className="val val-r">($1.7M)</span></div>
            <div className="fin-total"><span className="lbl">Total Cash Out</span><span className="val val-r">($118.5M)</span></div>
            <div className="fin-annual">
              <div className="fin-annual-label">Year 3+ Annual</div>
              <div className="fin-annual-val">Cash In $6.5M · Cash Out $7.1M · Net ($600K)</div>
            </div>
          </div>
        </div>
        <div className="fcf-card anim">
          <div className="sec-label">Net Free Cash Flow</div>
          <div className="fcf-num">$44M</div>
          <div className="fcf-sub">in tax benefits that can be sold</div>
          <p className="fcf-desc">
            By end of Year Two, 35MW is online — activating electricity revenue and tax benefit
            realization. Converting a major maintenance liability into $44M of free cash flow with 0% down.
          </p>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ═══ */}
      <section className="transform">
        <div style={{ textAlign: 'center' }} className="anim">
          <div className="sec-label">The Transformation</div>
          <h2 className="sec-h2">From Cost Center to Profit Center</h2>
        </div>
        <div className="transform-grid">
          <div className="t-card t-before anim">
            <div className="t-badge badge-b">Before</div>
            <h3>Old Roof<br />(Cost Center)</h3>
            <ul className="t-list">
              <li>4M sq. ft. of aging roof = maintenance liability</li>
              <li>No revenue generation</li>
              <li>Ongoing capital drain</li>
              <li>Depreciating asset value</li>
            </ul>
          </div>
          <div className="t-arrow anim">→</div>
          <div className="t-card t-after anim">
            <div className="t-badge badge-a">After</div>
            <h3>Solar-Enabled Roof<br />(Profit Center)</h3>
            <ul className="t-list">
              <li>New roofs with full warranty coverage</li>
              <li>Roof &amp; solar bundle = major liquidity event</li>
              <li>$44M in sellable tax benefits</li>
              <li>4M sq. ft. FiberTite installed at 0% down</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDY ═══ */}
      <section className="casestudy" id="casestudy">
        <div className="anim">
          <div className="sec-label">Proof of Concept</div>
          <h2 className="sec-h2">Our Integrated Model in Action</h2>
        </div>
        <div className="cs-layout">
          <div className="cs-visual anim">
            <div className="cs-grid-bg" />
            <CsPanels />
            <div className="cs-badge">Bristol, TN — Live Site</div>
          </div>
          <div className="cs-right anim">
            <h3>Bristol, TN<br /><em>Test Site</em></h3>
            <div className="cs-meta">
              <div className="cs-meta-item"><div className="cs-meta-label">Installation</div><div className="cs-meta-val">1,535 Panels</div></div>
              <div className="cs-meta-item"><div className="cs-meta-label">Current Roof</div><div className="cs-meta-val">20+ Year Old</div></div>
              <div className="cs-meta-item"><div className="cs-meta-label">Roof System</div><div className="cs-meta-val">FiberTite KEE</div></div>
              <div className="cs-meta-item"><div className="cs-meta-label">Scope</div><div className="cs-meta-val">Solar + Retrofit</div></div>
            </div>
            <p className="cs-partners">
              <strong>Partners in Action:</strong> FiberTite KEE Membrane, Anchor Products U-Anchors,
              and PanelClaw racking system — all working together on a 20+ year-old FiberTite roof in
              excellent condition.
            </p>
            <div className="cs-outcome">
              <strong>Outcome:</strong> Tangible proof of durability, integration, and scalability
              for large portfolios.
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PARTNERS ═══ */}
      <section className="partners" id="partners">
        <div className="partners-header anim">
          <div className="sec-label">Partner Ecosystem</div>
          <h2 className="sec-h2">Trusted Partners Powering<br />One Integrated Solution</h2>
          <p className="sec-sub">
            Together, our partners eliminate critical barriers and deliver a scalable, bankable
            solution for your portfolio.
          </p>
        </div>
        <div className="partner-grid">
          {[
            { name: 'FiberTite®', role: 'Roof Systems', desc: '30+ year durability. Global brand reputation in commercial roofing membranes.' },
            { name: 'Panelclaw', role: 'Solar Racking', desc: 'Lightest flat-roof racking. Ultra-fast installation & simplified maintenance.' },
            { name: 'Anchor Products', role: 'Solar Anchoring', desc: 'Roof-safe anchoring. Reduces load by 50% & integrates with warranty.' },
            { name: 'Amicus Solar', role: 'Solar EPCs', desc: 'Cooperative of top-tier EPCs. Quality, safety & reputable deployment.' },
          ].map((p) => (
            <div key={p.name} className="partner-card anim">
              <div className="p-logo">{p.name}</div>
              <div className="p-role">{p.role}</div>
              <p className="p-desc">{p.desc}</p>
            </div>
          ))}
          <div className="partner-card tesio anim">
            <div className="p-logo" style={{ color: 'var(--green-glow)' }}>TESIO</div>
            <div className="p-role">Single Point of Contact</div>
            <p className="p-desc">Tax equity planning &amp; partner coordination. One contact for seamless delivery.</p>
          </div>
        </div>
      </section>

      {/* ═══ TEAM ═══ */}
      <section className="team-sec" id="team">
        <div className="team-header anim">
          <div className="sec-label">Leadership</div>
          <h2 className="sec-h2">Experts in Finance,<br />Tax &amp; Sustainability</h2>
          <p className="sec-sub">
            Tesio started as a team of experts in financial accounting, taxes, and corporate
            sustainability — built to help industrial America capitalize on $200B+ in federal programs.
          </p>
        </div>
        <div className="team-grid">
          {[
            { initials: 'RP', av: 'av-1', name: 'Randy Perry', role: 'Partner', bio: '10+ years in corporate project management and tax consulting. Master\'s in International Accounting from University of London. Leads on-site execution and financial ROI presentations.' },
            { initials: 'NB', av: 'av-2', name: 'Nicole Bouquet', role: 'Advisor — Sustainability', bio: 'Former Senior Director, Sustainability Transaction Group. Supported ESG investments for Walmart, Disney, Dollar Tree, Bank of America, and WaWa. Oversees sustainable vision.' },
            { initials: 'MS', av: 'av-3', name: 'Mark Shirah', role: 'Partner — Power Quality', bio: '35+ years in power quality engineering. One of 138 Certified Power Quality experts worldwide. Teaches power quality thermology at WKU.' },
          ].map((m) => (
            <div key={m.name} className="team-card anim">
              <div className={`team-avatar ${m.av}`}>{m.initials}</div>
              <h3>{m.name}</h3>
              <div className="team-role">{m.role}</div>
              <p className="team-bio">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="process" id="process">
        <div className="process-header anim">
          <div className="sec-label">Our Approach</div>
          <h2 className="sec-h2">Four Steps to Unlock Value</h2>
        </div>
        <div className="steps-grid">
          <div className="step-card anim">
            <div className="step-num">01</div>
            <h3>Portfolio Assessment</h3>
            <p>Identify high-value assets best suited for bundled solar + roofing. Conduct early structural assessments.</p>
          </div>
          <div className="step-card urgent anim">
            <div className="step-num">02</div>
            <h3>Commit by Deadline</h3>
            <p>Sign contracts to safe harbor 40% Tax Credits for 4 years and maximize total benefits.</p>
            <div className="step-deadline">⚡ Deadline: July 2, 2026</div>
          </div>
          <div className="step-card anim">
            <div className="step-num">03</div>
            <h3>Launch Project</h3>
            <p>Commence detailed electrical and structural engineering to satisfy tax credit requirements.</p>
          </div>
          <div className="step-card anim">
            <div className="step-num">04</div>
            <h3>Long-term Partnership</h3>
            <p>Included warranties, monitoring, and maintenance ensure value continues for decades.</p>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cta" id="contact">
        <h2>Ready to Transform<br />Your <em>Portfolio</em>?</h2>
        <p>
          Don&apos;t leave millions in tax incentives on the table. Let TESIO Energy turn your aging
          roofs into revenue-generating assets — at zero cost to you.
        </p>
        <div className="cta-contact">
          Randy Perry · <a href="tel:7275980202">727-598-0202</a> ·{' '}
          <a href="mailto:randy@tesioenergy.com">randy@tesioenergy.com</a>
        </div>
        <div className="cta-btns">
          <button className="btn-green">Schedule Your Assessment →</button>
          <button className="btn-ol">Download Pitch Deck</button>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer>
        <div className="f-left">
          <div className="f-brand">TESIO Energy</div>
          <div className="f-addr">
            2800 Blake St · Denver, CO 80302 ·{' '}
            <a href="mailto:info@tesioenergy.com">info@tesioenergy.com</a>
          </div>
          <div className="f-copy">© 2026 Tesio Energy. All rights reserved.</div>
        </div>
        <ul className="f-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Accessibility</a></li>
          <li><a href="#">USDA Grant Info</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </footer>
    </>
  );
}