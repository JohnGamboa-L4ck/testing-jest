// check if uppercase or lowercase
const codeSet = (code) => (code < 97 ? 65 : 97);

// modulo that works with negative numbers
const modulo = (dividend, divisor) => {
    let remainder = dividend % divisor;
    remainder += divisor;
    remainder %= divisor;

    return remainder;
};

const shiftChar = (char, shift) => {
    const code = char.charCodeAt();

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return String.fromCharCode(
            modulo(code + shift - codeSet(code), 26) + codeSet(code),
        );
    }

    return char;
};

const caesarCipher = (string, shift) => string
    .split('')
    .map((char) => shiftChar(char, shift))
    .join('');

export default caesarCipher;
