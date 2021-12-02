const fs = require('fs');

const INPUT_PATH = './day2/input.txt';

const movementConstants = {
    'forward': {
        axis: 0,
        multiplier: 1
    },
    'down': {
        axis: 1,
        multiplier: 1
    },
    'up': {
        axis: 1,
        multiplier: -1
    }
};


const moveSpace = (currentCoordinates, direction, distance) => {
    // console.log(currentCoordinates, direction, distance);
    const resolvedDir = movementConstants[direction];
    currentCoordinates[resolvedDir.axis] += resolvedDir.multiplier * distance;
    
    // Check if submarine is approaching surface
    if (currentCoordinates[1] < 0) {
        // Submarines can't fly :)
        currentCoordinates[1] = 0;
    }
    
    return currentCoordinates;
};

const pilotSubmarine = inputInstructions => {
    let currentCoordinates = [0, 0];
    
    inputInstructions.forEach(instr => 
        currentCoordinates = moveSpace(currentCoordinates, instr.direction, instr.distance)
    );
    
    return currentCoordinates;
};

const readInput = inputPath => {
    return fs.readFileSync(inputPath, 'utf-8')
        .split('\n')
        .map(instruction => ({
            direction: instruction.split(' ')[0],
            distance: parseInt(instruction.split(' ')[1])
        }));
};

const main = () => {
    const inputInstructions = readInput(INPUT_PATH);
    const endCoordinates = pilotSubmarine(inputInstructions);

    console.log('End Coordinates: ', endCoordinates);
    console.log('End Coordinates (multiplied): ', endCoordinates[0] * endCoordinates[1]);
};

module.exports = {
    main
};
