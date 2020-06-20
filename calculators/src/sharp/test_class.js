class Test {
  constructor ( attr ) {
    if( attr.testNumber == undefined ) {
      throw('Test Error: no numberTest');
    }
    this.testNumber = attr.testNumber;
    this.anvil = attr.anvil || null;
    this.impactVelocity = attr.impactVelocity || null;
    this.impactSite = attr.impactSite || null;

    this.peakAcceleration = attr.peakAcceleration || null;
    this.fatalityRisk = attr.fatalityRisk || null;
    this.impactWeighting = attr.impactWeighting || null;
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
  getImpactSite() {
    return this.impactSite;
  }
  getPeakAcceleration() {
    return this.peakAcceleration;
  }
  getFatalityRisk() {
    return this.fatalityRisk;
  }
  getImpactWeighting() {
    return this.impactWeighting;
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
  setImpactSite( impactSite ) {
    this.impactSite = impactSite;
  }
  setPeakAcceleration( peakAcceleration ) {
    this.peakAcceleration = peakAcceleration;
  }
  setFatalityRisk( fatalityRisk ) {
    this.fatalityRisk = fatalityRisk;
  }
  setImpactWeighting( impactWeighting ) {
    this.impactWeighting = impactWeighting;
  }
  setWeightedFatalityRisk( weightedFatalityRisk ) {
    this.weightedFatalityRisk = weightedFatalityRisk;
  }
}

module.exports = Test;