module.exports = {
  getOeuvres: function(next) {
    Oeuvre.find().exec(function(err, oeuvres) {
      if(err) throw err;
      next(oeuvres);
    });
  },
  addOeuvre: function(oeuvreVal, next) {
    Oeuvre.create(oeuvreVal).exec(function(err, oeuvre) {
      if(err) throw err;
      next(oeuvre);
    });
  },
  removeOeuvre: function(oeuvreVal, next) {
    Oeuvre.destroy(oeuvreVal).exec(function(err, oeuvre) {
      if(err) throw err;
      next(oeuvre);
    });
  }
};
