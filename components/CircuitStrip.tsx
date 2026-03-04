import './CircuitStrip.css';

export default function CircuitStrip() {
  return (
    <section className="circuit-strip">
      <div className="ct-grid" />

      <div className="ct-trace ct-v ct-v1" />
      <div className="ct-trace ct-v ct-v2" />
      <div className="ct-trace ct-v ct-v3" />
      <div className="ct-trace ct-h ct-h1" />
      <div className="ct-trace ct-h ct-h2" />

      <div className="ct-pulse ct-pv" style={{ left: '25%' } as React.CSSProperties} />
      <div className="ct-pulse ct-pv ct-pd2" style={{ left: '50%' } as React.CSSProperties} />
      <div className="ct-pulse ct-pv ct-pd3" style={{ left: '75%' } as React.CSSProperties} />
      <div className="ct-pulse ct-ph ct-pd4" style={{ top: '30%' } as React.CSSProperties} />
      <div className="ct-pulse ct-ph ct-pd5" style={{ top: '60%' } as React.CSSProperties} />

      <div className="ct-jn ct-jn1" />
      <div className="ct-jn ct-jn2" />
      <div className="ct-jn ct-jn3" />
      <div className="ct-jn ct-jn4" />
      <div className="ct-jn ct-jn5" />
      <div className="ct-jn ct-jn6" />

      <div className="ct-center">
        <div className="ct-ring">
          <div className="ct-ring-num">$44M</div>
          <div className="ct-ring-label">Free Cash Flow</div>
        </div>
      </div>

      <div className="ct-card ct-card1">
        <div className="ct-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#3DD962" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2m-8-10H4m16 0h2"/></svg>
        </div>
        <div className="ct-card-title">Solar Output</div>
        <div className="ct-card-val">35 MW</div>
        <div className="ct-card-sub">1,535 panels active</div>
      </div>

      <div className="ct-card ct-card2">
        <div className="ct-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#D4920F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M4 21V10l8-6 8 6v11M9 21v-6h6v6"/></svg>
        </div>
        <div className="ct-card-title">Roof Coverage</div>
        <div className="ct-card-val">4M ft²</div>
        <div className="ct-card-sub">FiberTite membrane</div>
      </div>

      <div className="ct-card ct-card3">
        <div className="ct-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#1A9E8F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M12 10v4m-2-2h4"/></svg>
        </div>
        <div className="ct-card-title">Tax Credits</div>
        <div className="ct-card-val">40% ITC</div>
        <div className="ct-card-sub">Safe harbored</div>
      </div>
    </section>
  );
}