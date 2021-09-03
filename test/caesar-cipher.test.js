import caesarCipher from '../js/caesar-cipher';

test('Works with single letter', () => {
    expect(caesarCipher('z', 4))
        .toBe('d');
});

test('Shift by 0', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 0))
        .toBe('abcdefghijklmnopqrstuvwxyz');
});

test('Shift by 13 / ROT13', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 13))
        .toBe('nopqrstuvwxyzabcdefghijklm');
});

test('Works with punctuation', () => {
    expect(caesarCipher('Hello, World!', 5))
        .toBe('Mjqqt, Btwqi!');
});
