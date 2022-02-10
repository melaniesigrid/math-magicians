import React from 'react';
import './calculator.css';
import CalcButton from './buttons'
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.setState((state) => calculate(state, event.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-container">
        <div className="display" id="display">
          {total}
          {operation}
          {next}
        </div>
        <div className="button-grid">
          <CalcButton onClick={ this.handleClick } buttonName="AC" buttonClasses="btn clear" id="clear" />
          <CalcButton onClick={ this.handleClick } buttonName="+/-" buttonClasses="btn plusMinus" id="plus-minus" />
          <CalcButton onClick={ this.handleClick } buttonName="%" buttonClasses="btn percent" id="percent" />
          <CalcButton onClick={ this.handleClick } buttonName="÷" buttonClasses="btn divide orange" id="divide" />
          <CalcButton onClick={ this.handleClick } buttonName="7" buttonClasses="btn seven" id="seven">7</CalcButton>
          <CalcButton onClick={ this.handleClick } buttonName="8" buttonClasses="btn eight" id="eight" />
          <CalcButton onClick={ this.handleClick } buttonName="9" buttonClasses="btn nine" id="nine" />
          <CalcButton onClick={ this.handleClick } buttonName="x" buttonClasses="btn multiply orange" id="multiply" />
          <CalcButton onClick={ this.handleClick } buttonName="4" buttonClasses="btn four" id="four" />
          <CalcButton onClick={ this.handleClick } buttonName="5" buttonClasses="btn five" id="five" />
          <CalcButton onClick={ this.handleClick } buttonName="6" buttonClasses="btn six" id="six" />
          <CalcButton onClick={ this.handleClick  } buttonName="-" buttonClasses="btn subtract orange" id="subtract" />
          <CalcButton onClick={ this.handleClick } buttonName="1" buttonClasses="btn one" id="one" />
          <CalcButton onClick={ this.handleClick } buttonName="2" buttonClasses="btn two" id="two" />
          <CalcButton onClick={ this.handleClick } buttonName="3" buttonClasses="btn three" id="three" />
          <CalcButton onClick={ this.handleClick } buttonName="+" buttonClasses="btn plus orange" id="add" />
        </div>
        <div className="bottom-container">
          <CalcButton onClick={ this.handleClick } buttonName="0" buttonClasses="btn zero" id="zero" />
          <CalcButton onClick={ this.handleClick } buttonName="." buttonClasses="btn decimal" id="decimal" />
          <CalcButton onClick={ this.handleClick } buttonName="=" buttonClasses="btn equals orange" id="equals" />
        </div>
      </div>
    );
  }
}

export default Calculator;
