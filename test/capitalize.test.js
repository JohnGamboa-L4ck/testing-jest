import capitalize from '../js/capitalize';

test('Capitalize the first Letter', () => {
    expect(capitalize('visual'))
        .toBe('Visual');
});

test('Capitalize all the first letter', () => {
    expect(capitalize('visual studio code'))
        .toBe('Visual Studio Code');
});

test('return undefined if string is undefined', () => {
    expect(capitalize())
        .toBeUndefined();
});
