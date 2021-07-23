import solution
import unittest

class Day1SolutionTests(unittest.TestCase):
    def test_directions(self):
        input_directions = '>'
        self.assertEqual(solution.get_visited_houses_count(input_directions), 2)

        input_directions = '^'
        self.assertEqual(solution.get_visited_houses_count(input_directions), 2)

        input_directions = '<'
        self.assertEqual(solution.get_visited_houses_count(input_directions), 2)

        input_directions = 'v'
        self.assertEqual(solution.get_visited_houses_count(input_directions), 2)
    
    def test_example_houses_part1(self):
        input_directions = '>'
        self.assertEqual(solution.get_visited_houses_count(input_directions), 2)

        input_directions = '^>v<'
        self.assertEqual(solution.get_visited_houses_count(input_directions), 4)
        
        input_directions = '^v^v^v^v^v'
        self.assertEqual(solution.get_visited_houses_count(input_directions), 2)

if __name__ == '__main__':
    unittest.main()
