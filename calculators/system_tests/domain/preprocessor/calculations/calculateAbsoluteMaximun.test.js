const {calculateAbsoluteMaximun} = require("../../../../src/domain/preprocessor");

test(`It receive an array of numeric records
      and should return the absolute maximun
      value of each key`, function() {
  const records = [
    {key1: 0, key2:  0, key3:  2},
    {key1: 1, key2: -1, key3:  1},
    {key1: 2, key2: -2, key3:  0},
    {key1: 3, key2: -3, key3: -1},
    {key1: 4, key2: -4, key3: -2},
    {key1: 5, key2: -5, key3: -3}
  ]

  const result = calculateAbsoluteMaximun(records);

  expect(result).toEqual({abs_max_key1: 5, abs_max_key2: 5, abs_max_key3: 3,})
});