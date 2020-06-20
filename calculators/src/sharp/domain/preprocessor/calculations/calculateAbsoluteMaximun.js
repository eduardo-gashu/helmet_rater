module.exports = calculateAbsoluteMaximun;

function calculateAbsoluteMaximun (records) {
  let absoluteMaximuns = {};

  for(let key in records[0]) {
    absoluteMaximuns[`abs_max_${key}`] = Math.abs(Number(records[0][key]));
  }

  records.forEach(record => {
    for(let key in record) {
      if( absoluteMaximuns[`abs_max_${key}`] < Math.abs(Number(record[key])) ){
        absoluteMaximuns[`abs_max_${key}`] = Math.abs(Number(record[key]));
      }
    }
  });

  return absoluteMaximuns;
}