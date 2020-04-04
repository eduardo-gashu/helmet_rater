const Point = require('./point');

class XYTable {
  constructor () {
    this.points = [];
  }

  addPoint( point ) {
    this.points.push( point );
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

  aproximateY(x) {
    const {lower, upper} = this.findXInterval(x);
    return Point.interpolateY(x, lower, upper);;
  }

  findXInterval (x) {
    if( this.isEmpty() ) {
      return 'error'
    }

    const sorted = this.sortByX();
    let lower;
    let upper;
    let i = 0;
    do{
      lower = sorted[i];
      upper = sorted[i+1];
      i++;
    } while ( upper.x < x )

    return { lower:new Point( {x: lower.x, y: lower.y} ), upper: new Point( {x: upper.x, y: upper.y} ) };
  }

  isEmpty() {
    return ( this.getLength() == 0 );
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