

export default function InputInfo({input,onChange}){
 
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required value={input.initialInvestment}
          onChange={(event)=>onChange("IntialInvest", event.target.value)}/>
        </p>
        <p>
        <label>Annual Investment</label>
        <input type="number" required value={input.annualInvestment}
        onChange={(event)=>onChange("AnnuanInvst", event.target.value)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required value={input.expectedReturn}
          onChange={(event)=>onChange("ExpectedRet", event.target.value)}/>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required value={input.duration}
          onChange={(event)=>onChange("Duration", event.target.value)}/>
        </p>
      </div>
    </section>
  );
}