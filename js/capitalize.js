const capitalize = (string) => {
    if (string === undefined) return undefined;

    const array = string.split(' ');
    const mappedArray = array
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

    return mappedArray.join(' ');
};

export default capitalize;
