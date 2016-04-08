module.exports = {
  getDiffusers: function(next) {
    Diffuser.find().exec(function(err, diffusers) {
      if(err) throw err;
      next(diffusers);
    });
  },
  getDiffuser: function(diffuserVal, next) {
    Diffuser.findOne(diffuserVal).exec(function(err, diffuser) {
      if(err) throw err;
      next(diffuser);
    });
  },
  addDiffuser: function(diffuserVal, next) {
    Diffuser.create(diffuserVal).exec(function(err, diffuser) {
      if(err) throw err;
      next(diffuser);
    });
  },
  updateDiffuser: function(diffuserVal, next) {
    Diffuser.update(diffuserVal.id, diffuserVal).exec(function(err, diffuser) {
      if(err) throw err;
      next(diffuser);
    });
  },
  removeDiffuser: function(diffuserVal, next) {
    Diffuser.destroy(diffuserVal).exec(function(err, diffuser) {
      if(err) throw err;
      next(diffuser);
    });
  }
};
