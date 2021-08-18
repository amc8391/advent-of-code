import unittest

import solution
from constants import ON_COMMAND, OFF_COMMAND, TOGGLE_COMMAND, ON_STATE, OFF_STATE, INC_1_COMMAND, INC_2_COMMAND, DEC_COMMAND

class Day5SolutionTests(unittest.TestCase):
    def test_example_part1(self):
        instruction = solution.SwitchInstruction('turn on 0,0 through 999,999')
        # would turn on (or leave on) every light.
        self.assertEqual(solution.get_lights_count_part_1([instruction]), 1_000_000)

        instruction = solution.SwitchInstruction('toggle 0,0 through 999,0')
        # would toggle the first line of 1000 lights, turning off the ones that were on, and turning on the ones that were off.
        self.assertEqual(solution.get_lights_count_part_1([instruction]), 1_000)

        instruction = solution.SwitchInstruction('turn off 499,499 through 500,500')
        #  through 500,500 would turn off (or leave off) the middle four lights.
        self.assertEqual(solution.get_lights_count_part_1([instruction]), 0)

    def test_multiple_steps_part1(self):
        instructions = [
            solution.SwitchInstruction('turn on 0,0 through 999,999'),
            solution.SwitchInstruction('toggle 0,0 through 999,0'),
            solution.SwitchInstruction('turn off 499,499 through 500,500')
        ]
        self.assertEqual(solution.get_lights_count_part_1(instructions), 1_000_000 - 1_000 - 4)

    def test_switch_instruction_creation(self):
        instruction = solution.SwitchInstruction('turn on 0,0 through 999,999')
        self.assertEqual(instruction.switch_instruction, ON_COMMAND)
        self.assertEqual(instruction.switch_instruction, INC_1_COMMAND)
        self.assertEqual(instruction.start_coord, (0, 0))
        self.assertEqual(instruction.end_coord, (999, 999))
        
        instruction = solution.SwitchInstruction('toggle 0,0 through 999,0')
        self.assertEqual(instruction.switch_instruction, TOGGLE_COMMAND)
        self.assertEqual(instruction.switch_instruction, INC_2_COMMAND)
        self.assertEqual(instruction.start_coord, (0, 0))
        self.assertEqual(instruction.end_coord, (999, 0))

        instruction = solution.SwitchInstruction('turn off 499,499 through 500,500')
        self.assertEqual(instruction.switch_instruction, OFF_COMMAND)
        self.assertEqual(instruction.switch_instruction, DEC_COMMAND)
        self.assertEqual(instruction.start_coord, (499, 499))
        self.assertEqual(instruction.end_coord, (500, 500))

    def test_instruction_get_new_light_state_part_1(self):
        instruction = solution.SwitchInstruction('turn on 0,0 through 999,999')
        self.assertEqual(instruction.get_new_light_state_part_1(OFF_STATE), ON_STATE)
        self.assertEqual(instruction.get_new_light_state_part_1(ON_STATE), ON_STATE)

        instruction = solution.SwitchInstruction('toggle 0,0 through 999,0')
        self.assertEqual(instruction.get_new_light_state_part_1(OFF_STATE), ON_STATE)
        self.assertEqual(instruction.get_new_light_state_part_1(ON_STATE), OFF_STATE)

        instruction = solution.SwitchInstruction('turn off 499,499 through 500,500')
        self.assertEqual(instruction.get_new_light_state_part_1(OFF_STATE), OFF_STATE)
        self.assertEqual(instruction.get_new_light_state_part_1(ON_STATE), OFF_STATE)

    def test_instruction_get_new_light_brightness_part_2(self):
        instruction = solution.SwitchInstruction('turn on 0,0 through 999,999')
        self.assertEqual(instruction.get_new_light_brightness_part_2(0), 1)
        self.assertEqual(instruction.get_new_light_brightness_part_2(1), 2)

        instruction = solution.SwitchInstruction('toggle 0,0 through 999,0')
        self.assertEqual(instruction.get_new_light_brightness_part_2(0), 2)
        self.assertEqual(instruction.get_new_light_brightness_part_2(1), 3)

        instruction = solution.SwitchInstruction('turn off 499,499 through 500,500')
        self.assertEqual(instruction.get_new_light_brightness_part_2(0), 0)
        self.assertEqual(instruction.get_new_light_brightness_part_2(1), 0)
        self.assertEqual(instruction.get_new_light_brightness_part_2(2), 1)

if __name__ == '__main__':
    unittest.main()
