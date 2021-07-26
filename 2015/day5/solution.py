import solution_part_1
import solution_part_2

INPUT_PATH = '2015/day5/input.txt'

def read_input(path):
    with open(path) as f:
        nice_or_naughty_strings = f.readlines()
    for i in range(0, len(nice_or_naughty_strings)):
        nice_or_naughty_strings[i] = nice_or_naughty_strings[i].strip()
    return nice_or_naughty_strings

def main():
    input_strings = read_input(INPUT_PATH)
    nice_string_count_pt1 = 0
    nice_string_count_pt2 = 0
    for input_string in input_strings:
        if solution_part_1.is_string_nice(input_string):
            nice_string_count_pt1 += 1
        if solution_part_2.is_string_nice(input_string):
            nice_string_count_pt2 += 1
    print(f'Total nice strings (part 1 criteria): {nice_string_count_pt1}')
    print(f'Total nice strings (part 2 criteria): {nice_string_count_pt2}')

if __name__ == '__main__':
    main()
