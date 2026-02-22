'use client';

import { useEffect } from 'react';

export default function ScrollAnimator() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((el, i) => {
          if (el.isIntersecting) {
            setTimeout(() => el.target.classList.add('show'), i * 70);
            observer.unobserve(el.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.anim').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}