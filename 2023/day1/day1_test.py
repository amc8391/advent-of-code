from pyspark.sql import SparkSession, DataFrame
import pyspark.sql.functions as F  

from day1.main import get_calibration_value_from_line, get_calibration_value_from_line_alpha, main

def test_get_calibration_value_from_line():
  assert get_calibration_value_from_line('9lqmbltfoursnsbrqn27sdnrpxfsjfour') == 97

def test_get_calibration_value_from_line_alpha():
  assert get_calibration_value_from_line_alpha('9lqmbltfoursnsbrqn27sdnrpxfsjone') == 91
  assert get_calibration_value_from_line_alpha('9lqmbltfoursnsbrqn27sdnrpxfsjtwo') == 92
  assert get_calibration_value_from_line_alpha('9lqmbltfoursnsbrqn27sdnrpxfsjthree') == 93
  assert get_calibration_value_from_line_alpha('9lqmbltfoursnsbrqn27sdnrpxfsjfour') == 94
  assert get_calibration_value_from_line_alpha('9lqmbltfoursnsbrqn27sdnrpxfsjfive') == 95
  assert get_calibration_value_from_line_alpha('9lqmbltfoursnsbrqn27sdnrpxfsjsix') == 96
  assert get_calibration_value_from_line_alpha('9lqmbltfoursnsbrqn27sdnrpxfsjseven') == 97
  assert get_calibration_value_from_line_alpha('9lqmbltfoursnsbrqn27sdnrpxfsjeight') == 98
  assert get_calibration_value_from_line_alpha('9lqmbltfoursnsbrqn27sdnrpxfsjnine') == 99
  
def test_example_inputs():
  spark = SparkSession.builder.appName("day1").getOrCreate()
  assert main(spark, 'day1/part1test.txt').select(F.sum('calibration_value_pt1')).collect()[0][0] == 142
  assert main(spark, 'day1/part2test.txt').select(F.sum('calibration_value_pt2')).collect()[0][0] == 281
  spark.stop()
