import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextareaAutosize, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { input, sample } from './inputs';
import { main } from './solution';

function Day1() {
    return (
        <div>
            <h1>--- Day 1: Calorie Counting ---</h1>
            <Container className='prompt'>
            <Typography>
                Santa's reindeer typically eat regular reindeer food, but they need a lot of magical energy to deliver presents on Christmas. For that, their favorite snack is a special type of star fruit that only grows deep in the jungle. The Elves have brought you on their annual expedition to the grove where the fruit grows.<br />
                To supply enough magical energy, the expedition needs to retrieve a minimum of fifty stars by December 25th. Although the Elves assure you that the grove has plenty of fruit, you decide to grab any fruit you see along the way, just in case. <br />
                Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck! <br />
                The jungle must be too overgrown and difficult to navigate in vehicles or access from the air; the Elves' expedition traditionally goes on foot. As your boats approach land, the Elves begin taking inventory of their supplies. One important consideration is food - in particular, the number of Calories each Elf is carrying (your puzzle input). <br />
                The Elves take turns writing down the number of Calories contained by the various meals, snacks, rations, etc. that they've brought with them, one item per line. Each Elf separates their own inventory from the previous Elf's inventory (if any) by a blank line.
            </Typography>

            <Typography>
                For example, suppose the Elves finish writing their items' Calories and end up with the following list:
            </Typography>

            <Container>
                <TextareaAutosize className="input-sample" readOnly value={sample}>
                </TextareaAutosize>
            </Container>
           
            
            <Typography>
                This list represents the Calories of the food carried by five Elves:
            </Typography>

            <Typography>
                The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories. <br />
                The second Elf is carrying one food item with 4000 Calories. <br />
                The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories. <br />
                The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories. <br />
                The fifth Elf is carrying one food item with 10000 Calories. <br />
                In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the most Calories. In the example above, this is 24000 (carried by the fourth Elf).
            </Typography>

            <Typography>
                Find the Elf carrying the most Calories. <br />
                How many total Calories is that Elf carrying?
            </Typography>
            </Container>
            
            <Container className="solution">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right">Output</TableCell>
                        <TableCell align="right">Expected Output</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">Sample Input</TableCell>
                        <TableCell align="right">{main(sample).part1}</TableCell>
                        <TableCell align="right">24000</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">Actual Input</TableCell>
                        <TableCell align="right">{main(input).part1}</TableCell>
                        <TableCell align="right">?</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
            </Container>

            <Container className="prompt">
                <Typography>
                --- Part Two ---
                By the time you calculate the answer to the Elves' question, they've already realized that the Elf carrying the most Calories of food might eventually run out of snacks.

                To avoid this unacceptable situation, the Elves would instead like to know the total Calories carried by the top three Elves carrying the most Calories. That way, even if one of those Elves runs out of snacks, they still have two backups.

                In the example above, the top three Elves are the fourth Elf (with 24000 Calories), then the third Elf (with 11000 Calories), then the fifth Elf (with 10000 Calories). The sum of the Calories carried by these three elves is 45000.

                Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
                </Typography>
            </Container>

            <Container className="solution">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right">Output</TableCell>
                        <TableCell align="right">Expected Output</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">Sample Input</TableCell>
                        <TableCell align="right">{main(sample).part2}</TableCell>
                        <TableCell align="right">45000</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">Actual Input</TableCell>
                        <TableCell align="right">{main(input).part2}</TableCell>
                        <TableCell align="right">?</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default Day1;
