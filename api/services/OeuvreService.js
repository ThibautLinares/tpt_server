module.exports = {
  getOeuvres: function(next) {
    Oeuvre.find().exec(function(err, oeuvres) {
      if(err) throw err;
      next(oeuvres);
    });
  },
  getOeuvre: function(oeuvreVal, next) {
    Oeuvre.findOne(oeuvreVal).exec(function(err, oeuvre) {
      if(err) throw err;
      next(oeuvre);
    });
  },
  uploadImage: function(oeuvre, image, callback) {

    var fs = require("fs");
    image.upload({
        dirname: process.cwd() + '/assets/images/uploads/'
      },function (err, uploadedFiles) {
        if (err) return err;
        console.log(uploadedFiles.length);
        oeuvre.images = [];
        for(var i = 0; i<uploadedFiles.length;i++) {
            var filename = uploadedFiles[i].fd.substring(uploadedFiles[i].fd.lastIndexOf('/')+1);
            console.log(filename);
            var image = {
                url : filename
            }
            oeuvre.images.push(image);
            var uploadLocation = process.cwd() +'/assets/images/uploads/' + filename;
            var tempLocation = process.cwd() + '/.tmp/public/images/uploads/' + filename;
            fs.createReadStream(uploadLocation).pipe(fs.createWriteStream(tempLocation));
        }
        callback(oeuvre);
      });

  },
  uploadAudio: function(oeuvre, audio, callback) {

    var fs = require("fs");
    
    audio.upload({
        dirname: process.cwd() + '/assets/audios/uploads/'
      },function (err, uploadedFiles) {
        if (err) return err;
        console.log(uploadedFiles.length);
        var filename = uploadedFiles[0].fd.substring(uploadedFiles[0].fd.lastIndexOf('/')+1);
        console.log(filename);
        var audio = {
            url : filename
        }
        oeuvre.audio = audio;
        var uploadLocation = process.cwd() +'/assets/audios/uploads/' + filename;
        var tempLocation = process.cwd() + '/.tmp/public/audios/uploads/' + filename;
        fs.createReadStream(uploadLocation).pipe(fs.createWriteStream(tempLocation));
        
        callback(oeuvre);
      });
  },
  uploadVideo: function(oeuvre, video, callback) {

    var fs = require("fs");
    
    video.upload({
        dirname: process.cwd() + '/assets/videos/uploads/'
      },function (err, uploadedFiles) {
        if (err) return err;
        console.log(uploadedFiles.length);
        var filename = uploadedFiles[0].fd.substring(uploadedFiles[0].fd.lastIndexOf('/')+1);
        console.log(filename);
        var video = {
            url : filename
        }
        oeuvre.video = video;
        var uploadLocation = process.cwd() +'/assets/videos/uploads/' + filename;
        var tempLocation = process.cwd() + '/.tmp/public/videos/uploads/' + filename;
        fs.createReadStream(uploadLocation).pipe(fs.createWriteStream(tempLocation));
        
        callback(oeuvre);
      });
  },
  getOeuvreByLifi: function(oeuvreVal, next) {
    Oeuvre.find({lifi:oeuvreVal}).exec(function(err, oeuvre) {
      if(err) throw err;
      next(oeuvre);
    });
  },
  getOeuvreByDiffuser: function(oeuvreVal, next) {
    Oeuvre.find({diffuser:oeuvreVal}).exec(function(err, oeuvre) {
      if(err) throw err;
      next(oeuvre);
    });
  },
  addOeuvre: function(oeuvreVal, next) {
    Oeuvre.create(oeuvreVal).exec(function(err, oeuvre) {
      if(err) throw err;
      next(oeuvre);
    });
  },
  updateOeuvre: function(oeuvreVal, next) {
    Oeuvre.update(oeuvreVal.id, oeuvreVal).exec(function(err, oeuvre) {
      if(err) throw err;
      next(oeuvre);
    });
  },
  removeOeuvre: function(oeuvreVal, next) {
    Oeuvre.destroy(oeuvreVal.id).exec(function(err, oeuvre) {
      if(err) throw err;
      next(oeuvre);
    });
  }
};
