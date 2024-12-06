from pyspark.sql import SparkSession, DataFrame
from pyspark.sql.types import IntegerType
import pyspark.sql.functions as F  
import re

NUMBER_DICT = {
  "one":    '1',
  "two":    '2',
  "three":  '3',
  "four":   '4',
  "five":   '5',
  "six":    '6',
  "seven":  '7',
  "eight":  '8',
  "nine":   '9'
}  

def get_calibration_value_from_line(line: str):
  all_digits = re.findall(r'\d', line)

  if len(all_digits) == 0:
    return 0
  return int(f'{all_digits[0]}{all_digits[-1]}')

def get_calibration_value_from_line_alpha(line: str):
  alphabetic_numbers_regex = str.join("|", list(NUMBER_DICT.keys()))
  all_digits = re.findall(fr'(\d|{alphabetic_numbers_regex})', line)
  print(all_digits)
  calibration_value = ''


  for i in [0, -1]:
    if (all_digits[i] in NUMBER_DICT.keys()):
      calibration_value += str(NUMBER_DICT[all_digits[i]])
    else:
      calibration_value += str(all_digits[i])

  return int(calibration_value)

def main(spark, input_file="day1/input.txt"):
  # get_calibration_value_from_line('9lqmbltfoursnsbrqn22sdnrpxfsjfour')
  lines: DataFrame = spark.read.text(input_file)
  lines.show()
  part_one_calibration_udf = F.udf(get_calibration_value_from_line, IntegerType())
  part_one_computed_df = lines.withColumn('calibration_value_pt1', part_one_calibration_udf('value'))
  part_one_computed_df.show()
  part_one_computed_df.select(F.sum('calibration_value_pt1')).show()

  part_two_calibration_udf = F.udf(get_calibration_value_from_line_alpha, IntegerType())
  part_two_computed_df = part_one_computed_df.withColumn('calibration_value_pt2', part_two_calibration_udf('value'))
  part_two_computed_df.show()
  part_two_computed_df.select(F.sum('calibration_value_pt2')).show()
  return part_two_computed_df

if __name__ == "__main__":
  spark = SparkSession.builder.appName("day1").getOrCreate()
  main(spark)
  spark.stop()
