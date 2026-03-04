import './privacy.css';

export const metadata = {
  title: 'Privacy Policy | TESIO Energy',
};

export default function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <div className="privacy-container">
        <div className="privacy-label">Legal</div>
        <h1 className="privacy-h1">Privacy Policy</h1>
        <p className="privacy-date">Effective Date: January 1, 2024</p>

        <div className="privacy-body">
          <section>
            <h2>1. Introduction</h2>
            <p>Welcome to Tesio Energy ("we," "us," or "our"). Your privacy is important to us. This Privacy Policy explains how we handle any information you provide to us when you visit our website (the "Site").</p>
          </section>

          <section>
            <h2>2. Information We Do Not Collect</h2>
            <p>We want to reassure you that we do not collect any personal information from users of our Site. We do not collect names, email addresses, or any other identifiable information.</p>
          </section>

          <section>
            <h2>3. Cookies and Tracking Technologies</h2>
            <p>Our Site does not use cookies or other tracking technologies. We do not track your activities across the internet or collect any data related to your use of our Site.</p>
          </section>

          <section>
            <h2>4. Third-Party Links</h2>
            <p>Our Site may contain links to third-party websites. We are not responsible for the privacy practices or the content of those external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
          </section>

          <section>
            <h2>5. Security</h2>
            <p>While we do not collect personal information, we are committed to protecting the information that is collected through the Site. We implement reasonable security measures to safeguard any data that is inadvertently gathered.</p>
          </section>

          <section>
            <h2>6. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices. We will post any updates on this page with an updated effective date.</p>
          </section>

          <section>
            <h2>7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@tesioenergy.com">info@tesioenergy.com</a>.</p>
          </section>

          <section>
            <h2>8. Consent</h2>
            <p>By using our Site, you consent to our Privacy Policy.</p>
          </section>

          <p className="privacy-thanks">Thank you for visiting Tesio Energy.</p>
        </div>

        <a href="/" className="privacy-back">← Back to Home</a>
      </div>
    </main>
  );
}