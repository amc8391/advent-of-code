import './App.css';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from '@mui/material';
import Day1 from './day1/Day1';
import Day2 from './day2/Day2';
import Day3 from './day3/Day3';
import Day4 from './day4/Day4';
import Day5 from './day5/Day5';
import Day6 from './day6/Day6';

const dayMappings = [
  { title: 'Day 1', Component: Day1 },
  { title: 'Day 2', Component: Day2 },
  { title: 'Day 3', Component: Day3 },
  { title: 'Day 4', Component: Day4 },
  { title: 'Day 5', Component: Day5 },
  { title: 'Day 6', Component: Day6 },
]

function App() {
  return (
    <Box className="App">
      <header className="App-header">
        <Container>
          <h1>Advent of Code 2022</h1>
          {dayMappings.map(day => (
            <Accordion key={day.title} TransitionProps={{ unmountOnExit: true }}>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{day.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <day.Component />
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>

      </header>
    </Box>
  );
}

export default App;
