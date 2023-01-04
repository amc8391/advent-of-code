const WIN_POINTS = 6;
const DRAW_POINTS = 3;
const LOSS_POINTS = 0;

const RPS_MAPPINGS = {
    rock: {
        name: 'rock',
        points: 1
    },
    paper: {
        name: 'paper',
        points: 2
    },
    scissors: {
        name: 'scissors',
        points: 3
    }
};

RPS_MAPPINGS.rock.beats = RPS_MAPPINGS.scissors;
RPS_MAPPINGS.paper.beats = RPS_MAPPINGS.rock;
RPS_MAPPINGS.scissors.beats = RPS_MAPPINGS.paper;

RPS_MAPPINGS.rock.losesTo = RPS_MAPPINGS.paper;
RPS_MAPPINGS.paper.losesTo = RPS_MAPPINGS.scissors;
RPS_MAPPINGS.scissors.losesTo = RPS_MAPPINGS.rock;

const deepCopy = obj => JSON.parse(JSON.stringify(obj));

const main = input => {
    const games =  parseInput(input);
    const part1Games = deepCopy(games).map(game => determineSelfPart1(determineOpp(game)));
    const part2Games = deepCopy(games).map(game => determineSelfPart2(determineOpp(game)));

    // part1Games.forEach(printGame);
    // part2Games.forEach(printGame);

    const totalScorePart1 = part1Games.reduce((accumulator, game) => accumulator + scoreGame(game), 0) 
    const totalScorePart2 = part2Games.reduce((accumulator, game) => accumulator + scoreGame(game), 0) 

    return {
        part1: totalScorePart1,
        part2: totalScorePart2
    };
};

const determineOpp = game => {
    const oppSymbolMappings = {
        A: RPS_MAPPINGS.rock,
        B: RPS_MAPPINGS.paper,
        C: RPS_MAPPINGS.scissors
    };
    game.opp = oppSymbolMappings[game.oppSymbol];
    return game;
}

const determineSelfPart1 = (game) => {
    const selfSymbolMappings = {
        X: RPS_MAPPINGS.rock,
        Y: RPS_MAPPINGS.paper,
        Z: RPS_MAPPINGS.scissors
    };

    game.gameGoal = 'Play it out (Pt1)'
    game.self = selfSymbolMappings[game.selfSymbol];
    return game;
}

const determineSelfPart2 = (game) => {
    const gameGoalMappings = {
        X: game.opp.beats, // loss
        Y: game.opp, // draw
        Z: game.opp.losesTo // win
    };

    game.gameGoal = {
        X: 'Loss',
        Y: 'Draw',
        Z: 'Win'
    }[game.selfSymbol] + '(Pt2)';
    game.self = gameGoalMappings[game.selfSymbol];
    return game;
}

const scoreGame = game => {
    let score = 0;

    score += game.self.points; 

    if (game.self.beats === game.opp) {
        score += WIN_POINTS;
    } else if (game.self === game.opp) {
        score += DRAW_POINTS;
    } else if (game.self === game.opp.beats) {
        score += LOSS_POINTS;
    } else {
        throw new Error('Unmapped win state?');
    }

    return score;
};

// eslint-disable-next-line no-unused-vars
const printGame = game => {
    console.log(
        'Game Goal: ' + game.gameGoal + '\n' +
        'I choose ' + game.self.name + ' from input symbol ' + game.selfSymbol + '\n' +
        'Opponent chooses ' + game.opp.name + ' from input symbol ' + game.oppSymbol + '\n' + 
        'Game score ' + scoreGame(game),
        game
    );
}

const parseInput = input => input
    .split('\n') // split each RPS round
    .map(game => {
        const choices = game.split(' ');

        return {
            // self: SELF_SYMBOL_MAPPINGS[choices[1]], // 2nd symbol is my hand
            oppSymbol: choices[0],
            opp: undefined, // first symbol is opponent's hand
            selfSymbol: choices[1],
            self: undefined,
            gameGoal: undefined
        }
    });

module.exports = {
    main
};
