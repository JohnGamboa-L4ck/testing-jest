const calculator = (() => {
    const isString = (fNum, sNum) => {
        if ((typeof fNum !== 'number') || (typeof sNum !== 'number')) {
            return true;
        }

        return false;
    };

    const add = (fNum, sNum) => {
        if (isString(fNum, sNum)) return NaN;

        return fNum + sNum;
    };

    const subtract = (fNum, sNum) => {
        if (isString(fNum, sNum)) return NaN;

        return fNum - sNum;
    };

    const multiply = (fNum, sNum) => {
        if (isString(fNum, sNum)) return NaN;

        return fNum * sNum;
    };

    const divide = (fNum, sNum) => {
        if (isString(fNum, sNum)) return NaN;

        let answer = fNum / sNum;

        if (answer === Infinity) {
            answer = undefined;
        }

        return answer;
    };

    return {
        add, subtract, multiply, divide,
    };
})();

export default calculator;
