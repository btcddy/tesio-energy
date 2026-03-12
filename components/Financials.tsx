import './Financials.css';

export default function Financials() {
  return (
    <section className="services" id="financials">
      <div className="fin-header anim">
        <h2 className="sec-h2">$100M Project Example</h2>
        <p className="sec-sub">
          4 Million Sq. Ft. of Existing Roof Retrofitted with FiberTite's Premium Roofing Membrane &amp; a Solar PV System.
        </p>
      </div>
      <div className="fin-grid">
        <div className="fin-box anim">
          <h3>Cash In <span className="tag tag-g">~$162.5M</span></h3>
          <div className="fin-row"><span className="lbl">Project Financing</span><span className="val val-g">$90.0M</span></div>
          <div className="fin-row"><span className="lbl">Bridge Loan</span><span className="val val-g">$10.0M</span></div>
          <div className="fin-row"><span className="lbl">Tax Credits (40% ITC)</span><span className="val val-g">$40.0M</span></div>
          <div className="fin-row"><span className="lbl">Depreciation Benefits</span><span className="val val-g">$16.0M</span></div>
          <div className="fin-row"><span className="lbl">Electricity Income</span><span className="val val-g">$5.5M</span></div>
          <div className="fin-row"><span className="lbl">Maintenance Savings</span><span className="val val-g">$1.0M</span></div>
          <div className="fin-total"><span className="lbl">Total Cash In</span><span className="val val-g">$162.5M</span></div>
        </div>
        <div className="fin-box anim">
          <h3>Cash Out <span className="tag tag-r">~$118.5M</span></h3>
          <div className="fin-row"><span className="lbl">Project Costs</span><span className="val val-r">($100.0M)</span></div>
          <div className="fin-row"><span className="lbl">0% Down Payment</span><span className="val val-r">($11.4M)</span></div>
          <div className="fin-row"><span className="lbl">Financing Interest</span><span className="val val-r">($5.4M)</span></div>
          <div className="fin-row"><span className="lbl">Principal Repayment</span><span className="val val-r">($1.7M)</span></div>
          <div className="fin-total"><span className="lbl">Total Cash Out</span><span className="val val-r">($118.5M)</span></div>
        </div>
      </div>
      <div className="fcf-card anim">
        <div className="fcf-num">$44M</div>
        <div className="fcf-sub">in tax benefits that can be sold</div>
        <p className="fcf-desc">
          By end of Year Two, 35MW is online — activating electricity revenue and tax benefit
          realization. Converting a major maintenance liability into $44M of free cash flow with 0% down.
        </p>
      </div>
    </section>
  );
}