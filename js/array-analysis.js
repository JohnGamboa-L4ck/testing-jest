const analyze = (array) => {
    const sum = array.reduce((accu, curr) => accu + curr, 0);

    return {
        average: sum / array.length,
        min: array.sort((a, b) => a - b)[0],
        max: array.sort((a, b) => b - a)[0],
        length: array.length,
    };
};

export default analyze;
