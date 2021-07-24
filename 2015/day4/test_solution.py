import solution
import unittest

class Day1SolutionTests(unittest.TestCase):    
    def test_example_houses_part1(self):
        input_secret = 'abcdef'
        self.assertEqual(solution.get_zeroed_md5(input_secret, 5), 609043)

        input_secret = 'pqrstuv'
        self.assertEqual(solution.get_zeroed_md5(input_secret, 5), 1048970)
        
    # def test_example_houses_part2(self):
    #     input_directions = '^v'
    #     self.assertEqual(len(solution.get_houses_visited_multiple_sleighs(input_directions, 2)), 3)

    #     input_directions = '^>v<'
    #     self.assertEqual(len(solution.get_houses_visited_multiple_sleighs(input_directions, 2)), 3)
        
    #     input_directions = '^v^v^v^v^v'
    #     self.assertEqual(len(solution.get_houses_visited_multiple_sleighs(input_directions, 2)), 11)


if __name__ == '__main__':
    unittest.main()
