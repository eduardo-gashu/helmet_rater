const parse = require('csv-parse/lib/sync');
const fs = require('fs');

module.exports = {
  getRecords: function (filePath) {
    const content = fs.readFileSync(`${filePath}`, `utf8`);
    // Parse the csv content
    const records = parse(content,{
      columns: true,
      skip_empty_lines: true
    })
    return records;
  }
}
