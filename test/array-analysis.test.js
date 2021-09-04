import analyze from '../js/array-analysis';

test('Check average', () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).average)
        .toBe(4);
});

test('Check minimum', () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).min)
        .toBe(1);
});

test('Check maximum', () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).max)
        .toBe(8);
});

test('Check length', () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).length)
        .toBe(6);
});

test('Check whole object', () => {
    expect(analyze([1, 8, 3, 4, 2, 6]))
        .toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        });
});
