
const fs = require('fs');

const utils = require('./utils');
const part1 = require('./solution-part-1');
const part2 = require('./solution-part-2');

const INPUT_PATH = './2021/day3/input.txt';

const readInput = inputPath => {
    const lines = fs.readFileSync(inputPath, 'utf-8').split('\n');
    return lines.map(line =>
        line.split('').map(num => parseInt(num))
    );
};

const main = () => {
    const inputReports = readInput(INPUT_PATH);

    const transposedReports = utils.transpose2dArray(inputReports);
    const colFrequencyMaps = transposedReports.map(utils.get1dArrayFrequencyMap);
    console.log('Frequency Maps:', colFrequencyMaps);

    const epsilonRate = part1.getEpsilonRate(colFrequencyMaps);
    const epsilonDec = utils.binStringToDec(epsilonRate);
    console.log('Epsilon Rate (Bin):', epsilonRate);
    console.log('Epsilon Rate (Dec):', epsilonDec);

    const gammaRate = part1.getGammaRate(epsilonRate);
    const gammaDec = utils.binStringToDec(gammaRate);
    console.log('Gamma Rate (Bin):', gammaRate);
    console.log('Gamma Rate (Dec):', gammaDec);

    console.log('Epsilon * Gamma:', epsilonDec * gammaDec);
    
    const oxygenRating = part2.getOxygenRating(inputReports);
    const oxygenRatingDec = utils.binStringToDec(oxygenRating);
    console.log('Oxygen Generator Rating (Bin):', oxygenRating);
    console.log('Oxygen Generator Rating (Dec):', oxygenRatingDec);

    const co2Rating = part2.getCo2Rating(inputReports);
    const co2RatingDec = utils.binStringToDec(co2Rating);
    console.log('CO2 Scrubber Rating (Bin):', co2Rating);
    console.log('CO2 Scrubber Rating (Dec):', co2RatingDec);

    console.log('Oxygen * CO2:', oxygenRatingDec * co2RatingDec);
};

module.exports = {
    main
};

main();
