const Point = require('./point');

class XYTable {
  constructor () {
    this.points = [];
  }

  addPoint( point ) {
    this.points.push( point );
    console.log(`points = ${this.points}`);
    return this.getLength()
  }

  getLength() {
    return this.points.length;
  }

  getAllPoints() {
    return this.points;
  }

  sortByX(){
    return this.points.sort( compareX );
  }
}

function compareX (a, b) {
  if(a.x < b.x) {
    return -1;
  }

  if(a.x > b.x) {
    return 1;
  }

  else {
    return 0;
  }
}

module.exports = XYTable;