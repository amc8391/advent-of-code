import solution
import unittest

class Day1SolutionTests(unittest.TestCase):    
    def test_example_houses_part1(self):
        input_secret = 'abcdef'
        self.assertEqual(solution.get_zeroed_md5(input_secret, 5), 609043)

        input_secret = 'pqrstuv'
        self.assertEqual(solution.get_zeroed_md5(input_secret, 5), 1048970)

if __name__ == '__main__':
    unittest.main()
