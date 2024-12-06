from pyspark.sql import SparkSession, DataFrame
import pyspark.sql.functions as F  

import main

def test_example_inputs():
  spark = SparkSession.builder.appName("day1").getOrCreate()
  assert main.main(spark, 'day2/part1test.txt').select(F.sum('calibration_value_pt1')).collect()[0][0] == 8
  # assert main.main(spark, 'day2/part2test.txt').select(F.sum('calibration_value_pt2')).collect()[0][0] == 291
  spark.stop()