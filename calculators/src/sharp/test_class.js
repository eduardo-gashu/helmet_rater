class Test {
  constructor ( attr ) {
    if( attr.testNumber == undefined ) {
      return console.error('Test Error: no numberTest');
    }
    this.testNumber = attr.testNumber;
    this.anvil = attr.anvil || null;
    this.impactVelocity = attr.impactVelocity || null;
    this.impactLocation = attr.impactLocation || null;

    this.peakAcceleration = attr.peakAcceleration || null;
    this.fatalityRisk = attr.fatalityRisk || null;
    this.impactWeightning = attr.impactWeightning || null;
    this.weightedFatalityRisk = attr.weightedFatalityRisk || null;
  }

  //getters
  getTestNumber() {
    return this.testNumber;
  }
  getAnvil() {
    return this.anvil;
  }
  getImpactVelocity() {
    return this.impactVelocity;
  }
  getImpactLocation() {
    return this.impactLocation;
  }
  getPeakAcceleration() {
    return this.peakAcceleration;
  }
  getFatalityRisk() {
    return this.fatalityRisk;
  }
  getImpactWeightening() {
    return this.impactWeightning;
  }
  getWeightedFatalityRisk() {
    return this.weightedFatalityRisk;
  }

  //setters
  setTestNumber( testNumber ) {
    this.testNumber = testNumber;
  }
  setAnvil( anvil ) {
    this.anvil = anvil;
  }
  setImpactVelocity( impactVelocity ) {
    this.impactVelocity = impactVelocity;
  }
  setImpactLocation( impactLocation ) {
    this.impactLocation = impactLocation;
  }
  setPeakAcceleration( peakAcceleration ) {
    this.peakAcceleration = peakAcceleration;
  }
  setFatalityRisk( fatalityRisk ) {
    this.fatalityRisk = fatalityRisk;
  }
  setImpactWeightening( impactWeightning ) {
    this.impactWeightning = impactWeightning;
  }
  setWeightedFatalityRisk( weightedFatalityRisk ) {
    this.weightedFatalityRisk = weightedFatalityRisk;
  }
}

module.exports = Test;