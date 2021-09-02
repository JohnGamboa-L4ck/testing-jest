import reverseString from '../js/reverse-string';

test('Reverse a single word', () => {
    expect(reverseString('visual')).toBe('lausiv');
});

test('Reverse the whole string', () => {
    expect(reverseString('visual studio code'))
        .toBe('edoc oiduts lausiv');
});

test("Returns 'falsy'", () => {
    expect(reverseString(''))
        .toBe('falsy');
});

test('Blocks falsy but allow number 0', () => {
    expect(reverseString(0))
        .toBe('0');
});
