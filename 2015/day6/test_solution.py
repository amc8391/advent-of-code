import solution
import unittest

class Day5SolutionTests(unittest.TestCase):
    def test_example_part1(self):
        instruction = solution.SwitchInstruction('turn on 0,0 through 999,999')
        # would turn on (or leave on) every light.
        self.assertEqual(solution.get_lights_count([instruction]), 1_000_000)

        instruction = solution.SwitchInstruction('toggle 0,0 through 999,0')
        # would toggle the first line of 1000 lights, turning off the ones that were on, and turning on the ones that were off.
        self.assertEqual(solution.get_lights_count([instruction]), 1_000)

        instruction = solution.SwitchInstruction('turn off 499,499 through 500,500')
        #  through 500,500 would turn off (or leave off) the middle four lights.
        self.assertEqual(solution.get_lights_count([instruction]), 4)

    def test_switch_instruction_creation(self):
        instruction = solution.SwitchInstruction('turn on 0,0 through 999,999')
        self.assertEqual(instruction.switch_instruction, solution.ON_COMMAND)
        self.assertEqual(instruction.start_coord, (0, 0))
        self.assertEqual(instruction.end_coord, (999, 999))

        instruction = solution.SwitchInstruction('toggle 0,0 through 999,0')
        self.assertEqual(instruction.switch_instruction, solution.TOGGLE_COMMAND)
        self.assertEqual(instruction.start_coord, (0, 0))
        self.assertEqual(instruction.end_coord, (999, 0))

        instruction = solution.SwitchInstruction('turn off 499,499 through 500,500')
        self.assertEqual(instruction.switch_instruction, solution.OFF_COMMAND)
        self.assertEqual(instruction.start_coord, (499, 499))
        self.assertEqual(instruction.end_coord, (500, 500))

if __name__ == '__main__':
    unittest.main()
