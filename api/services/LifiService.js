module.exports = {
  getLifis: function(next) {
    Lifi.find().exec(function(err, lifis) {
      if(err) throw err;
      next(lifis);
    });
  },
  getLifi: function(lifiVal, next) {
    Lifi.findOne(lifiVal).exec(function(err, lifi) {
      if(err) throw err;
      next(lifi);
    });
  },
  addLifi: function(lifiVal, next) {
    Lifi.create(lifiVal).exec(function(err, lifi) {
      if(err) throw err;
      next(lifi);
    });
  },
  updateLifi: function(lifiVal, next) {
    Lifi.update(lifiVal.id, lifiVal).exec(function(err, lifi) {
      if(err) throw err;
      next(lifi);
    });
  },
  removeLifi: function(lifiVal, next) {
    Lifi.destroy(lifiVal).exec(function(err, lifi) {
      if(err) throw err;
      next(lifi);
    });
  }
};
