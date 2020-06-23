const { HIC_DELTA_T, SAMPLING_PERIOD } = require("../preConfig");

const NUMBER_OF_PERIODS = HIC_DELTA_T/SAMPLING_PERIOD;
const NUMBER_OF_SAMPLES = NUMBER_OF_PERIODS+1;

module.exports = calculateHIC;

function calculateHIC (records) {
  let hicMax = 0;
  let iterations = lengthOf(records)-NUMBER_OF_PERIODS;
  if(iterations < 0) {
    iterations = 1;
  }
  for(let i = 0; i < iterations; i++) {
    let samples = records.slice(i, i + NUMBER_OF_SAMPLES);
    let hic = localHic(samples);
    if(hicMax < hic) {
      hicMax = hic;
    }
  }
  return {hic: hicMax};
}

function lengthOf (obj) {
  return Object.keys(obj).length;
}

function localHic (records) {
  let mean = meanValue(records);
  let result = ( Math.pow(mean,2.5) )*(HIC_DELTA_T/1000);
  return result;
}
function meanValue (records) {
  let sum = sumElements(records);
  return sum/NUMBER_OF_SAMPLES;
}
function sumElements(records) {
  let keys = [];
  for(let key in records[0]){
    keys.push(key);
  }
  let key = keys[0];

  let sum = 0;
  for(let record of records){
    sum += Number(record[key]);
  }

  return sum;
}