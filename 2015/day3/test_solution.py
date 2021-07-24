import solution
import unittest

class Day3SolutionTests(unittest.TestCase):
    def test_directions(self):
        input_directions = '>'
        self.assertEqual(len(solution.get_visited_houses(input_directions)), 2)

        input_directions = '^'
        self.assertEqual(len(solution.get_visited_houses(input_directions)), 2)

        input_directions = '<'
        self.assertEqual(len(solution.get_visited_houses(input_directions)), 2)

        input_directions = 'v'
        self.assertEqual(len(solution.get_visited_houses(input_directions)), 2)
    
    def test_example_houses_part1(self):
        input_directions = '>'
        self.assertEqual(len(solution.get_visited_houses(input_directions)), 2)

        input_directions = '^>v<'
        self.assertEqual(len(solution.get_visited_houses(input_directions)), 4)
        
        input_directions = '^v^v^v^v^v'
        self.assertEqual(len(solution.get_visited_houses(input_directions)), 2)

    def test_example_houses_part2(self):
        input_directions = '^v'
        self.assertEqual(len(solution.get_houses_visited_multiple_sleighs(input_directions, 2)), 3)

        input_directions = '^>v<'
        self.assertEqual(len(solution.get_houses_visited_multiple_sleighs(input_directions, 2)), 3)
        
        input_directions = '^v^v^v^v^v'
        self.assertEqual(len(solution.get_houses_visited_multiple_sleighs(input_directions, 2)), 11)


if __name__ == '__main__':
    unittest.main()
