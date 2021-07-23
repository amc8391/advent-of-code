INPUT_PATH = '2015/day2/input.txt'

class Present:
    def __init__(self, dimensions):
        self.dimensions = dimensions
        self.dimensions.sort()

    def get_surface_area(self):
        total_surface_area = 0
        remaining_dimensions = list.copy(self.dimensions)
        while len(remaining_dimensions) > 0:
            dim1 = remaining_dimensions.pop()
            for dim2 in remaining_dimensions:
                total_surface_area += 2 * dim1 * dim2
        return total_surface_area

    def get_smallest_surface_area(self):
        return self.dimensions[0] * self.dimensions[1]
    
    def get_volume(self):
        volume = 1
        for dim in self.dimensions:
            volume *= dim
        return volume

    def get_smallest_perimeter(self):
        return 2 * (self.dimensions[0] + self.dimensions[1])

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

def get_total_wrapping_paper_needed(presents):
    return sum([present.get_surface_area() + present.get_smallest_surface_area() for present in presents])

def get_total_ribbon_needed(presents):
    return sum([present.get_smallest_perimeter() + present.get_volume() for present in presents])

if __name__ == '__main__':
    presents = read_input(INPUT_PATH)
    print(f'Total wrapping paper needed: {get_total_wrapping_paper_needed(presents)}')
    print(f'Total ribbon needed: {get_total_ribbon_needed(presents)}')
