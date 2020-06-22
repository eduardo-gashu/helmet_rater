const preprocess = require("../../../src/app/useCases/preprocess");

test(`It preprocess an 'exemple' helmet`, function(){
  const helmetName = "example";

  const result = preprocess(helmetName);

  expect(result).toBe(true);
})