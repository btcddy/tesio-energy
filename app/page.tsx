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
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-line" />
              <span>Commercial Roof + Solar</span>
            </div>
            <h1>
              Roof + Solar +<br />
              <span className="h1-accent">Tax Incentives</span>
            </h1>
            <p className="hero-desc">
              We combine premium roof retrofits with solar installations
              and a 40% Investment Tax Credit to turn aging roofs into profit centers.
            </p>
            <div className="hero-pillrow">
              <div className="h-pill"><span className="pill-dot dot-g" />Premium Roofing</div>
              <div className="h-pill"><span className="pill-dot dot-a" />Solar Systems</div>
              <div className="h-pill"><span className="pill-dot dot-t" />Tax Incentives</div>
            </div>
            <div className="hero-btns">
              <button className="btn-ghost">View Case Study</button>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img
            src="/Flat_roof_BLDG.png"
            alt="Commercial flat roof building — ideal for solar retrofit"
            className="hero-img"
          />
         
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="services" id="services">
        <div className="svc-header anim">
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
          
            <h2 className="sec-h2">Fragmented Solutions = Missed Value</h2>
          </div>
         
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
      </section>

      {/* ═══ SOLUTION ═══ */}
      <section className="solution" id="solution">
        <div className="sol-card anim">
          <div className="sol-top">
            <div>
              <h2 className="sec-h2">Unlock Value with Roof, Solar & Tax Incentives</h2>
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
          <h2 className="sec-h2">One Integrated Solution.<br />Five Expert Partners.</h2>
          <p className="sec-sub">
            Every partner solves a critical piece. TESIO connects them into a single,
            seamless delivery — so you deal with one team, not five vendors.
          </p>
        </div>

        <div className="partner-hub anim">
          {/* Center — TESIO */}
          <div className="hub-center">
            <div className="hub-ring" />
            <div className="hub-core">
              <div className="hub-logo">TESIO</div>
              <div className="hub-role">Your Single Point of Contact</div>
              <p className="hub-desc">Tax equity planning, partner coordination, and project management. One call handles everything.</p>
            </div>
          </div>

          {/* Spokes */}
          <div className="hub-spokes">
            <div className="spoke spoke-tl">
              <div className="spoke-line" />
              <div className="spoke-card">
                <div className="spoke-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M4 21V10l8-6 8 6v11M9 21v-6h6v6"/></svg>
                </div>
                <div className="spoke-name">FiberTite®</div>
                <div className="spoke-what">Roof Systems</div>
                <p className="spoke-detail">30+ year membranes. No tear-off required.</p>
              </div>
            </div>

            <div className="spoke spoke-tr">
              <div className="spoke-line" />
              <div className="spoke-card">
                <div className="spoke-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2m-8-10H4m16 0h2"/></svg>
                </div>
                <div className="spoke-name">Panelclaw</div>
                <div className="spoke-what">Solar Racking</div>
                <p className="spoke-detail">Lightest flat-roof system. Ultra-fast install.</p>
              </div>
            </div>

            <div className="spoke spoke-bl">
              <div className="spoke-line" />
              <div className="spoke-card">
                <div className="spoke-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <div className="spoke-name">Anchor Products</div>
                <div className="spoke-what">Solar Anchoring</div>
                <p className="spoke-detail">50% less load. Warranty-integrated.</p>
              </div>
            </div>

            <div className="spoke spoke-br">
              <div className="spoke-line" />
              <div className="spoke-card">
                <div className="spoke-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div className="spoke-name">Amicus Solar</div>
                <div className="spoke-what">Solar EPCs</div>
                <p className="spoke-detail">Top-tier EPC cooperative. Trusted deployment.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Integration summary strip */}
        <div className="partner-flow anim">
          <div className="pf-step">
            <div className="pf-num">1</div>
            <div className="pf-text"><strong>FiberTite</strong> lays the foundation</div>
          </div>
          <div className="pf-arrow">→</div>
          <div className="pf-step">
            <div className="pf-num">2</div>
            <div className="pf-text"><strong>Anchor</strong> secures the mount points</div>
          </div>
          <div className="pf-arrow">→</div>
          <div className="pf-step">
            <div className="pf-num">3</div>
            <div className="pf-text"><strong>Panelclaw</strong> racks the panels</div>
          </div>
          <div className="pf-arrow">→</div>
          <div className="pf-step">
            <div className="pf-num">4</div>
            <div className="pf-text"><strong>Amicus</strong> installs &amp; commissions</div>
          </div>
          <div className="pf-arrow">→</div>
          <div className="pf-step pf-tesio">
            <div className="pf-num">✓</div>
            <div className="pf-text"><strong>TESIO</strong> manages it all</div>
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
            { img: '/Randy Headshot.jpg', name: 'Randy Perry', role: 'Partner', bio: '10+ years in corporate project management and tax consulting. Master\'s in International Accounting from University of London. Leads on-site execution and financial ROI presentations.' },
            { img: '/Ben Pauluhn.jpg', name: 'Ben Pauluhn', role: 'President — Optimus Energy Solutions', bio: 'Ben is passionate about the Solar, EV, and other Energy Efficiency industries. He has built his career serving others through many business and non-profit ventures and is humbled by the opportunity to educate businesses on the future of renewable energy solutions.' },
            { img: '/Rick Mariucci.jpg', name: 'Rick Mariucci', role: 'Senior Project Manager — Optimus Energy Solutions', bio: 'Rick draws on a career in construction-based customer-service to bring projects to life. Rick leads project implementation throughout Florida, Georgia, and Tennessee. His client-first approach and commitment to quality ensure projects are brought to life that ensure longevity and transparency.' },
          ].map((m) => (
            <div key={m.name} className="team-card anim">
              <img src={m.img} alt={m.name} className="team-avatar" />
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
          roofs into revenue-generating assets.
        </p>
        <div className="cta-contact">
          Randy Perry · <a href="tel:7275980202">727-598-0202</a> ·{' '}
          <a href="mailto:randy@tesioenergy.com">randy@tesioenergy.com</a>
        </div>
        <div className="cta-btns">
    
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