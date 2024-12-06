import json

class Game:
  def __init__(self) -> None:
    self.id = 0
    self.bags = []


def parse_game(line):
  # 'Game 1: 7 green, 14 red, 5 blue; 8 red, 4 green; 6 green, 18 red, 9 blue'
  game = Game()
  game_id_str, rounds_str = line.split(':')
  game.id = int(game_id_str.split(' ')[1])
  rounds = rounds_str.split(';')

  for round in rounds:
    round = round.strip()
    if len(round) == 0:
      continue
    cubes = round.split(',')
    cubes = [cube.strip() for cube in cubes]
    bag = []
    for cube in cubes:
      color, count = cube.split(' ')

def main():
  with open('day2/input.txt') as f:
    lines = f.readlines()
  games = parse_games(lines)
  
  max_values = {
    'red': 12,
    'green': 13,
    'blue': 14
  }

  filtered_games = []
  game_id_sum = 0
  for game in games:
    red_count = 0
    green_count = 0
    blue_count = 0
    for bag in game['bags']:
      for cube in bag:
        if cube['color'] == 'red':
          red_count += cube['count']
        elif cube['color'] == 'green':
          green_count += cube['count']
        elif cube['color'] == 'blue':
          blue_count += cube['count']
    if red_count <= max_values['red'] and green_count <= max_values['green'] and blue_count <= max_values['blue']:
      filtered_games.append(game)
      game_id_sum += int(game['game_id'].split(' ')[-1])
  print(game_id_sum)
  


if __name__ == "__main__":
  main()
