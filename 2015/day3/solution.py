INPUT_PATH = '2015/day3/input.txt'

UP_DIRECTION = '^'
DOWN_DIRECTION = 'v'
LEFT_DIRECTION = '<'
RIGHT_DIRECTION = '>'

def get_visited_houses(directions):
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

    return visited_coordinates

def get_houses_visited_multiple_sleighs(directions, santa_instances):
    santa_x_directions = []
    santa_x_visited_houses = []
    for idx in range(0, santa_instances):
        santa_x_directions.append('')
        santa_x_visited_houses = {}

    for idx in range(0, len(directions)):
        santa_x_directions[idx % santa_instances] += directions[idx]

    for idx in range(0, santa_instances):
        santa_x_directions.append(0)
        santa_x_visited_houses[idx] = get_visited_houses(santa_x_directions[idx])
        santa_x_visited_houses[0].update(santa_x_visited_houses[idx])
    return santa_x_visited_houses[0]

def read_input(path):
    with open(path) as f:
        directions = f.readline()
    return directions

if __name__ == '__main__':
    directions = read_input(INPUT_PATH)
    print(f'Number of houses santa visited with 1 santa: {len(get_visited_houses(directions))}')
    combined_houses = get_houses_visited_multiple_sleighs(directions, 2)
    print(f"Number of houses visited with 2 santas: {len(combined_houses)}")
