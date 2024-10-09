import { calculateInvestmentResults, formatter } from "../util/investment";


export default function Result({input}){
  const resultOutput = calculateInvestmentResults(input);
  const initialInvestment = resultOutput[0].valueEndOfYear - resultOutput[0].interest - 
  resultOutput[0].annualInvestment;
  return(
    <table id="result">
      <thead class="center">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest Year</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {resultOutput.map(yearData =>{
        const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
        const totalAmount = yearData.valueEndOfYear - totalInterest;
        return (
        <tr key={yearData.year}>
          <th>{yearData.year}</th>
          <th>{formatter.format(yearData.valueEndOfYear)}</th>
          <th>{formatter.format(yearData.interest)}</th>
          <th>{formatter.format(totalInterest)}</th>
          <th>{formatter.format(totalAmount)}</th>
        </tr>
        )
        })}
      </tbody>
    </table>
    
  );
}