
const fs = require('fs');

const INPUT_PATH = './2021/day3/input.txt';

const readInput = inputPath => {
    const lines = fs.readFileSync(inputPath, 'utf-8').split('\n');
    return lines.map(line =>
        line.split('').map(num => parseInt(num))
    );
};

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
}

const getEpsilonRate = transposedReports => {
    const columnsToRates = transposedReports.map(get1dArrayFrequencyMap);

    console.log('Frequency Maps:', columnsToRates);

    const mostFreqVals = columnsToRates.map(frequencies => 
        Object.entries(frequencies)
            .sort((freq1, freq2) => freq1[1] - freq2[1])
            [0][0]
    );

    return mostFreqVals.join('');
};

const getGammaRate = epsilonRate => {
    return epsilonRate.split('').map(char => {
        const inverseMap = {
            '0': 1,
            '1': 0
        };
        return inverseMap[char];
    }).join('');
}

const binStringToDec = binString => {
    let decInt = 0;
    binString.split('').forEach((char, charIdx) => {
            const exponent = (binString.length - 1) - charIdx;
            const binMultiplier = parseInt(char);
            const toAdd =  binMultiplier * Math.pow(binMultiplier * 2, exponent);
            console.log('char: ', char, 'index: ', charIdx, 'exponent: ', exponent, 'result', toAdd);
            decInt += toAdd;
        }
    );
    return decInt;
}

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

const main = () => {
    const inputReports = readInput(INPUT_PATH);

    // console.log(inputReports);
    // console.log('Transposed input', transpose2dArray(inputReports));
    const transposedReports = transpose2dArray(inputReports);

    const epsilonRate = getEpsilonRate(transposedReports);
    const epsilonDec = binStringToDec(epsilonRate);
    console.log('Epsilon Rate (Bin):', epsilonRate);
    console.log('Epsilon Rate (Dec)', epsilonDec);

    const gammaRate = getGammaRate(epsilonRate);
    const gammaDec = binStringToDec(gammaRate);
    console.log('Gamma Rate (Bin):', gammaRate);
    console.log('Gamma Rate (Dec)', gammaDec);

    console.log('Multiplied: ', epsilonDec * gammaDec);
};

module.exports = {
    main
};

main();
