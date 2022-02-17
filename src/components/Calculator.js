/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '0',
      next: '',
      operation: '',
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    const buttonName = event.target.id;
    const { total, next, operation } = calculate(this.state, buttonName);

    if (next === null && total === null) {
      this.setState({ next, total: '0', operation });
    } else {
      this.setState({ next, total, operation });
    }
  }

  render() {
    return (
      <div className="main--container">
        <div className="display--panel">{this.state.next || this.state.total || '0'}</div>
        <button onClick={this.clickHandler} id="AC" type="button" className="ac--btn grey">AC</button>
        <button onClick={this.clickHandler} id="+/-" type="button" className="add-sub grey">+/-</button>
        <button onClick={this.clickHandler} id="%" type="button" className="modular grey">%</button>
        <button onClick={this.clickHandler} id="÷" type="button" className="divi calc">÷</button>
        <button onClick={this.clickHandler} id="7" type="button" className="num7 grey">7</button>
        <button onClick={this.clickHandler} id="8" type="button" className="num8 grey">8</button>
        <button onClick={this.clickHandler} id="9" type="button" className="num9 grey">9</button>
        <button onClick={this.clickHandler} id="x" type="button" className="times calc">x</button>
        <button onClick={this.clickHandler} id="4" type="button" className="num4 grey">4</button>
        <button onClick={this.clickHandler} id="5" type="button" className="num5 grey">5</button>
        <button onClick={this.clickHandler} id="6" type="button" className="num6 grey">6</button>
        <button onClick={this.clickHandler} id="-" type="button" className="minus calc">-</button>
        <button onClick={this.clickHandler} id="1" type="button" className="num1 grey">1</button>
        <button onClick={this.clickHandler} id="2" type="button" className="num2 grey">2</button>
        <button onClick={this.clickHandler} id="3" type="button" className="num3 grey">3</button>
        <button onClick={this.clickHandler} id="+" type="button" className="plus calc">+</button>
        <button onClick={this.clickHandler} id="0" type="button" className="num0 grey">0</button>
        <button onClick={this.clickHandler} id="." type="button" className="point grey">.</button>
        <button onClick={this.clickHandler} id="=" type="button" className="equal calc">=</button>
      </div>
    );
  }
}

export default Calculator;
