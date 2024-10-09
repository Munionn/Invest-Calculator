import Header from "./components/Header.jsx"
import InputInfo from "./components/InputInfo.jsx"
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
  function HandleChanges(symbol, newValue){
    changeInput(
      previousInfo => {
        return {
          ...previousInfo,
          [symbol] : newValue
        };
      }
    );  
    
  }
  return (
    <>
    <Header></Header>
    <InputInfo input={input} onChange={HandleChanges}></InputInfo>
    </>
    
  )
}

export default App
