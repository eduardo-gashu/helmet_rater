class SharpResults {
  constructor ( attr ) {
    if(!attr.helmet_name)
      throw new Error(`SharpResults class error: helmet_name is necessary in constructor`);
    this.helmet_name = attr.helmet_name;
    this.total_fatality_risk = attr.total_fatality_risk || null;
    this.predicted_number_of_fatalities = attr.predicted_number_of_fatalities || null;
    this.safety_rating = attr.safety_rating || null;
  }
}

module.exports = SharpResults;