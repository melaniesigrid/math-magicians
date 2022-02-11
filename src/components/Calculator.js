import React, { useState, useEffect } from 'react';
import './calculator.css';
import CalcButton from './buttons';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [totals, setTotals] = useState({});
  useEffect(() => {
    setTotals({
      total: 0,
      next: null,
      operation: null,
    });
  }, []);

  const handleClick = (event) => {
    setTotals(calculate(totals, event.target.textContent));
  }

  return (
    <div className="calculator-container">
      <div className="display" id="display">
        {totals.total}
        {totals.operation}
        {totals.next}
      </div>
      <div className="button-grid">
        <CalcButton myFunc={handleClick} buttonName="AC" buttonClasses="btn clear" id="clear" />
        <CalcButton myFunc={handleClick} buttonName="+/-" buttonClasses="btn plusMinus" id="plus-minus" />
        <CalcButton myFunc={handleClick} buttonName="%" buttonClasses="btn percent" id="percent" />
        <CalcButton myFunc={handleClick} buttonName="÷" buttonClasses="btn divide orange" id="divide" />
        <CalcButton myFunc={handleClick} buttonName="7" buttonClasses="btn seven" id="seven" />
        <CalcButton myFunc={handleClick} buttonName="8" buttonClasses="btn eight" id="eight" />
        <CalcButton myFunc={handleClick} buttonName="9" buttonClasses="btn nine" id="nine" />
        <CalcButton myFunc={handleClick} buttonName="x" buttonClasses="btn multiply orange" id="multiply" />
        <CalcButton myFunc={handleClick} buttonName="4" buttonClasses="btn four" id="four" />
        <CalcButton myFunc={handleClick} buttonName="5" buttonClasses="btn five" id="five" />
        <CalcButton myFunc={handleClick} buttonName="6" buttonClasses="btn six" id="six" />
        <CalcButton myFunc={handleClick} buttonName="-" buttonClasses="btn subtract orange" id="subtract" />
        <CalcButton myFunc={handleClick} buttonName="1" buttonClasses="btn one" id="one" />
        <CalcButton myFunc={handleClick} buttonName="2" buttonClasses="btn two" id="two" />
        <CalcButton myFunc={handleClick} buttonName="3" buttonClasses="btn three" id="three" />
        <CalcButton myFunc={handleClick} buttonName="+" buttonClasses="btn plus orange" id="add" />
      </div>
      <div className="bottom-container">
        <CalcButton myFunc={handleClick} buttonName="0" buttonClasses="btn zero" id="zero" />
        <CalcButton myFunc={handleClick} buttonName="." buttonClasses="btn decimal" id="decimal" />
        <CalcButton myFunc={handleClick} buttonName="=" buttonClasses="btn equals orange" id="equals" />
      </div>
    </div>
  );
}

export default Calculator;
