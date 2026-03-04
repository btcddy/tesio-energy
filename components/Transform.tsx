import './Transform.css';

export default function Transform() {
  return (
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
  );
}