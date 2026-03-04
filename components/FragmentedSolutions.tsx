import './FragmentedSolutions.css';

export default function FragmentedSolutions() {
  return (
    <section className="frag" id="problem">
      <div className="frag-bg" />
      <div className="frag-header anim">
        <div className="frag-label">The Industry Problem</div>
        <h2 className="frag-h2">Fragmented Solutions<br /><span className="frag-accent">= Missed Value</span></h2>
        <p className="frag-sub">
          Siloed approaches lead to delays, missed incentives, and lost portfolio value for asset owners.
        </p>
      </div>

      <div className="frag-grid">
        <div className="frag-card anim">
          <div className="frag-card-glow frag-glow-1" />
          <div className="frag-icon">
            <svg viewBox="0 0 48 48" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 44h36" stroke="rgba(255,255,255,0.2)" />
              <path d="M10 44V22L24 12l14 10v22" stroke="url(#roofGrad)" strokeWidth="2" />
              <path d="M18 44V32h12v12" stroke="url(#roofGrad)" />
              <path d="M4 24l20-14 20 14" stroke="url(#roofGrad)" strokeWidth="2.5" />
              <line x1="24" y1="8" x2="24" y2="3" stroke="#D14B3A" strokeWidth="2" />
              <circle cx="24" cy="2" r="1.5" fill="#D14B3A" />
              <defs>
                <linearGradient id="roofGrad" x1="10" y1="12" x2="38" y2="44">
                  <stop offset="0%" stopColor="#FF8A75" />
                  <stop offset="100%" stopColor="#D14B3A" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3>Roofing Obstacles</h3>
          <p className="frag-desc">Treated as a heavy CapEx expense rather than an investment, with zero access to tax credits.</p>
          <div className="frag-stat">
            <span className="frag-stat-num">$0</span>
            <span className="frag-stat-label">Tax credits accessed standalone</span>
          </div>
        </div>

        <div className="frag-card anim">
          <div className="frag-card-glow frag-glow-2" />
          <div className="frag-icon">
            <svg viewBox="0 0 48 48" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="24" cy="24" r="7" stroke="url(#solarGrad)" strokeWidth="2" />
              <g stroke="url(#solarGrad)" strokeWidth="1.8">
                <line x1="24" y1="5" x2="24" y2="12" />
                <line x1="24" y1="36" x2="24" y2="43" />
                <line x1="5" y1="24" x2="12" y2="24" />
                <line x1="36" y1="24" x2="43" y2="24" />
                <line x1="10.6" y1="10.6" x2="15.2" y2="15.2" />
                <line x1="32.8" y1="32.8" x2="37.4" y2="37.4" />
                <line x1="37.4" y1="10.6" x2="32.8" y2="15.2" />
                <line x1="15.2" y1="32.8" x2="10.6" y2="37.4" />
              </g>
              <path d="M19 19l-7-7M29 19l7-7" stroke="#D14B3A" strokeWidth="2" opacity="0.5" />
              <defs>
                <linearGradient id="solarGrad" x1="5" y1="5" x2="43" y2="43">
                  <stop offset="0%" stopColor="#FFCD6B" />
                  <stop offset="100%" stopColor="#D4920F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3>Solar Risks</h3>
          <p className="frag-desc">Highly dependent on structural limits; often voids existing roof warranties.</p>
          <div className="frag-stat">
            <span className="frag-stat-num">!!!</span>
            <span className="frag-stat-label">Warranty voided on install</span>
          </div>
        </div>

        <div className="frag-card anim">
          <div className="frag-card-glow frag-glow-3" />
          <div className="frag-icon">
            <svg viewBox="0 0 48 48" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="14" width="36" height="24" rx="4" stroke="url(#taxGrad)" strokeWidth="2" />
              <path d="M6 22h36" stroke="url(#taxGrad)" strokeWidth="1.5" />
              <circle cx="24" cy="30" r="4.5" stroke="url(#taxGrad)" strokeWidth="1.5" />
              <path d="M24 27.5v5M21.5 30h5" stroke="url(#taxGrad)" strokeWidth="1.5" />
              <path d="M14 32l-5 5M34 32l5 5" stroke="#D14B3A" strokeWidth="1.5" opacity="0.4" />
              <circle cx="9" cy="37.5" r="1.5" fill="#D14B3A" opacity="0.4" />
              <circle cx="39" cy="37.5" r="1.5" fill="#D14B3A" opacity="0.4" />
              <defs>
                <linearGradient id="taxGrad" x1="6" y1="14" x2="42" y2="38">
                  <stop offset="0%" stopColor="#6EDBA7" />
                  <stop offset="100%" stopColor="#1A9E8F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3>Tax Coordination</h3>
          <p className="frag-desc">Incentives are frequently misunderstood or lost due to poor coordination with project execution.</p>
          <div className="frag-stat">
            <span className="frag-stat-num">40%</span>
            <span className="frag-stat-label">ITC commonly left unclaimed</span>
          </div>
        </div>
      </div>

      <div className="frag-bottom anim">
        <div className="frag-bottom-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#D14B3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
        <div className="frag-bottom-text">
          <strong>The Bottom Line:</strong> Don&apos;t leave millions in unrealized gains by managing multiple, uncoordinated vendors.
        </div>
      </div>
    </section>
  );
}