const {calculateSafetyRating, createSharpTests} = require("../../../../src/domain/sharpRater");

test(`It should return 5`, function () {
  let sharpTests = createSharpTests([]);
  for(let i in sharpTests) {
    sharpTests[i].peak_acceleration = 299;
  }
  const numberOfFatalities = 154;

  const result = calculateSafetyRating(numberOfFatalities, sharpTests);

  const expected = 5;
  expect(result).toBe(expected);
})

test(`It should return 4`, function () {
  let sharpTests = createSharpTests([]);
  for(let i in sharpTests) {
    sharpTests[i].peak_acceleration = 300;
  }
  const numberOfFatalities = 154;

  const result = calculateSafetyRating(numberOfFatalities, sharpTests);

  const expected = 4;
  expect(result).toBe(expected);
})

test(`It should return 4`, function () {
  let sharpTests = createSharpTests([]);
  for(let i in sharpTests) {
    sharpTests[i].peak_acceleration = 300;
  }
  const numberOfFatalities = 229;

  const result = calculateSafetyRating(numberOfFatalities, sharpTests);

  const expected = 4;
  expect(result).toBe(expected);
})

test(`It should return 3`, function () {
  let sharpTests = createSharpTests([]);
  for(let i in sharpTests) {
    sharpTests[i].peak_acceleration = 300;
  }
  const numberOfFatalities = 304;

  const result = calculateSafetyRating(numberOfFatalities, sharpTests);

  const expected = 3;
  expect(result).toBe(expected);
})

test(`It should return 2`, function () {
  let sharpTests = createSharpTests([]);
  for(let i in sharpTests) {
    sharpTests[i].peak_acceleration = 300;
  }
  const numberOfFatalities = 379;

  const result = calculateSafetyRating(numberOfFatalities, sharpTests);

  const expected = 2;
  expect(result).toBe(expected);
})

test(`It should return 1`, function () {
  let sharpTests = createSharpTests([]);
  for(let i in sharpTests) {
    sharpTests[i].peak_acceleration = 300;
  }
  const numberOfFatalities = 380;

  const result = calculateSafetyRating(numberOfFatalities, sharpTests);

  const expected = 1;
  expect(result).toBe(expected);
})