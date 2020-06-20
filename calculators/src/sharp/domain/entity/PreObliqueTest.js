class PreObliqueTest{
  constructor(atributes){
    if(!atributes.id) throw new Error(`PreObliqueTest class error: id is necessary in constructor`);

    this.id = atributes.id;
    this.velocity = atributes.velocity || null;
    this.site = atributes.site || null;

    this.abs_max_lat_force = atributes.abs_max_lat_force || null;
    this.abs_max_long_force = atributes.abs_max_long_force || null;
    this.abs_max_norm_force = atributes.abs_max_norm_force || null;
  }
}

module.exports = PreObliqueTest;