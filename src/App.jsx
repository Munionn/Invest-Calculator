import Header from "./components/Header.jsx"
import InputInfo from "./components/InputInfo.jsx"
import Result from "./components/Result.jsx";
import { useState } from "react";
function App() {
  const [input, changeInput] = useState(
    {
      initialInvestment: 5000,
      annualInvestment: 60000,
      expectedReturn: 100,
      duration: 5
    }
  );
  let validInput = input.duration >=1;
  function HandleChanges(symbol, newValue){
    changeInput(
      previousInfo => {
        return {
          ...previousInfo,
          [symbol] : +newValue,
        };
      }
    );  
    
  }
  return (
    <>
    <Header></Header>
    <InputInfo input={input} onChange={HandleChanges}></InputInfo>
    {validInput ? <Result input={input}/> : <p className="center">Enter duration more or equal 1</p>}
    </>
    
  )
}

export default App
