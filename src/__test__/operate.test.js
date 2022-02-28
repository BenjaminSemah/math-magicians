import operate from '../logic/operate';

const assert = require('assert');

describe('operate function works properly', () => {
  it('operate(1, 3, +) returns a string', () => {
    const firstNum = 1;
    const secondNum = 3;
    const operation = '+';
    const callOperate = operate(firstNum, secondNum, operation);
    assert(typeof callOperate === 'string');
  });

  it('operate(1, 3, +) returns a string of 4', () => {
    const firstNum = 1;
    const secondNum = 3;
    const operation = '+';
    const callOperate = operate(firstNum, secondNum, operation);
    expect(callOperate).toEqual('4');
  });

  it('operate(1, 3, -) should return a string of -2', () => {
    const firstNum = 1;
    const secondNum = 3;
    const operation = '-';
    const callOperate = operate(firstNum, secondNum, operation);
    expect(callOperate).toEqual('-2');
  });

  it('operate(1, 3, x) should return a string of 3', () => {
    const firstNum = 1;
    const secondNum = 3;
    const operation = 'x';
    const callOperate = operate(firstNum, secondNum, operation);
    expect(callOperate).toEqual('3');
  });

  it('operate(6, 3, x) should return a string of 2', () => {
    const firstNum = 6;
    const secondNum = 3;
    const operation = '÷';
    const callOperate = operate(firstNum, secondNum, operation);
    expect(callOperate).toEqual('2');
  });

  it('operate(6, 3, %) should return a string of 0', () => {
    const firstNum = 6;
    const secondNum = 3;
    const operation = '%';
    const callOperate = operate(firstNum, secondNum, operation);
    expect(callOperate).toEqual('0');
  });

  it('operate(3, 0, ÷) should return Cant divide by 0.', () => {
    const firstNum = 3;
    const secondNum = 0;
    const operation = '÷';
    const callOperate = operate(firstNum, secondNum, operation);
    expect(callOperate).toEqual("Can't divide by 0.");
  });

  it("operate(3, 0, %) should return Can't find modulo as can't divide by 0.", () => {
    const firstNum = 3;
    const secondNum = 0;
    const operation = '%';
    const callOperate = operate(firstNum, secondNum, operation);
    expect(callOperate).toEqual("Can't find modulo as can't divide by 0.");
  });

  it("operate(3, 1, $) should return Can't find modulo as can't divide by 0.", () => {
    const firstNum = 3;
    const secondNum = 1;
    const operation = '$';
    expect(() => operate(firstNum, secondNum, operation)).toThrow('Unknown operation \'$\'');
  });
});
