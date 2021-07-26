import solution_part_1
import solution_part_2
import unittest

class Day5SolutionTests(unittest.TestCase):    
    def test_example_nice_words_part1(self):
        input_string = 'ugknbfddgicrmopn'
        self.assertEqual(solution_part_1.is_string_nice(input_string), True)

        input_string = 'aaa'
        self.assertEqual(solution_part_1.is_string_nice(input_string), True)

        input_string = 'jchzalrnumimnmhp'
        self.assertEqual(solution_part_1.is_string_nice(input_string), False)

        input_string = 'haegwjzuvuycolypxyu'
        self.assertEqual(solution_part_1.is_string_nice(input_string), False)

        input_string = 'dvszwmarrgswjxmb'
        self.assertEqual(solution_part_1.is_string_nice(input_string), False)

    def test_example_nice_words_part2(self):
        '''
        nice because is has a pair that appears twice (qj) and a letter
        that repeats with exactly one letter between them (zxz)
        '''
        input_string = 'qjhvhtzxzqqjkmpb'
        self.assertEqual(solution_part_2.is_string_nice(input_string), True)

        '''
        nice because it has a pair that appears twice and a letter that
        repeats with one between, even though the letters used by each
        rule overlap
        input_string = 'xxyxx'
        self.assertEqual(solution.is_string_nice(input_string), True)
        '''

        '''
        naughty because it has a pair (tg) but no repeat with a single
        letter between them
        '''
        input_string = 'uurcxstgmygtbstg'
        self.assertEqual(solution_part_2.is_string_nice(input_string), False)

        '''
        naughty because it has a repeating letter with one between
        (odo), but no pair that appears twice
        '''
        input_string = 'ieodomkazucvgmuy'
        self.assertEqual(solution_part_2.is_string_nice(input_string), False)

    def test_has_non_overlapping_pair(self):
        input_string = 'qjhvhtzxzqqjkmpb'
        self.assertEqual(solution_part_2.has_non_overlapping_pair(input_string), True)
        
        input_string = 'uurcxstgmygtbstg'
        self.assertEqual(solution_part_2.has_non_overlapping_pair(input_string), True)
        
        input_string = 'ieodomkazucvgmuy'
        self.assertEqual(solution_part_2.has_non_overlapping_pair(input_string), False)

    def test_has_spaced_duplicate_char(self):
        input_string = 'qjhvhtzxzqqjkmpb'
        self.assertEqual(solution_part_2.has_spaced_duplicate_char(input_string), True)
        
        input_string = 'uurcxstgmygtbstg'
        self.assertEqual(solution_part_2.has_spaced_duplicate_char(input_string), False)
        
        input_string = 'ieodomkazucvgmuy'
        self.assertEqual(solution_part_2.has_spaced_duplicate_char(input_string), True)

if __name__ == '__main__':
    unittest.main()
