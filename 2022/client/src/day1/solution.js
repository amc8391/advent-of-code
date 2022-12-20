const main = (input) => {
    const elfInventories = parseInput(input);
    const sortedElves = sortElves(elfInventories);

    return {
        part1: sortedElves[0].totalCalories,
        part2: sortedElves.slice(0,3).reduce((accumulator, currentval) => accumulator + currentval.totalCalories, 0)
    };
}

const sortElves = (elfInventories) => {
    const elfObjs = elfInventories.map(inv => ({
        inventory: inv,
        totalCalories: inv.reduce((accumulator, currentval) => accumulator + currentval, 0)
    }));
    return elfObjs.sort((a, b) => b.totalCalories -a.totalCalories )
}

const parseInput = (input) => input
    .split('\n\n') // each elf has 2 \ns between their inventories
    .map(inv => inv.split('\n').map(cal => parseInt(cal))); // Remaining \ns should split the calories of each item

module.exports = {
    main
};
