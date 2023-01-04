import SolutionOutput from "../shared/SolutionOutput";

// --- Part Two ---
// As you finish identifying the misplaced items, the Elves come to you with another issue.

// For safety, the Elves are divided into groups of three. Every Elf carries a badge that identifies their group. For efficiency, within each group of three Elves, the badge is the only item type carried by all three Elves. That is, if a group's badge is item type B, then all three Elves will have item type B somewhere in their rucksack, and at most two of the Elves will be carrying any other item type.

// The problem is that someone forgot to put this year's updated authenticity sticker on the badges. All of the badges need to be pulled out of the rucksacks so the new authenticity stickers can be attached.

// Additionally, nobody wrote down which item type corresponds to each group's badges. The only way to tell which item type is the right one is by finding the one item type that is common between all three Elves in each group.

// Every set of three lines in your list corresponds to a single group, but each group can have a different badge item type. So, in the above example, the first group's rucksacks are the first three lines:

// vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// And the second group's rucksacks are the next three lines:

// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw
// In the first group, the only item type that appears in all three rucksacks is lowercase r; this must be their badges. In the second group, their badge item type must be Z.

// Priorities for these items must still be found to organize the sticker attachment efforts: here, they are 18 (r) for the first group and 52 (Z) for the second group. The sum of these is 70.

// Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types?

class Rucksack {
  input: string;
  compartments: string[];
  duplicateItem: number;
  group?: number;

  constructor(rucksackInputLine: string) {
    this.input = rucksackInputLine;
    this.compartments = [
      rucksackInputLine.slice(0, rucksackInputLine.length / 2),
      rucksackInputLine.slice(rucksackInputLine.length / 2, rucksackInputLine.length)
    ];
    this.duplicateItem = Rucksack.findDuplicateItem(this.compartments);
  }

  setGroup(group: number): void { this.group = group; }

  getGroup(): number {
    return this.group === undefined ? -1 : this.group;
  }
  
  static findDuplicateItem = (compartments: string[] ): number => {
    const freqMaps: Map<number, number>[] = compartments.map(getStringFrequencyMap);
    const duplicateItem = [...freqMaps[0].keys()].find(key => [...freqMaps[1].keys()].includes(key))
    return duplicateItem || -1;
  }
}

const getItemPriority = (item: string): number => {
  const code =
    item.toLowerCase() === item ?
      item.charCodeAt(0) - 96 : // a through z have priorities 1 through 26.
      item.charCodeAt(0) - 64 + 26; // A through Z have priorities 27 through 52.
  return code;
};

const getItemFromPriority = (priority: number): string => {
  // a through z have priorities 1 through 26.
  if (priority <= 26) {
    return String.fromCharCode(priority + 96)
  } else {
    // A through Z have priorities 27 through 52.
    return String.fromCharCode(priority + 64 - 26) 
  }
};

const getStringFrequencyMap = (str: string) : Map<number, number> => {
  const itemFreqMap = new Map<number, number>();

  str.split('').forEach(item => {
    const priority = getItemPriority(item);
    const newItemFrequency = (itemFreqMap.get(priority) || 0) + 1;
    itemFreqMap.set(priority, newItemFrequency);
  });

  return itemFreqMap;
}

const groupRucksacks = (rucksacks: Rucksack[]) : Rucksack[][] => {
  const rucksackGroups : Rucksack[][] = [];

  rucksacks.forEach((rucksack, idx) => {
    const groupIdx = Math.floor(idx / 3);
    rucksack.setGroup(groupIdx);
    if (rucksackGroups.length <= idx / 3) {
      rucksackGroups.push([rucksack]);
    } else {
      rucksackGroups[groupIdx].push(rucksack);
    }
    return rucksack;
  });

  if (!rucksackGroups.every(group => group.length === 3)) {
    throw new Error('Uh oh! Wrong group size')
  }

  return rucksackGroups;
}

const findSharedItemInGroup = (rucksackGroup: Rucksack[]): number => {
  const freqMaps = rucksackGroup.map(rucksack => getStringFrequencyMap(rucksack.input));
  const duplicatedKey = [...freqMaps[0].keys()].find(key => 
    freqMaps.slice(1, 3).every(freqMap => freqMap.has(key))
  );

  if (duplicatedKey === undefined) {
    throw new Error('Uh oh! Undefined group badge')
  }

  return duplicatedKey || -1;
}

const parseInput = (input: string) : Rucksack[] => input
  .split('\n')
  .map(input => new Rucksack(input));


export const main = (input: string) : SolutionOutput => {
  const rucksacks = parseInput(input);

  const rucksackGroups = groupRucksacks(rucksacks);
  const badgePriorities = rucksackGroups.map(findSharedItemInGroup);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const badgeItems = badgePriorities.map(getItemFromPriority);

  const output: SolutionOutput = {
    part1: rucksacks.reduce((accumulator: number, rucksack: Rucksack) =>
      accumulator + rucksack.duplicateItem, 0),

    part2: badgePriorities.reduce((accumulator, badge) =>
      accumulator + badge, 0),
  };

  return output;
};
