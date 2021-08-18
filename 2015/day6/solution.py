import re

INPUT_PATH = '2015/day6/input.txt'

ON_COMMAND = 'turn on'
OFF_COMMAND = 'turn off'
TOGGLE_COMMAND = 'toggle'

class SwitchInstruction:
    def __init__(self, instruction_str):
        self.input_line = instruction_str
        # turn on 454,398 through 844,448
        self.__parse_switch_instruction(instruction_str)
        self.__parse_coordinates(instruction_str)

    def __parse_switch_instruction(self, instruction_str):
        if ON_COMMAND in instruction_str:
            self.switch_instruction = ON_COMMAND
        if OFF_COMMAND in instruction_str:
            self.switch_instruction = OFF_COMMAND
        if TOGGLE_COMMAND in instruction_str:
            self.switch_instruction = TOGGLE_COMMAND

    def __parse_coordinates(self, instruction_str):
        coords_pattern = re.compile(r'\d*,\d*')
        coords_matches = re.findall(coords_pattern, instruction_str)
        self.start_coord = self.__split_coord(coords_matches[0])
        self.end_coord = self.__split_coord(coords_matches[1])
    
    def __split_coord(self, coord_str):
        return (int(coord_str.split(',')[0]), int(coord_str.split(',')[1]))

def get_lights_count(switch_instructions):
    pass

def read_input(path):
    with open(path) as f:
        light_switch_instructions = f.readlines()
    instructions = []
    for i in range(0, len(light_switch_instructions)):
        instructions.append(SwitchInstruction(light_switch_instructions[i]))
    return instructions

if __name__ == '__main__':
    print(read_input(INPUT_PATH))
