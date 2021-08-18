import re
from constants import ON_COMMAND, OFF_COMMAND, TOGGLE_COMMAND, ON_STATE, OFF_STATE, INPUT_PATH, INC_1_COMMAND, INC_2_COMMAND, DEC_COMMAND

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
    
    def get_new_light_state_part_1(self, light_cell):
        new_state = None
        if self.switch_instruction == ON_COMMAND:
            new_state = ON_STATE
        elif self.switch_instruction == OFF_COMMAND:
            new_state = OFF_STATE
        elif self.switch_instruction == TOGGLE_COMMAND:
            if light_cell == OFF_STATE:
                new_state = ON_STATE
            else:
                new_state = OFF_STATE
        else:
            raise NotImplementedError('Invalid light switch command')
        return new_state
    
    def get_new_light_brightness_part_2(self, light_cell):
        new_brightness = None
        if self.switch_instruction == INC_1_COMMAND:
            new_brightness = light_cell + 1
        elif self.switch_instruction == DEC_COMMAND:
            if light_cell > 0:
                new_brightness = light_cell - 1
            else:
                new_brightness = 0
        elif self.switch_instruction == INC_2_COMMAND:
            new_brightness = light_cell + 2
        else:
            raise NotImplementedError('Invalid light switch command')
        return new_brightness

def init_grid():
    grid = []
    for x in range(0, 1000):
        row = []
        for y in range(0, 1000):
            row.append(OFF_STATE)
        grid.append(row)
    return grid

def get_lights_count_part_1(switch_instructions):
    grid = init_grid()
    for instruction in switch_instructions:
        for x in range(instruction.start_coord[0], instruction.end_coord[0] + 1):
            for y in range(instruction.start_coord[1], instruction.end_coord[1] + 1):
                grid[x][y] = instruction.get_new_light_state_part_1(grid[x][y])
    
    total_on = 0
    for row in grid:
        for cell in row:
            if cell == ON_STATE:
                total_on += 1
    return total_on

def get_lights_brightness_part_2(switch_instructions):
    grid = init_grid()
    for instruction in switch_instructions:
        for x in range(instruction.start_coord[0], instruction.end_coord[0] + 1):
            for y in range(instruction.start_coord[1], instruction.end_coord[1] + 1):
                grid[x][y] = instruction.get_new_light_brightness_part_2(grid[x][y])

    total_brightness = 0
    for row in grid:
        for cell in row:
            total_brightness += cell
    return total_brightness

def read_input(path):
    with open(path) as f:
        light_switch_instructions = f.readlines()
    instructions = []
    for i in range(0, len(light_switch_instructions)):
        instructions.append(SwitchInstruction(light_switch_instructions[i]))
    return instructions

if __name__ == '__main__':
    input_instructions = read_input(INPUT_PATH)
    print(f'Lit light count pt 1: {get_lights_count_part_1(input_instructions)}')
    print(f'Total brightness pt 2: {get_lights_brightness_part_2(input_instructions)}')
