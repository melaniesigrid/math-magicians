import React from 'react';
import './calculator.css';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0 };
  }
  render () {
    return (
      <div className="calculator-container">
        <div className="display" id="display"><p>{ this.state.total }</p></div>
        <div className="button-grid">
          <button type="button" className="btn clear" id="clear">AC</button>
          <button type="button" className="btn plusMinus" id="plus-minus">+/-</button>
          <button type="button" className="btn percent" id="percent">%</button>
          <button type="button" className="btn divide orange" id="divide">÷</button>
          <button type="button" className="btn seven" id="seven">7</button>
          <button type="button" className="btn eight" id="eight">8</button>
          <button type="button" className="btn nine" id="nine">9</button>
          <button type="button" className="btn multiply orange" id="multiply">x</button>
          <button type="button" className="btn four" id="four">4</button>
          <button type="button" className="btn five" id="five">5</button>
          <button type="button" className="btn six" id="six">6</button>
          <button type="button" className="btn subtract orange" id="subtract">-</button>
          <button type="button" className="btn one" id="one">1</button>
          <button type="button" className="btn two" id="two">2</button>
          <button type="button" className="btn three" id="three">3</button>
          <button type="button" className="btn plus orange" id="add">+</button>
        </div>
        <div className="bottom-container">
          <button type="button" className="btn zero" id="zero">0</button>
          <button type="button" className="btn decimal" id="decimal">.</button>
          <button type="button" className="btn equals orange" id="equals">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
