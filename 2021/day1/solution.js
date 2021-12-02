const fs = require('fs');

const INPUT_PATH = './day1/input.txt';

const countDepthIncreases = inputDepths => {
    let increaseCount = 0;
    let previousDepth = undefined;
    
    inputDepths.forEach(depth => {
        if (previousDepth < depth) {
            increaseCount += 1;
        }
        previousDepth = depth;
    });
    
    return increaseCount;
};

const separateMeasurementWindows = (inputDepths, windowSize) => {
    const windowedValues = [];
    const inputsLength = inputDepths.length;

    let idx = 0;
    while (idx + 2 < inputsLength) {
        const win = inputDepths.slice(idx, idx + windowSize);
        const sum = win.reduce((prev, next) => prev + next);
        // console.debug('window', win);
        // console.debug('window sum', sum);
        windowedValues.push(sum);
        idx += 1;
    }
    
    // console.debug(windowedValues.length);

    return windowedValues;
};

const readInput = inputPath => {
    return fs.readFileSync(inputPath, 'utf-8').split('\n').map(depth => parseInt(depth));
};

const main = () => {
    const inputDepths = readInput(INPUT_PATH);
    console.log('Number of depth increases: ', countDepthIncreases(inputDepths));
    console.log('Number of depth increases (separated with window of size 3): ', countDepthIncreases(separateMeasurementWindows(inputDepths, 3)));
};

main();
