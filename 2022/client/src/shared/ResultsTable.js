import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function ResultsTable(props) {
  return (
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
            {props.inputs.map((input, idx) => (
              <TableRow key={'row' + idx} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">{input.label}</TableCell>
                {/* TODO: remove props.part + 'Result', very not typescript */}
                <TableCell align="right">{input[props.part + 'Result'] || '?'}</TableCell> 
                <TableCell align="right">{input[props.part + 'Expected' || '?']}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default ResultsTable;

