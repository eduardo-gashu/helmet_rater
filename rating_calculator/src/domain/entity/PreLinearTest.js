class PreLinearTest{
  constructor(atributes){
    if(!atributes.id)
      throw new Error(`PreLinearTest class error: id is necessary in constructor`);
    this.id = atributes.id;
    this.anvil = atributes.anvil || null;
    this.velocity = atributes.velocity || null;
    this.site = atributes.site || null;

    this.abs_max_resultant_g = atributes.abs_max_resultant_g || null;
    this.time_to_abs_max_resultant_g = atributes.time_to_abs_max_resultant_g || null;
    this.time_over_150g = atributes.time_over_150g || null;
    this.hic = atributes.hic || null;
  }
}

module.exports = PreLinearTest;