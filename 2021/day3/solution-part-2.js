const utils = require('./utils');

const getOxygenRating = (inputReports) => {
    const bitCriteriaFn = (bitColumn) => {
        const frequencyMap = utils.get1dArrayFrequencyMap(bitColumn);
        // check if both values appear equally
        let equalFrequencies = true;
        let lastFrequency = undefined;
        Object.values(frequencyMap).forEach(freq => {
            if (
                lastFrequency !== undefined &&
                lastFrequency !== freq &&
                equalFrequencies === true
            ) {
                lastFrequency = freq;
                equalFrequencies = false;
            } else {
                lastFrequency = freq;
            }
        });

        if (equalFrequencies) {
            return 1;
        } else {
            return parseInt(Object.entries(frequencyMap).sort((a, b) => b[1] - a[1])[0][0]);
        }
    }
    return getDeviceRating(inputReports, bitCriteriaFn);
}


const getCo2Rating = (inputReports) => {
    const bitCriteriaFn = (bitColumn) => {
        const frequencyMap = utils.get1dArrayFrequencyMap(bitColumn);
        // check if both values appear equally
        let equalFrequencies = true;
        let lastFrequency = undefined;
        Object.values(frequencyMap).forEach(freq => {
            if (
                lastFrequency !== undefined &&
                lastFrequency !== freq &&
                equalFrequencies === true
            ) {
                lastFrequency = freq;
                equalFrequencies = false;
            } else {
                lastFrequency = freq;
            }
        });

        if (equalFrequencies) {
            return 0;
        } else {
            return parseInt(Object.entries(frequencyMap).sort((a, b) => a[1] - b[1])[0][0]);
        }
    }
    return getDeviceRating(inputReports, bitCriteriaFn);
}

const getDeviceRating = (inputReports, bitCriteraFn) => {
    const ratingReports = JSON.parse(JSON.stringify(inputReports));
    let bitIdx = 0;

    while (ratingReports.length > 1) {
        const matchingBit = bitCriteraFn(utils.transpose2dArray(ratingReports)[bitIdx]);

        let rowIdx = 0;

        while (rowIdx < ratingReports.length) {
            if (ratingReports[rowIdx][bitIdx] !== matchingBit) {
                ratingReports.splice(rowIdx, 1);
            } else if (ratingReports !== 1) {
                rowIdx ++;
            } else {
                return ratingReports[rowIdx].join('');
            }
        }

        bitIdx ++;
    }

    return ratingReports[0].join('');
};

module.exports = {
    getOxygenRating,
    getCo2Rating
};
