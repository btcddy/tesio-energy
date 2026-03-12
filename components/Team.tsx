import './Team.css';

export default function Team() {
  const members = [
    { img: '/Randy Headshot.jpg', name: 'Randy Perry', role: 'Partner', bio: 'Randy has 10+ years in corporate project management and tax consulting. Master\'s in International Accounting from University of London. Leads on-site execution and financial ROI presentations.' },
    { img: '/Mechelle Pope.png', name: 'Mechelle Pope', role: 'Partner / Professional Engineer', bio: 'Mechelle is a seasoned professional with more than 15 years of experience spanning construction, project management, and risk consulting across property, casualty, and renewable energy sectors. Mechelle holds a Bachelor of Applied Science in Civil Engineering from the University of Waterloo, where she specialized in structural engineering and management sciences.' },
    { img: '/Ben Pauluhn.jpg', name: 'Ben Pauluhn', role: 'President — Optimus Energy Solutions', bio: 'Ben is passionate about the Solar, EV, and other Energy Efficiency industries. He has built his career serving others through many business and non-profit ventures and is humbled by the opportunity to educate businesses on the future of renewable energy solutions.' },
    { img: '/Rick Mariucci.jpg', name: 'Rick Mariucci', role: 'Senior Project Manager — Optimus Energy Solutions', bio: 'Rick draws on a career in construction-based customer-service to bring projects to life. Rick leads project implementation throughout Florida, Georgia, and Tennessee. His client-first approach and commitment to quality ensure projects are brought to life that ensure longevity and transparency.' },
  ];

  return (
    <section className="team-sec" id="team">
      <div className="team-header anim">
        <div className="sec-label">Leadership</div>
        <h2 className="sec-h2">Experts in Tax,<br />Construction, &amp; Sustainability</h2>
        <p className="sec-sub">
          Tesio started as a team of experts in financial accounting, taxes, and corporate
          sustainability — built to help industrial America capitalize on $200B+ in federal programs.
        </p>
      </div>
      <div className="team-grid">
        {members.map((m) => (
          <div key={m.name} className="team-card anim">
            <img src={m.img} alt={m.name} className="team-avatar" />
            <h3>{m.name}</h3>
            <div className="team-role">{m.role}</div>
            <p className="team-bio">{m.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}