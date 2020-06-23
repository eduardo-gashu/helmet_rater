const { SAMPLING_PERIOD } = require("../preConfig");

const THRESHOLD = 150; //g

module.exports = calculateTimeOver150g;

function calculateTimeOver150g(records) {
  let keys = [];
  for(let key in records[0]){
    keys.push(key);
  }
  const key = keys[0];

  let recordsOverThreshold = 0;
  for(let record of records){
    if(record[key] > THRESHOLD){
      recordsOverThreshold++;
    }
  }
  const timeOverThreshold = recordsOverThreshold*SAMPLING_PERIOD;
  return {time_over_threshold: timeOverThreshold}
}