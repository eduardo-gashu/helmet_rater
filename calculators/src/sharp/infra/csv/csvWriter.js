const fs = require('fs')
const stringify = require('csv-stringify/lib/sync')

module.exports = {
  writeRecords: function (filePath, records) {
    const stringified = stringify(records, {header:true});
    fs.writeFileSync(filePath, stringified);

    return true;
  }
}
