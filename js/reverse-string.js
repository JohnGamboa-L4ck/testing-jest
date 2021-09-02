const reverseString = (string) => {
    if (!string && string !== 0) return 'falsy';

    const array = string.toString().split(' ').reverse();
    const mappedArray = array
        .map((word) => word.split('').reverse().join(''));

    return mappedArray.join(' ');
};

export default reverseString;
