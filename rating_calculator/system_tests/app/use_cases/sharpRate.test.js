const sharpRate = require("../../../src/app/useCases/sharpRate");

test(`It should rate an 'exemple' helmet using Sharp Calculating procedure`, function(){
  const helmetName = "example";

  const result = sharpRate(helmetName);

  expect(result).toBe(true);
})