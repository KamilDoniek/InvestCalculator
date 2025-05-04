import CalculatorData from './components/CalculatorData';
import  Header  from './components/header';
import InputData from './components/InputData';
import { useState } from "react";
function App() {
  const [initialData,setInitialData] =  useState( {
    initialInvestment:10000,
    annualInvestment : 1200,
    expectedReturn :6,
    duration:12
    });
    function handleChange(InputIdentifier,value) {
      setInitialData((prevData) => ({
          ...prevData,
          [InputIdentifier]: +value,
      }));
  }
  return (
    <>
    <Header></Header>
    <InputData initialData={initialData} handleChange={handleChange}></InputData>
    <CalculatorData InputData={initialData}></CalculatorData>
    </>

  )
}

export default App
