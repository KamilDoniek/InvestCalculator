import {calculateInvestmentResults , formatter}from '../util/investment';
export default function CalculatorData({InputData}) {
    const results = calculateInvestmentResults(InputData);
    console.log(results);

    return(
    <>
        <table id='result'>
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
               {
               results.map(yearData=>{
                const totalInterest  = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - InputData.initialInvestment;
                const totalAmountInvested =yearData.valueEndOfYear - totalInterest ;
                 return (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                 )
               })}
            </tbody>
        </table>
    </>
    )
}