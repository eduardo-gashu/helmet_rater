const {calculateTimeToValue} = require("../../../src/sharp/domain/preprocessor");

test (`It should calculate the time to reach the first occurance of the value`, function () {
  const records = [
    {key:0},
    {key:1},
    {key:2},
    {key:20},
    {key:33},
    {key:20},
  ]
  const value = {"abs_max_key": 20};

  const result = calculateTimeToValue(records, value);

  const expectedTime = 3*0.0625;
  expect(result.time_to_value).toBe(expectedTime);
});

test (`It should return a error message`, function () {
  const records = [
    {key:0},
    {key:1},
    {key:2},
    {key:20},
    {key:33},
    {key:20},
  ]
  const value = {"abs_max_key": 40};

  try {
    calculateTimeToValue(records, value);
    expect(false).toBe(true);
  } catch (error) {
    expect(error).toEqual(Error("calculateTimeToValue error: value not found"));
  }
});