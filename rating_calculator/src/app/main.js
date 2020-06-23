const preprocess = require("./useCases/preprocess");
const sharpRate = require("./useCases/sharpRate");
const gsRate = require("./useCases/gsRate");
const now = require("performance-now")
const prompt = require("prompt")

prompt.start();

console.log(`Hello! This is the Motorcycle Helmet's Safety Rating Calculator`);
console.log(`Please enter the helmet that you want to rate`);
console.log(`And choose the calculation method: sharp, gs or all`);

prompt.get(['helmetName', 'ratingMethod'], function (err, result) {
  let t1 = now();
  if (err) { return onErr(err); }
  console.log('  Helmet Name: ' + result.helmetName);
  console.log('  Rating Method: ' + result.ratingMethod);
  preprocess(result.helmetName);
  switch(result.ratingMethod.toUpperCase()){
    case "SHARP":
      sharpRate(result.helmetName);
      break;
    case "GS":
      gsRate(result.helmetName);
      break;
    case "ALL":
      sharpRate(result.helmetName);
      gsRate(result.helmetName);
      break;
    default:
      console.log(`Rating method ${result.ratingMethod} not found.`);
      return;
  }
  let t2 = now();
  console.log("Processing time " + (t2 - t1) + " milliseconds.");
  console.log(`The outputs can be found in rating_calculator/data/${result.helmetName}`);
});

function onErr(err) {
  console.log(err);
  return 1;
}
