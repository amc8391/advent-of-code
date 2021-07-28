import solution_part_1
import solution_part_2
import unittest

class Day5SolutionTests(unittest.TestCase):    
    def test_example_nice_words_part1(self):
        input_string = 'ugknbfddgicrmopn'
        self.assertTrue(solution_part_1.is_string_nice(input_string))

        input_string = 'aaa'
        self.assertTrue(solution_part_1.is_string_nice(input_string))

        input_string = 'jchzalrnumimnmhp'
        self.assertFalse(solution_part_1.is_string_nice(input_string))

        input_string = 'haegwjzuvuycolypxyu'
        self.assertFalse(solution_part_1.is_string_nice(input_string))

        input_string = 'dvszwmarrgswjxmb'
        self.assertFalse(solution_part_1.is_string_nice(input_string))

    def test_example_nice_words_part2(self):
        '''
        nice because is has a pair that appears twice (qj) and a letter
        that repeats with exactly one letter between them (zxz)
        '''
        input_string = 'qjhvhtzxzqqjkmpb'
        self.assertTrue(solution_part_2.is_string_nice(input_string))

        '''
        nice because it has a pair that appears twice and a letter that
        repeats with one between, even though the letters used by each
        rule overlap
        '''
        input_string = 'xxyxx'
        self.assertTrue(solution_part_2.is_string_nice(input_string))

        '''
        naughty because it has a pair (tg) but no repeat with a single
        letter between them
        '''
        input_string = 'uurcxstgmygtbstg'
        self.assertFalse(solution_part_2.is_string_nice(input_string))

        '''
        naughty because it has a repeating letter with one between
        (odo), but no pair that appears twice
        '''
        input_string = 'ieodomkazucvgmuy'
        self.assertFalse(solution_part_2.is_string_nice(input_string))

    def test_has_non_overlapping_pair(self):
        input_string = 'qjhvhtzxzqqjkmpb'
        self.assertTrue(solution_part_2.has_non_overlapping_pair(input_string))
        
        input_string = 'uurcxstgmygtbstg'
        self.assertTrue(solution_part_2.has_non_overlapping_pair(input_string))
        
        input_string = 'ieodomkazucvgmuy'
        self.assertFalse(solution_part_2.has_non_overlapping_pair(input_string))

        input_string = 'abab'
        self.assertTrue(solution_part_2.has_non_overlapping_pair(input_string))

        input_string = 'aaa'
        self.assertFalse(solution_part_2.has_non_overlapping_pair(input_string))

        input_string = 'aaaa'
        self.assertTrue(solution_part_2.has_non_overlapping_pair(input_string))

    def test_has_spaced_duplicate_char(self):
        input_string = 'qjhvhtzxzqqjkmpb'
        self.assertTrue(solution_part_2.has_spaced_duplicate_char(input_string))
        
        input_string = 'uurcxstgmygtbstg'
        self.assertFalse(solution_part_2.has_spaced_duplicate_char(input_string))
        
        input_string = 'ieodomkazucvgmuy'
        self.assertTrue(solution_part_2.has_spaced_duplicate_char(input_string))

        input_string = 'aaa'
        self.assertTrue(solution_part_2.has_spaced_duplicate_char(input_string))

        input_string = 'ttttt'
        self.assertTrue(solution_part_2.has_spaced_duplicate_char(input_string))

if __name__ == '__main__':
    unittest.main()
