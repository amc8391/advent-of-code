import solution
import unittest

class Day5SolutionTests(unittest.TestCase):    
    def test_example_nice_words_part1(self):
        input_string = 'ugknbfddgicrmopn'
        self.assertEqual(solution.is_string_nice(input_string), True)

        input_string = 'aaa'
        self.assertEqual(solution.is_string_nice(input_string), True)

        input_string = 'jchzalrnumimnmhp'
        self.assertEqual(solution.is_string_nice(input_string), False)

        input_string = 'haegwjzuvuyypxyu'
        self.assertEqual(solution.is_string_nice(input_string), False)

        input_string = 'dvszwmarrgswjxmb'
        self.assertEqual(solution.is_string_nice(input_string), False)


if __name__ == '__main__':
    unittest.main()
