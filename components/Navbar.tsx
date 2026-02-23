'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#solution', label: 'Solution' },
    { href: '#financial', label: 'Financials' },
    { href: '#casestudy', label: 'Case Study' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav>
        <div className="nav-logo">
          <div className="logo-glyph">
            <svg viewBox="0 0 40 40" fill="none">
              <rect x="8" y="6" width="18" height="18" rx="2" stroke="#2DB54E" strokeWidth="2.5" fill="none" />
              <path d="M8 28 L4 34 L14 34 Z" fill="#2DB54E" opacity="0.5" />
              <circle cx="26" cy="26" r="3" fill="#2DB54E" />
            </svg>
          </div>
          <div className="logo-wordmark">
            <div className="logo-name">TESIO</div>
            <div className="logo-tagline">Energy</div>
          </div>
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