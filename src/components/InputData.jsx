import { useState } from "react";

export default function InputData({initialData,handleChange}) {


    return (

            <div id="user-input">
                <div className="input-group">
                <div >
                <label htmlFor="investment-amount">Initial Investment:</label>
                <input type="number"  value={initialData.initialInvestment} onChange={(event)=> handleChange('initialInvestment',event.target.value)} />
                </div>

                <div id="input-group">
                <label htmlFor="investment-amount">Annual Investment:</label>
                <input type="number"  value={initialData.annualInvestment} onChange={(event)=> handleChange('annualInvestment',event.target.value)} />
                </div>
            </div>
            <div className="input-group">
                <div id="input-group">
                <label htmlFor="investment-amount">Expected return:</label>
                <input type="number"  value={initialData.expectedReturn} onChange={(event)=> handleChange('expectedReturn',event.target.value)}/>
                </div>

                <div id="input-group">
                <label htmlFor="investment-amount">duration :</label>
                <input type="number" value={initialData.duration} onChange={(event)=> handleChange('duration',event.target.value)} />
                </div>
                </div>
            </div>
    );
}