INPUT_PATH = '2015/day5/input.txt'

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

def get_string_vowels_count(input_string):
    vowel_count = 0
    for char in input_string:
        if char in VOWEL_CHARS:
            vowel_count += 1
    return vowel_count

def is_string_nice(input_string):
    niceness_criteria = [
        lambda input_string : get_string_vowels_count(input_string) >= NICE_VOWEL_COUNT,
        has_repeated_chars,
        lambda input_string : not has_naughty_strings(input_string)
    ]

    for criteria_check in niceness_criteria:
        if not criteria_check(input_string):
            return False
    return True

def read_input(path):
    with open(path) as f:
        nice_or_naughty_strings = f.readlines()
    return nice_or_naughty_strings

if __name__ == '__main__':
    input_strings = read_input(INPUT_PATH)
    nice_string_count = 0
    for input_string in input_strings:
        if is_string_nice(input_string):
            nice_string_count += 1
    print(f'Total nice strings: {nice_string_count}')
