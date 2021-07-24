import solution
import unittest

class Day2SolutionTests(unittest.TestCase):
    def test_example_packages_part1(self):
        presents = [solution.dimensions_to_present('2x3x4')]
        self.assertEqual(solution.get_total_wrapping_paper_needed(presents), 58)
        
        presents = [solution.dimensions_to_present('1x1x10')]
        self.assertEqual(solution.get_total_wrapping_paper_needed(presents), 43)
    
    def test_example_packages_part2(self):
        presents = [solution.dimensions_to_present('2x3x4')]
        self.assertEqual(solution.get_total_ribbon_needed(presents), 34)

        presents = [solution.dimensions_to_present('1x1x10')]
        self.assertEqual(solution.get_total_ribbon_needed(presents), 14)

if __name__ == '__main__':
    unittest.main()
