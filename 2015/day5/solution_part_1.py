import solution

NICE_VOWEL_COUNT = 3
VOWEL_CHARS = ['a', 'e', 'i', 'o', 'u']
NAUGHTY_STRINGS = ['ab', 'cd', 'pq', 'xy']

def has_naughty_strings(input_string):
    for naughty_string in NAUGHTY_STRINGS:
        if naughty_string in input_string:
            return True
    return False

def has_repeated_chars(input_string):
    last_char = ''
    for char in input_string:
        if char == last_char:
            return True
        last_char = char
    return False

def get_vowels_count(input_string):
    vowel_count = 0
    for char in input_string:
        if char in VOWEL_CHARS:
            vowel_count += 1
    return vowel_count

def is_string_nice(input_string):
    niceness_criteria = [
        lambda in_str : get_vowels_count(in_str) >= NICE_VOWEL_COUNT,
        has_repeated_chars,
        lambda in_str : not has_naughty_strings(in_str)
    ]

    for criteria_check in niceness_criteria:
        if not criteria_check(input_string):
            return False
    return True
