const fs = require('fs');

const INPUT_PATH = './day2/input.txt';

const movementConstants = {
    'forward': {
        axis: 0,
        multiplier: 1,
        aimModifier: false
    },
    'down': {
        axis: 1,
        multiplier: 1,
        aimModifier: true
    },
    'up': {
        axis: 1,
        multiplier: -1,
        aimModifier: true
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

const pilotSimpleSubmarine = inputInstructions => {
    let currentCoordinates = [0, 0]; // X, Y
    
    inputInstructions.forEach(instr => 
        currentCoordinates = moveSpace(currentCoordinates, instr.direction, instr.distance)
    );
    
    return currentCoordinates;
};

const moveSpaceAimed = (currentCoordinates, instruction) => {
    const resolvedDir = movementConstants[instruction.direction];
    
    if (resolvedDir.aimModifier) {
        currentCoordinates.aim += instruction.distance * resolvedDir.multiplier;
    } else {
        currentCoordinates.x += instruction.distance;
        currentCoordinates.y += instruction.distance * currentCoordinates.aim;
    }
    
    // Check if submarine is approaching surface
    if (currentCoordinates.y < 0) {
        // Submarines can't fly :)
        currentCoordinates.y = 0;
    }
    
    return currentCoordinates;
};

const pilotAimedSubmarine = inputInstructions => {
    let currentCoordinates = {
        x: 0,
        y: 0,
        aim: 0
    };
    
    inputInstructions.forEach(instr => 
        currentCoordinates = moveSpaceAimed(currentCoordinates, instr)
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
    const endCoordinates = pilotSimpleSubmarine(inputInstructions);

    console.log('End Simple Coordinates: ', endCoordinates);
    console.log('End Simple Coordinates (multiplied): ', endCoordinates[0] * endCoordinates[1]);


    const endAimedCoordinates = pilotAimedSubmarine(inputInstructions);
    console.log('End Aimed Coordinates: ', endAimedCoordinates);
    console.log('End Aimed Coordinates (multiplied): ', endAimedCoordinates.x * endAimedCoordinates.y);
};

module.exports = {
    main
};

main();
