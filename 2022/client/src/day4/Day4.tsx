import fileInputs from './inputs';
import ResultsTable from '../shared/ResultsTable';
import { main } from './solution';
import React, { useState } from "react";

function Day4() {
  const [
    inputs,
    // setInputs
  ] = useState(fileInputs.map(input => {
    const results = main(input.value);
    input.part1Result = results.part1;
    input.part2Result = results.part2;
    return input;
  }));

  return (
    <div>
      <ResultsTable inputs={inputs} part='part1' />
      <ResultsTable inputs={inputs} part='part2' />
    </div>
  )
}

export default Day4;
