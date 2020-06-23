const { SAMPLING_PERIOD } = require("../preConfig");

module.exports = calculateTimeToValue;

function calculateTimeToValue (records, maximunValues) {
  let keys = [];
  for(let key in records[0]){
    keys.push(key);
  }
  let key = keys[0];

  let time = null;
  for(let i in records) {
    if(foundValue( Number(records[i][key]), Number(maximunValues[`abs_max_${key}`]) )) {
      time = i*SAMPLING_PERIOD;
      break;
    }
  }
  if(time == null){
    throw new Error("calculateTimeToValue error: value not found");
  }
  return {time_to_value:time}
}
function foundValue(query, value) {
  return query == value;
}