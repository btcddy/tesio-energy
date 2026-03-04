import '../privacy-policy/privacy.css';

export const metadata = {
  title: 'Accessibility Statement | TESIO Energy',
};

export default function Accessibility() {
  return (
    <main className="privacy-page">
      <div className="privacy-container">
        <div className="privacy-label">Legal</div>
        <h1 className="privacy-h1">Accessibility Statement</h1>
        <p className="privacy-date">Effective Date: January 1, 2024</p>

        <div className="privacy-body">
          <section>
            <h2>1. Commitment to Accessibility</h2>
            <p>At Tesio Energy, we are committed to ensuring that our website is accessible to all users, including those with disabilities. We strive to provide an inclusive digital experience by adhering to recognized accessibility standards.</p>
          </section>

          <section>
            <h2>2. Accessibility Standards</h2>
            <p>Our goal is to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, which provides a framework for making web content more accessible to people with disabilities.</p>
          </section>

          <section>
            <h2>3. Ongoing Efforts</h2>
            <p>We continuously work to improve the accessibility of our website. This includes regular updates and testing to address any issues and enhance the user experience.</p>
          </section>

          <section>
            <h2>4. Feedback and Assistance</h2>
            <p>If you encounter any accessibility barriers on our website or have suggestions for improvements, please let us know. We value your feedback and are dedicated to making our website as accessible as possible. You can contact us at <a href="mailto:info@tesioenergy.com">info@tesioenergy.com</a> for assistance.</p>
          </section>

          <section>
            <h2>5. Compatibility</h2>
            <p>Our website is designed to be compatible with the most commonly used web browsers and assistive technologies. However, if you experience difficulties, please reach out to us so that we can provide support.</p>
          </section>

          <section>
            <h2>6. Updates to This Statement</h2>
            <p>We may update this Accessibility Statement periodically to reflect changes in our practices or improvements in accessibility. We will post any updates on this page with an updated effective date.</p>
          </section>

          <p className="privacy-thanks">Thank you for visiting Tesio Energy. We are committed to ensuring that everyone can access our content and services with ease.</p>
        </div>

        <a href="/" className="privacy-back">← Back to Home</a>
      </div>
    </main>
  );
}