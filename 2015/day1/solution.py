INPUT_PATH = '2015/day1/input.txt'

ASCEND_DIRECTION = '('
DESCEND_DIRECTION = ')'

def read_input(path):
    with open(path) as f:
        read_data = f.read()
    return read_data

def walk_through_apartment(input_directions):
    end_floor = 0
    first_basement_descent_idx = None
    for dir_idx, direction in enumerate(input_directions):
        if direction == ASCEND_DIRECTION:
            end_floor += 1
        elif direction == DESCEND_DIRECTION:
            end_floor -= 1
            if first_basement_descent_idx is None and end_floor <= -1:
                first_basement_descent_idx = dir_idx
        else:
            print('Something is wrong; direction was ' + direction)
    return end_floor, first_basement_descent_idx

if __name__ == '__main__':
    end_floor, first_basement_descent_idx = walk_through_apartment(read_input(INPUT_PATH))
    print('End floor is #' + str(end_floor))
    print('First basement descent ' + str(first_basement_descent_idx + 1))
