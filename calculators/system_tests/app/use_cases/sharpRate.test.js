const sharpRate = require("../../../src/sharp/app/useCases/sharpRate");

test(`It preprocess an 'exemple' helmet`, function(){
  const helmetName = "example";

  const result = sharpRate(helmetName);

  expect(result).toBe(true);
})