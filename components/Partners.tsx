import './Partners.css';

export default function Partners() {
  return (
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
        <div className="hub-center">
          <div className="hub-ring" />
          <div className="hub-core">
            <div className="hub-logo">TESIO</div>
            <div className="hub-role">Your Single Point of Contact</div>
            <p className="hub-desc">Tax equity planning, partner coordination, and project management. One call handles everything.</p>
          </div>
        </div>

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
  );
}