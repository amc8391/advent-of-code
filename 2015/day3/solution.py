INPUT_PATH = '2015/day3/input.txt'

UP_DIRECTION = '^'
DOWN_DIRECTION = 'v'
LEFT_DIRECTION = '<'
RIGHT_DIRECTION = '>'

def get_visited_houses_count(directions):
    current_coordinate = (0, 0)
    visited_coordinates = {
        current_coordinate: 1
    }

    for direction in directions:
        if RIGHT_DIRECTION == direction:
            current_coordinate = (current_coordinate[0] + 1, current_coordinate[1])
        if LEFT_DIRECTION == direction:
            current_coordinate = (current_coordinate[0] - 1, current_coordinate[1])
        if UP_DIRECTION == direction:
            current_coordinate = (current_coordinate[0], current_coordinate[1] + 1)
        if DOWN_DIRECTION == direction:
            current_coordinate = (current_coordinate[0], current_coordinate[1] - 1)

        if current_coordinate in visited_coordinates:
            visited_coordinates[current_coordinate] += 1
        else:
            visited_coordinates[current_coordinate] = 1

    return len(visited_coordinates)

def read_input(path):
    with open(path) as f:
        directions = f.readline()
    return directions

if __name__ == '__main__':
    directions = read_input(INPUT_PATH)
    print(f'Number of houses santa visited: {get_visited_houses_count(directions)}')
