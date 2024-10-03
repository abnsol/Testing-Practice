import {calculator} from './calculator';

test('add',() => {
    expect(calculator.add(1,1)).toBe(2);
});

test('subtract',() => {
    expect(calculator.subtract(1,1)).toBe(0);
});

test('multiply',() => {
    expect(calculator.multiply(1,2)).toBe(2);
});

test('divide',() => {
    expect(calculator.divide(10,2)).toBe(5);
});

test('divideByZero',() => {
    expect(() => calculator.divide(10, 0)).toThrow("Division by zero");
});