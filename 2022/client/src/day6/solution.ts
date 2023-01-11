import SolutionOutput from "../shared/SolutionOutput";

// const parseBoxInstructions = (boxInstructionsInput: string): BoxInstruction[] => {
//   return boxInstructionsInput.split('\n').map(instructionInput => {
//     const matches = instructionInput.match(/\d+/g);
    
//     const instruction: BoxInstruction = {
//       boxQty: matches ? parseInt(matches[0]) : -1,
//       sourceStack: matches ? parseInt(matches[1]) : -1,
//       destStack: matches ? parseInt(matches[2]) : -1,
//     };
//     return instruction;
//   });
// }

const getFirstDistinctFourCharsIdx = (str: string): number => {
  return getFirstDistinctXCharactersIdx(str, 4);
}

const getFirstDistinctXCharactersIdx = (str: string, subStringLength: number): number => {
  let startIdx = 0;
  let subString = str.slice(startIdx, startIdx + subStringLength);
  while (getStringFrequencyMap(subString).size < subStringLength) {
    startIdx += 1;
    subString = str.slice(startIdx, startIdx + subStringLength);
    if (subString.length < subStringLength) {
      console.error('Substr invalid', subString);
      return -1;
    }
  }

  return startIdx + subStringLength;
}

// const getFirstDistinctFourCharsIdx = (str: string): number => {
//   if (str.length >= 4 && getStringFrequencyMap(str.slice(0, 4)).size < 4) {
//     return 1 + getFirstDistinctFourCharsIdx(str.slice(1));
//   }
//   return -1;
// }

const getStringFrequencyMap = (str: string) : Map<string, number> => {
  const itemFreqMap = new Map<string, number>();

  str.split('').forEach(item => {
    const newItemFrequency = (itemFreqMap.get(item) || 0) + 1;
    itemFreqMap.set(item, newItemFrequency);
  });

  return itemFreqMap;
}

// 7
// mjqjpqmgbljsphdztnvjfqwrcgsmlb

export const main = (input: string): SolutionOutput => {

  return {
    part1: getFirstDistinctFourCharsIdx(input),
    part2: getFirstDistinctXCharactersIdx(input, 14),
  }
}
