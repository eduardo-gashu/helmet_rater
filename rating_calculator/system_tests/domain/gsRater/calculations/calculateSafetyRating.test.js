const {calculateSafetyRating, createGSTests} = require("../../../../src/domain/gsRater");

test(`It should return 5`, function () {
  let gsTests = createGSTests([]);
  for(let i in gsTests) {
    gsTests[i].hic = 299;
  }
  const numberOfFatalities = 154;

  const result = calculateSafetyRating(numberOfFatalities, gsTests);

  const expected = 5;
  expect(result).toBe(expected);
})

test(`It should return 4`, function () {
  let gsTests = createGSTests([]);
  for(let i in gsTests) {
    gsTests[i].hic = 300;
  }
  const numberOfFatalities = 229;

  const result = calculateSafetyRating(numberOfFatalities, gsTests);

  const expected = 4;
  expect(result).toBe(expected);
})

test(`It should return 3`, function () {
  let gsTests = createGSTests([]);
  for(let i in gsTests) {
    gsTests[i].hic = 300;
  }
  const numberOfFatalities = 304;

  const result = calculateSafetyRating(numberOfFatalities, gsTests);

  const expected = 3;
  expect(result).toBe(expected);
})

test(`It should return 2`, function () {
  let gsTests = createGSTests([]);
  for(let i in gsTests) {
    gsTests[i].hic = 300;
  }
  const numberOfFatalities = 379;

  const result = calculateSafetyRating(numberOfFatalities, gsTests);

  const expected = 2;
  expect(result).toBe(expected);
})

test(`It should return 1`, function () {
  let gsTests = createGSTests([]);
  for(let i in gsTests) {
    gsTests[i].hic = 300;
  }
  const numberOfFatalities = 380;

  const result = calculateSafetyRating(numberOfFatalities, gsTests);

  const expected = 1;
  expect(result).toBe(expected);
})