INPUT_PATH = '2015/day2/input.txt'

class Present:
    def __init__(self, dimensions):
        self.dimensions = dimensions

    # def __init__(self, length, width, height):
    #     self.length = length
    #     self.width = width
    #     self.height = height

    def get_surface_area(self):
        total_surface_area = 0
        remaining_dimensions = list.copy(self.dimensions)
        while len(remaining_dimensions) > 0:
            dim1 = remaining_dimensions.pop()
            for dim2 in remaining_dimensions:
                total_surface_area += 2 * dim1 * dim2
        return total_surface_area

    def get_smallest_surface_area(self):
        sorted_dims = list.copy(self.dimensions)
        sorted_dims.sort()
        return sorted_dims[0] * sorted_dims[1]

def read_input(path):
    presents = []
    with open(path) as f:
        new_present_dimensions = f.readline()
        while new_present_dimensions:
            presents.append(dimensions_to_present(new_present_dimensions))
            new_present_dimensions = f.readline()
    return presents

def dimensions_to_present(dimensions_text):
    dimensions = list(map(int, dimensions_text.split('x')))
    return Present(dimensions)

if __name__ == '__main__':
    presents = read_input(INPUT_PATH)
    print('Total wrapping paper needed: ' + str(sum(list(map(lambda present: present.get_surface_area() + present.get_smallest_surface_area(), presents)))))
    # end_floor, first_basement_descent_idx = walk_through_apartment(read_input(INPUT_PATH))
    # print('End floor is #' + str(end_floor))
    # print('First basement descent ' + str(first_basement_descent_idx + 1))
