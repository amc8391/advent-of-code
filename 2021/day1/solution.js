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
}

const readInput = inputPath => {
    return fs.readFileSync(inputPath, 'utf-8').split('\n').map(depth => parseInt(depth));
}

const main = () => {
    const inputDepths = readInput(INPUT_PATH);
    console.log('Number of depth increases: ', countDepthIncreases(inputDepths));
}

main();
