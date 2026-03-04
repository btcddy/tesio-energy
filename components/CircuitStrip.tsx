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
          <div className="ct-ring-title">Liquidity</div>
          <div className="ct-ring-num"></div>
          <div className="ct-ring-label">Free Cash Flow</div>
        </div>
      </div>

      <div className="ct-card ct-card1">
        <div className="ct-card-title">Solar Output</div>
        <div className="ct-card-val">Lower Carbon Asset</div>
        <div className="ct-card-sub">Lower Energy Costs</div>
      </div>

      <div className="ct-card ct-card2">
        <div className="ct-card-title">Roof Coverage</div>
        <div className="ct-card-val">Retrofit Qualifies</div>
        <div className="ct-card-sub">When Adding Solar</div>
      </div>

      <div className="ct-card ct-card3">
        <div className="ct-card-title">Tax Credits</div>
        <div className="ct-card-val">Safe Harbored</div>
        <div className="ct-card-sub">Sell For Cash</div>
      </div>

      <div className="ct-card ct-card4">
        <div className="ct-card-title">Property Value</div>
        <div className="ct-card-val">Asset Appreciation </div>
        <div className="ct-card-sub">Retain Solar Rights </div>
      </div>
    </section>
  );
}