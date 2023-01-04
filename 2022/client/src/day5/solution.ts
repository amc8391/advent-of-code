import SolutionOutput from "../shared/SolutionOutput";

class Stack {
  boxes: string[] = [];
  
  push(box: string): void {
    this.boxes.push(box);
  }

  pop(): string {
    if (!this.boxes.length) {
      throw Error('Trying to pop from empty stack');
    }
    return this.boxes.pop() || 'ERROR';
  }

  peek(): string {
    return this.boxes[this.boxes.length - 1];
  }
}

type BoxInstruction = {
  boxQty: number;
  sourceStack: number;
  destStack: number;
}

const parseInitialStacks = (initialStacksInput: string): Stack[] => {
  const stackCharIndexes: number[] = [];
  const stacks: Stack[] = [];

  initialStacksInput.split('\n').reverse().forEach((line, idx) => {
    if (idx === 0) { // first line; just stack #s, no boxes
      line.split('').forEach((char, charIdx) => {
        if (char.trim().length) {
          stackCharIndexes.push(charIdx);
          stacks.push(new Stack());
        }
      })
    } else {
      // For all other box lines
      stackCharIndexes.forEach((charIdx, stackIdx) => {
        if (line[charIdx].trim()) { stacks[stackIdx].push(line[charIdx]) }
      });
    }
  })

  return stacks;
}

const parseBoxInstructions = (boxInstructionsInput: string): BoxInstruction[] => {
  return boxInstructionsInput.split('\n').map(instructionInput => {
    const matches = instructionInput.match(/\d+/g);
    
    const instruction: BoxInstruction = {
      boxQty: matches ? parseInt(matches[0]) : -1,
      sourceStack: matches ? parseInt(matches[1]) : -1,
      destStack: matches ? parseInt(matches[2]) : -1,
    };
    return instruction;
  });
}

const moveBoxes = (boxStacks: Stack[], boxInstruction: BoxInstruction): void => {
  for (let i = 0; i < boxInstruction.boxQty; i++) {
    boxStacks[boxInstruction.destStack - 1].push(boxStacks[boxInstruction.sourceStack - 1].pop())
  }
}

const moveBoxesPreserveOrder = (boxStacks: Stack[], boxInstruction: BoxInstruction): void => {
  const tempStack = new Stack();
  for (let i = 0; i < boxInstruction.boxQty; i++) {
    tempStack.push(boxStacks[boxInstruction.sourceStack - 1].pop())
  }

  while (tempStack.peek()) {
    boxStacks[boxInstruction.destStack - 1].push(tempStack.pop());
  }
}

//     [D]    
// [N] [C]    
// [Z] [M] [P]
//  1   2   3 

// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2

export const main = (input: string): SolutionOutput => {
  const [initialStacksInput, boxInstructionsInput] = input.split('\n\n');
  const initialStacksInput9001 = JSON.parse(JSON.stringify(initialStacksInput));

  const boxStacks = parseInitialStacks(initialStacksInput);
  const boxInstructions = parseBoxInstructions(boxInstructionsInput);

  boxInstructions.forEach(instruction => moveBoxes(boxStacks, instruction));

  const boxStacks9001 = parseInitialStacks(initialStacksInput9001);
  boxInstructions.forEach(instruction => moveBoxesPreserveOrder(boxStacks9001, instruction));

  return {
    part1: boxStacks.map(stack => stack.peek()).join(''),
    part2: boxStacks9001.map(stack => stack.peek()).join(''),
  };
}
