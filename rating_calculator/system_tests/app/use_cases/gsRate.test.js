const gsRate = require("../../../src/app/useCases/gsRate.js");

test(`It should rate an 'exemple' helmet using G&S Calculating procedure`, function(){
  const helmetName = "example";

  const result = gsRate(helmetName);

  expect(result).toBe(true);
})