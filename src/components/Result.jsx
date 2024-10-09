import { calculateInvestmentResults } from "../util/investment";
export default function Result({input}){
  const resultOutput = calculateInvestmentResults(input);
  return(
    <div id="result">
      <p>some Out put </p>
    </div>
  );
}