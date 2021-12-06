const transpose2dArray = grid => {
    const transposedGrid = [];

    const colCount = grid[0].length;
    for (let i = 0; i < colCount; i++) {
        transposedGrid.push([]);
    }

    grid.forEach((row) => {
        row.forEach((cell, colIdx) => {
            transposedGrid[colIdx].push(cell)
        });
    });
    return transposedGrid;
};

const get1dArrayFrequencyMap = inputValues => {
    const freqMap = {};
    inputValues.forEach(val => {
        if (freqMap[val] === undefined) {
            freqMap[val] = 1;
        } else {
            freqMap[val] += 1;
        }
    });
    return freqMap;
};

const binStringToDec = binString => {
    let decInt = 0;
    binString.split('').forEach((char, charIdx) => {
            const exponent = (binString.length - 1) - charIdx;
            const binMultiplier = parseInt(char);
            const toAdd =  binMultiplier * Math.pow(binMultiplier * 2, exponent);
            decInt += toAdd;
        }
    );
    return decInt;
};

module.exports = {
    transpose2dArray,
    get1dArrayFrequencyMap,
    binStringToDec
};
