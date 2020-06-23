const {calculateTimeOver150g} = require("../../../../src/domain/preprocessor");
const {SAMPLING_PERIOD} = require("../../../../src/domain/preprocessor/preConfig");

test (`It should calculate the time where R>150g, returning 3*0.0625`, function () {
  const records = [
    {g:0},
    {g:1},
    {g:151},
    {g:151},
    {g:151},
    {g:20},
  ];

  const result = calculateTimeOver150g(records);

  const expectedTime = 3*SAMPLING_PERIOD;
  expect(result.time_over_threshold).toBe(expectedTime);
});


test (`It should return 0`, function () {
  const records = [
    {g:0},
    {g:1},
    {g:50},
    {g:20},
    {g:150},
    {g:20},
  ];

  const result = calculateTimeOver150g(records);

  const expectedTime = 0;
  expect(result.time_over_threshold).toBe(expectedTime);
});
