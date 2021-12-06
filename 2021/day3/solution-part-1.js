const getEpsilonRate = colFrequencyMaps => {
    const leastFreqVals = colFrequencyMaps.map(frequencies => 
        Object.entries(frequencies)
            .sort((freq1, freq2) => freq1[1] - freq2[1])
            [0][0]
    );

    return leastFreqVals.join('');
};

const getGammaRate = epsilonRate => {
    return epsilonRate.split('').map(char => {
        const inverseMap = {
            '0': 1,
            '1': 0
        };
        return inverseMap[char];
    }).join('');
};

module.exports = {
    getEpsilonRate,
    getGammaRate
};
