import calculate from "../logic/calculate";

let inputs = {
    total: null,
    next: null,
    operation: null
}

describe('Calculator functions properly', () => {
    it('Calculator adds properly', () => {
        inputs = {
            total: 2,
            next: 4,
            operation: '+',
        }
       const  {total} = calculate(inputs, '=');
       expect(total).toBe('6');
    })

    it('Calculator subtracts properly', () => {
        inputs = {
            total: 2,
            next: 4,
            operation: '-',
        }
       const  {total} = calculate(inputs, '=');
       expect(total).toBe('-2');
    })

    it('Calculator multiplies properly', () => {
        inputs = {
            total: 2,
            next: 4,
            operation: 'x',
        }
       const  {total} = calculate(inputs, '=');
       expect(total).toBe('8');
    })

    it('Calculator divides properly', () => {
        inputs = {
            total: 2,
            next: 4,
            operation: '÷',
        }
       const  {total} = calculate(inputs, '=');
       expect(total).toBe('0.5');
    })

    it('Calculator modulus works properly', () => {
        inputs = {
            total: 2,
            next: 4,
            operation: '%',
        }
       const  {total} = calculate(inputs, '=');
       expect(total).toBe('2');
    })

    it('Calculator AC works properly', () => {
        inputs = {
            total: 2,
            next: 4,
            operation: '+',
        }
       const next = calculate(inputs, 'AC');
       expect(next).toEqual({
           total: null,
           next: null,
           operation: null,
       });
    })

    it('Calculator adds properly', () => {
        inputs = {
            total: 2,
            next: 4,
            operation: '-',
        }
       const  {next} = calculate(inputs, '+/-');
       expect(next).toBe('-4');
    })
})