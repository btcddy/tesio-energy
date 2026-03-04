'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'; 

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero');
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setScrolled(heroBottom <= 0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setOpen(false);

  const links = [
    { label: 'Home', href: '#top' },
    { label: 'Tax Credits', href: '#financial' },
    { label: 'Energy Upgrades', href: '#services' },
    { label: 'Projects', href: '#casestudy' },
    { label: 'About Us', href: '#team' },
  ];

  return (
    <>
      <nav className={scrolled ? 'nav-scrolled' : ''}>
        <div className="nav-logo">
          <a href="#top">
            <Image
              src="/logo-horizontal-dark.png"
              alt="TESIO Energy"
              width={480}
              height={120}
              priority
              style={{ width: 'auto', height: '44px' }}
            />
          </a>
        </div>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        <div className="nav-right">
        </div>

        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div
        className={`mobile-overlay ${open ? 'open' : ''}`}
        onClick={close}
      />

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
      </div>
    </>
  );
}