import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: '',
    operation: '',
  });

  const clickHandler = (event) => {
    const buttonName = event.target.id;
    const { total, next, operation } = calculate(state, buttonName);
    if (next === null && total === null) {
      setState({ next, total: '0', operation });
    } else {
      setState({ next, total, operation });
    }
  };

  return (
    <div className="inside--calculator">
      <p>Let&apos;s do some math!</p>
      <div className="main--container">
        <div className="display--panel">{state.next || state.total || '0'}</div>
        <button onClick={clickHandler} id="AC" type="button" className="ac--btn grey">AC</button>
        <button onClick={clickHandler} id="+/-" type="button" className="add-sub grey">+/-</button>
        <button onClick={clickHandler} id="%" type="button" className="modular grey">%</button>
        <button onClick={clickHandler} id="÷" type="button" className="divi calc">÷</button>
        <button onClick={clickHandler} id="7" type="button" className="num7 grey">7</button>
        <button onClick={clickHandler} id="8" type="button" className="num8 grey">8</button>
        <button onClick={clickHandler} id="9" type="button" className="num9 grey">9</button>
        <button onClick={clickHandler} id="x" type="button" className="times calc">x</button>
        <button onClick={clickHandler} id="4" type="button" className="num4 grey">4</button>
        <button onClick={clickHandler} id="5" type="button" className="num5 grey">5</button>
        <button onClick={clickHandler} id="6" type="button" className="num6 grey">6</button>
        <button onClick={clickHandler} id="-" type="button" className="minus calc">-</button>
        <button onClick={clickHandler} id="1" type="button" className="num1 grey">1</button>
        <button onClick={clickHandler} id="2" type="button" className="num2 grey">2</button>
        <button onClick={clickHandler} id="3" type="button" className="num3 grey">3</button>
        <button onClick={clickHandler} id="+" type="button" className="plus calc">+</button>
        <button onClick={clickHandler} id="0" type="button" className="num0 grey">0</button>
        <button onClick={clickHandler} id="." type="button" className="point grey">.</button>
        <button onClick={clickHandler} id="=" type="button" className="equal calc">=</button>
      </div>
    </div>
  );
};

export default Calculator;
