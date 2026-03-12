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
            We combine premium roof retrofits with solar installations, a 40% Investment Tax Credit, and Depreciation Benefits to turn aging roofs into profit centers.
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