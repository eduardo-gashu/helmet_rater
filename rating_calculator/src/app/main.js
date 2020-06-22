const preprocess = require("./useCases/preprocess");
const sharpRate = require("./useCases/sharpRate");
const prompt = require("prompt")

prompt.start();

prompt.get(['helmetName'], function (err, result) {
  if (err) { return onErr(err); }
  console.log('"Please enter the helmet name":');
  console.log('  Helmet Name: ' + result.helmetName);
  preprocess(result.helmetName);
  sharpRate(result.helmetName);
  console.log(`The outputs can be found in rating_calculator/data/${result.helmetName}`);
});

function onErr(err) {
  console.log(err);
  return 1;
}
