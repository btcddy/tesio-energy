import './Hero.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-split">
        <div className="hero-left">
          <h1>
            Roof + Solar +<br /><span className="hero-green">Tax Incentives</span>
          </h1>
          <p className="hero-desc">
            We are financing experts helping industrial partners secure federal and state incentives to fund sustainability projects.
          </p>
        </div>
        <div className="hero-right">
          <Image
            src="/Flat_roof_BLDG.png"
            alt="Commercial flat roof building"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>
      </div>
    </section>
  );
}