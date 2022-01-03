const fs = require('fs');

const INPUT_PATH = './day4/input.txt';

class BingoBoard {
    constructor(grid) {
        this.grid = grid;
        this.drawnCoordinates = [];
    }

    drawNumber(drawnNum) {
        this.grid.forEach((row, y) => {
            row.forEach((cell, x) => {
                if (cell === drawnNum) {
                    this.drawnCoordinates.push({ x, y, drawnNum });
                }
            })
        });
    }
    
    isWinner() {
        const desiredMatchCount = this.grid.length;
        
        // Check for horizontal matches
        for (let rowIdx = 0; rowIdx < this.grid.length; rowIdx++) {
            if (this.drawnCoordinates.filter(coord => coord.y === rowIdx).length >= desiredMatchCount) {
                return true;
            }
        }
        
        // Check for vertical matches
        for (let colIdx = 0; colIdx < this.grid.length; colIdx++) {
            if (this.drawnCoordinates.filter(coord => coord.x === colIdx).length >= desiredMatchCount) {
                return true;
            }
        }

        return false;
    }
    
    getBoardScore() {
        const lastDrawnNum = this.drawnCoordinates[this.drawnCoordinates.length - 1].drawnNum;
        let unmarkedSum = 0;

        this.grid.forEach(row => {
            row.forEach(cell => {
                unmarkedSum += parseInt(cell);
            });
        });
        
        this.drawnCoordinates.forEach(coord => unmarkedSum -= parseInt(coord.drawnNum));
        
        return unmarkedSum * parseInt(lastDrawnNum);
    }
};

const readInput = (inputPath) => {
    const result = {
        drawNumbers: undefined,
        boards: undefined
    };
    
    const rawInput = fs.readFileSync(inputPath, 'utf-8').split('\n\n');
    
    result.drawNumbers = rawInput[0].trim().split(',');
    result.boards = rawInput.slice(1, rawInput.length)
        .map(rawGrid => {
            return new BingoBoard(rawGrid.split('\n')
                .map(rawRow => rawRow.split(' ').filter(cell => cell !== '')));
        });

    return result;
};

const main = () => {
    const { drawNumbers, boards } = readInput(INPUT_PATH);
    const winnerOrder = [];

    for (let numIdx = 0; numIdx < drawNumbers.length && winnerOrder.length !== boards.length; numIdx++) {
        const num = drawNumbers[numIdx];
        for (let boardIdx = 0; boardIdx < boards.length; boardIdx++) {
            const board = boards[boardIdx];
            if (winnerOrder.indexOf(board) === -1) {
                board.drawNumber(num);
                if (board.isWinner()) {
                    // console.log('Winning Board: ', boardIdx + 1);
                    // console.log('Board Score: ', board.getBoardScore());
                    winnerOrder.push(board);
                }
            }
        }
    }
    
    console.log('First Winning Board');
    console.log('Board Score: ', winnerOrder[0].getBoardScore());

    console.log('Last Winning Board');
    console.log('Board Score: ', winnerOrder[winnerOrder.length - 1].getBoardScore());
};

module.exports = {
    main
};

main();
