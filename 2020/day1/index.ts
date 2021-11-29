import * as fs from 'fs';

const INPUT_PATH = 'day1/input.txt';

const SUM_TARGET = 2020;

function readInput(inputPath: string) {
    const inputs = fs.readFileSync(INPUT_PATH, 'utf-8');
    return inputs.split('\n').map(item => parseInt(item));
}

function main() {
    const expenses = readInput(INPUT_PATH);
    
    const checkedExpenses = new Map<number, number>();
    
    for (const expense of expenses) {
        if (checkedExpenses.get(SUM_TARGET - expense) !== undefined) {
            console.log('Found a pair adding up to ', SUM_TARGET);
            console.log(expense, SUM_TARGET - expense);
            console.log('Multiplying them together: ', expense * (SUM_TARGET - expense))
        } else {
            checkedExpenses.set(expense, SUM_TARGET - expense);
        }
    }
}

main();
