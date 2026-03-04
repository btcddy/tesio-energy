import './Hero.css';

export default function Hero() {
  const links = [
    { label: 'Home', href: '#top' },
    { label: 'Tax Credits', href: '#financial' },
    { label: 'Energy Upgrades', href: '#services' },
    { label: 'Projects', href: '#casestudy' },
    { label: 'About Us', href: '#team' },
  ];

  return (
    <section className="hero">
      <div className="hero-top-bar">
        <div className="hero-top-row">
          <div className="hero-dot" />
          <div className="hero-line" />
          <span>Tesio Energy</span>
        </div>
        <ul className="hero-nav-links">
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
      </div>
      <div className="hero-content">
        <h1>
          Roof + Solar + <em>Tax Incentives</em>
        </h1>
        <p className="hero-desc">
          We are financing experts helping industrial partners secure federal and state incentives to fund sustainability projects.
        </p>
        <p className="hero-desc">
          Unlock up to 65% funded project costs through tax credits and bonus depreciation.
        </p>
        <div className="hero-stats-row">
          <div className="hero-stat-card">
            <div className="hsc-num">65%</div>
            <div className="hsc-label">Funded project costs</div>
          </div>
          <div className="hero-stat-card">
            <div className="hsc-num">$0</div>
            <div className="hsc-label">Down payment</div>
          </div>
          <div className="hero-stat-card">
            <div className="hsc-num">30<small>yr</small></div>
            <div className="hsc-label">Roof life</div>
          </div>
        </div>
      </div>
    </section>
  );
}