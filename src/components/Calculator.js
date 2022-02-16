/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div className="main--container">
        <div className="display--panel">0</div>
        <button type="button" className="ac--btn grey">AC</button>
        <button type="button" className="add-sub grey">+/-</button>
        <button type="button" className="modular grey">%</button>
        <button type="button" className="divi calc">/</button>
        <button type="button" className="num7 grey">7</button>
        <button type="button" className="num8 grey">8</button>
        <button type="button" className="num9 grey">9</button>
        <button type="button" className="times calc">x</button>
        <button type="button" className="num4 grey">4</button>
        <button type="button" className="num5 grey">5</button>
        <button type="button" className="num6 grey">6</button>
        <button type="button" className="minus calc">-</button>
        <button type="button" className="num1 grey">1</button>
        <button type="button" className="num2 grey">2</button>
        <button type="button" className="num3 grey">3</button>
        <button type="button" className="plus calc">+</button>
        <button type="button" className="num0 grey">0</button>
        <button type="button" className="point grey">.</button>
        <button type="button" className="equal calc">=</button>
      </div>
    );
  }
}

export default Calculator;
