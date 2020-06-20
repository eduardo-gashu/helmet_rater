const preprocess = require("../../../src/sharp/app/useCases/preprocess");
const csvReader = require("../../../src/sharp/infra/csvReader");

test(`It preprocess an 'exemple' helmet`, function(){
  const helmetName = "example";

  preprocess(helmetName);

})