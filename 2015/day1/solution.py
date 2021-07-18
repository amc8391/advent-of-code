INPUT_PATH = '2015/day1/input.txt'

ASCEND_DIRECTION = '('
DESCEND_DIRECTION = ')'

def read_input(path):
    with open(path) as f:
        read_data = f.read()
    return read_data

def get_end_floor(input_directions):
    end_floor = 0
    for direction in input_directions:
        if direction == ASCEND_DIRECTION:
            end_floor += 1
        elif direction == DESCEND_DIRECTION:
            end_floor -= 1
        else:
            print('Something is wrong; direction was ' + direction)
    return end_floor

if __name__ == '__main__':
    print('End floor is #' + str(get_end_floor(read_input(INPUT_PATH))))
