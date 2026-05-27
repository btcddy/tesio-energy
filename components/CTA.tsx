import './CTA.css';

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <h2>Ready to Transform<br />Your <em>Portfolio</em>?</h2>
      <p>
        Don&apos;t leave millions in tax incentives on the table. Let Tesio Energy turn your aging
        roofs into revenue-generating assets.
      </p>
      <div className="cta-contact">
        Randy Perry ·{' '}
        <a href="mailto:randy@tesioenergy.com">randy@tesioenergy.com</a>
      </div>
      <div className="cta-btns">
        <a href="/Pitch Deck_V8.pdf" target="_blank" rel="noopener noreferrer" className="btn-ol">
          Download Overview
        </a>
      </div>
    </section>
  );
}
