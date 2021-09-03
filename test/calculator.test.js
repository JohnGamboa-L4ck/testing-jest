import calculator from '../js/calculator';

test('Normal Addition', () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test('Normal Subtraction', () => {
    expect(calculator.subtract(2, 2)).toBe(0);
});

test('Normal Multiplication', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
});

test('Normal Division', () => {
    expect(calculator.divide(2, 1)).toBe(2);
});

test('Divided by 0 returns undefined', () => {
    expect(calculator.divide(2, 0)).toBeUndefined();
});

test('Returns NaN if there Adding with String', () => {
    expect(calculator.add(2, 'a')).toBeNaN();
});

test('Returns NaN if there Subtracting with String', () => {
    expect(calculator.subtract(2, 'a')).toBeNaN();
});

test('Returns NaN if there Multiplying with String', () => {
    expect(calculator.multiply('b', 'a')).toBeNaN();
});

test('Returns NaN if there Dividing with String', () => {
    expect(calculator.divide('a', 5)).toBeNaN();
});
