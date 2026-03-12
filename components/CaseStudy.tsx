import './CaseStudy.css';
import Image from 'next/image';

export default function CaseStudy() {
  return (
    <section className="casestudy" id="casestudy">
      <div className="anim">
        <h2 className="sec-h2">Our Integrated Model in Action</h2>
      </div>
      <div className="cs-layout">
        <div className="cs-visual anim">
          <Image
            src="/TN photo.jpeg"
            alt="Bristol, TN live site"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="cs-badge">Bristol, TN — Live Site</div>
        </div>
        <div className="cs-right anim">
          <h3>Bristol, TN<br /><em>Live Site</em></h3>
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
  );
}