import solution
import unittest

class Day1SolutionTests(unittest.TestCase):
    def test_single_direction(self):
        self.assertEqual(solution.walk_through_apartment(')'), (-1, 0))
        self.assertEqual(solution.walk_through_apartment('('), (1, None))

    def test_example_directions_part1(self):
        self.assertEqual(solution.walk_through_apartment('(())'), (0, None))
        self.assertEqual(solution.walk_through_apartment('()()'), (0, None))
        self.assertEqual(solution.walk_through_apartment('((('), (3, None))
        self.assertEqual(solution.walk_through_apartment('(()(()('), (3, None))
        self.assertEqual(solution.walk_through_apartment('))((((('), (3, 0))
        self.assertEqual(solution.walk_through_apartment('())'), (-1, 2))
        self.assertEqual(solution.walk_through_apartment('))('), (-1, 0))
        self.assertEqual(solution.walk_through_apartment('(())'), (0, None))

    def test_example_directions_part2(self):
        self.assertEqual(solution.walk_through_apartment(')'), (-1, 0))
        self.assertEqual(solution.walk_through_apartment('()())'), (-1, 4))

if __name__ == '__main__':
    unittest.main()
