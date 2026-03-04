import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="f-left">
        <div className="f-brand">TESIO Energy</div>
        <div className="f-addr">
          2800 Blake St · Denver, CO 80302 ·{' '}
          <a href="mailto:info@tesioenergy.com">info@tesioenergy.com</a>
        </div>
        <div className="f-copy">© 2026 Tesio Energy. All rights reserved.</div>
      </div>
      <ul className="f-links">
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/accessibility">Accessibility</a></li>
      </ul>
    </footer>
  );
}