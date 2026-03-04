'use client';
import { useState } from 'react';
import './Services.css';

const partners = [
  {
    name: 'FiberTite',
    role: 'Roof Systems',
    stat: '30+ yr',
    desc: 'Leading commercial roof systems with 30+ year durability and a global brand reputation.',
    color: '#D4920F',
    colorFaint: 'rgba(212,146,15,',
  },
  {
    name: 'Panelclaw',
    role: 'Solar Racking',
    stat: 'Fastest',
    desc: 'Lightest flat-roof solar racking with ultra-fast installation and simplified maintenance.',
    color: '#1A9E8F',
    colorFaint: 'rgba(26,158,143,',
  },
  {
    name: 'Anchor Products',
    role: 'Anchoring',
    stat: '\u221250% load',
    desc: 'Roof-safe solar anchoring that reduces roof load by 50% and integrates warranty coverage.',
    color: '#D14B3A',
    colorFaint: 'rgba(209,75,58,',
  },
  {
    name: 'Amicus Solar',
    role: 'Solar EPCs',
    stat: 'Tier 1',
    desc: 'Cooperative of top-tier solar EPCs delivering quality, safety, and reputable deployment.',
    color: '#3D8EDE',
    colorFaint: 'rgba(61,142,222,',
  },
];

const flowY = [70, 220, 380, 560];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="services" id="services">
      <div className="svc-orb svc-orb1" />
      <div className="svc-orb svc-orb2" />

      <div className="svc-header anim">
        <div className="sec-label">Partner Ecosystem</div>
        <h2 className="svc-title-main">
          Trusted Partners Powering One Integrated Solution
        </h2>
      </div>

      <div className="svc-flow">
        <div className="svc-partners">
          {partners.map((p, i) => (
            <div
              key={p.name}
              className={`svc-pcard${active === i ? ' svc-pcard-active' : ''}${i % 2 !== 0 ? ' svc-pcard-indent' : ''}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                borderLeftColor: active === i ? p.color : `${p.colorFaint}0.3)`,
                borderTopColor: active === i ? `${p.colorFaint}0.25)` : undefined,
                borderRightColor: active === i ? `${p.colorFaint}0.25)` : undefined,
                borderBottomColor: active === i ? `${p.colorFaint}0.25)` : undefined,
                background: active === i ? `${p.colorFaint}0.06)` : undefined,
              }}
            >
              <div
                className="svc-pcard-badge"
                style={{
                  background: active === i ? `${p.colorFaint}0.1)` : undefined,
                  borderColor: active === i ? `${p.colorFaint}0.25)` : undefined,
                }}
              >
                <span
                  className="svc-pcard-stat"
                  style={{ color: active === i ? p.color : undefined }}
                >
                  {p.stat}
                </span>
              </div>
              <div className="svc-pcard-info">
                <div className="svc-pcard-name">{p.name}</div>
                <div
                  className="svc-pcard-role"
                  style={{ color: active === i ? p.color : undefined }}
                >
                  {p.role}
                </div>
                <div className="svc-pcard-desc">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <svg
          className="svc-lines"
          width="160"
          height="100%"
          viewBox="-60 0 160 640"
          preserveAspectRatio="none"
        >
          {flowY.map((y, i) => {
            const p = partners[i];
            const startX = i % 2 === 0 ? -23 : 7;
            return (
              <g key={i}>
                <path
                  id={`svcpath${i}`}
                  d={`M ${startX} ${y} C ${startX + 40} ${y}, 60 315, 85 315`}
                  fill="none"
                  stroke={p.color}
                  strokeWidth="1.5"
                  opacity={active === i ? 0.6 : 0.15}
                  style={{ transition: 'opacity 0.4s' }}
                />
                <circle r="2.5" fill={p.color} opacity={active === i ? 0.9 : 0.5}>
                  <animateMotion
                    dur={`${2 + i * 0.3}s`}
                    repeatCount="indefinite"
                  >
                    <mpath href={`#svcpath${i}`} />
                  </animateMotion>
                </circle>
              </g>
            );
          })}
          <circle
            cx="85"
            cy="315"
            r="6"
            fill="rgba(61,217,98,0.2)"
            stroke="rgba(61,217,98,0.4)"
            strokeWidth="1.5"
          >
            <animate
              attributeName="r"
              values="5;8;5"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          {partners.map((p, i) => {
            const angle = -90 + i * 90;
            const rad = (angle * Math.PI) / 180;
            const r = 16;
            const cx = 85 + Math.cos(rad) * r;
            const cy = 315 + Math.sin(rad) * r;
            return (
              <circle
                key={`hdot${i}`}
                cx={cx}
                cy={cy}
                r="2"
                fill={p.color}
                opacity="0.6"
              >
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur={`${1.5 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
        </svg>

        <div className="svc-tesio">
          <div className="svc-tesio-glow" />
          <div className="svc-tesio-label">TESIO</div>
          <div className="svc-tesio-name">Energy</div>
          <div className="svc-tesio-divider" />
          <div className="svc-tesio-desc">
            {'Tax equity & single-point contact for all partners'}
          </div>
          <div className="svc-tesio-badge">Managing All Partners</div>
        </div>

        <svg className="svc-arrow" width="80" height="40" viewBox="0 0 80 40">
          <line
            x1="0"
            y1="20"
            x2="65"
            y2="20"
            stroke="rgba(212,146,15,0.3)"
            strokeWidth="2"
          />
          <polygon points="65,13 80,20 65,27" fill="rgba(212,146,15,0.4)" />
          <circle cx="0" cy="20" r="2.5" fill="#D4920F">
            <animate
              attributeName="cx"
              values="0;65;0"
              dur="2.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        <div className="svc-client">
          <div className="svc-client-icon">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D4920F"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
              <path d="M12 12v3" />
              <path d="M2 12h20" />
            </svg>
          </div>
          <div className="svc-client-title">Your Portfolio</div>
          <div className="svc-client-label">Protected</div>
          <div className="svc-client-desc">
            {'Scalable, bankable solution delivered'}
          </div>
        </div>
      </div>

      <div className="svc-tagline anim">
        {'Together, the partners eliminate critical barriers and deliver a scalable, bankable solution for your portfolio.'}
      </div>
    </section>
  );
}