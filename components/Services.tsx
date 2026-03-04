import { IconSolar, IconRoof, IconTax, IconDoc, IconBolt } from './Icons';
import './Services.css';

export default function Services() {
  return (
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
  );
}