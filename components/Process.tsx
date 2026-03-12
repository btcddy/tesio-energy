import './Process.css';

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process-header anim">
        <div className="sec-label">Our Approach</div>
        <h2 className="sec-h2">Four Steps to Unlock Value</h2>
      </div>
      <div className="steps-grid">
        <div className="step-card anim">
          <div className="step-num">1</div>
          <h3>Portfolio Assessment</h3>
          <p>Identify high-value assets best suited for bundled solar + roofing. Conduct early structural assessments.</p>
        </div>
        <div className="step-card urgent anim">
          <div className="step-num">2</div>
          <h3>Commit by Deadline</h3>
          <p>Sign contracts to safe harbor 40% Tax Credits for 4 years and maximize total benefits.</p>
          <div className="step-deadline">⚡ Deadline: July 2, 2026</div>
        </div>
        <div className="step-card anim">
          <div className="step-num">3</div>
          <h3>Launch Project</h3>
          <p>Commence detailed electrical and structural engineering to satisfy tax credit requirements.</p>
        </div>
        <div className="step-card anim">
          <div className="step-num">4</div>
          <h3>Long-term Partnership</h3>
          <p>Included warranties, monitoring, and maintenance ensure value continues for decades.</p>
        </div>
      </div>
    </section>
  );
}