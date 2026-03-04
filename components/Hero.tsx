'use client';

import { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  const [navLinksLeft, setNavLinksLeft] = useState(135);

  useEffect(() => {
    const measure = () => {
      const nav = document.querySelector('nav');
      const navLinks = document.querySelector('.nav-links');
      const topBar = document.querySelector('.hero-top-bar');
      if (!nav || !navLinks || !topBar) return;

      // Temporarily force scrolled layout to measure where links will be
      const wasScrolled = nav.classList.contains('nav-scrolled');
      if (!wasScrolled) nav.classList.add('nav-scrolled');

      const offset = navLinks.getBoundingClientRect().left - topBar.getBoundingClientRect().left;
      setNavLinksLeft(offset);

      if (!wasScrolled) nav.classList.remove('nav-scrolled');
    };

    // Measure after fonts/layout settle
    const timer = setTimeout(measure, 100);
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measure);
    };
  }, []);

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
        <ul className="hero-nav-links" style={{ paddingLeft: navLinksLeft }}>
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
      </div>
      <div className="hero-content">
        <h1>
          Roof + Solar +<br />
          <em>Tax Incentives</em>
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