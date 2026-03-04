import { IconRoof, IconSolar, IconPulse } from './Icons';
import './Solution.css';

export default function Solution() {
  return (
    <section className="financial" id="financial">
      <div className="sol-card anim">
        <div className="sol-top">
          <div>
            <h2 className="sec-h2">Unlock Value with Tesio&apos;s Solutions</h2>
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
  );
}