import SolutionOutput from "../shared/SolutionOutput";

class SectionRange {
  start: number;
  end: number;

  constructor(sectionInput: string) {
    [this.start, this.end] = sectionInput.split('-').map(sectionNum => parseInt(sectionNum));
  };

  getSize(): number {
    return this.end - this.start;
  }
}

const parseInput = (input: string) : SectionRange[][] => input
  .split('\n')
  .map(line => line.split(',').map(section => new SectionRange(section)));


const pairsOverlap = (sectionPair: SectionRange[]): boolean => {
  sectionPair.sort((a, b) => b.getSize() - a.getSize());

  if (sectionPair[0].start <= sectionPair[1].start && sectionPair[0].end >= sectionPair[1].end) {
    return true;
  }
  
  return false;
};

export const main = (input: string): SolutionOutput => {
  const elfSections = parseInput(input);
  const overlappingPairs = elfSections.filter(pairsOverlap);

  return {
    part1: overlappingPairs.length,
    part2: -1,
  };
};
