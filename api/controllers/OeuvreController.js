/**
 * OeuvreController
 *
 * @description :: Server-side logic for managing Oeuvres
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    getOeuvres: function(req, res) {
        OeuvreService.getOeuvres(function(oeuvres) {
            res.json(oeuvres);
        });
    },
    getOeuvre: function(req, res) {
        var oeuvreVal = (req.params.id) ? req.params.id : undefined
        OeuvreService.getOeuvre(oeuvreVal, function(oeuvre) {
            res.json(oeuvre);
        });
    },
    getOeuvreByLifi: function(req, res) {
        var oeuvreVal = (req.params.id) ? req.params.id : undefined
        OeuvreService.getOeuvreByLifi(oeuvreVal, function(oeuvre) {
            res.json(oeuvre);
        });
    },
    getOeuvreByDiffuser: function(req, res) {
        var oeuvreVal = (req.params.id) ? req.params.id : undefined
        OeuvreService.getOeuvreByDiffuser(oeuvreVal, function(oeuvre) {
            res.json(oeuvre);
        });
    },
    addOeuvre: function(req, res) {
        var oeuvreVal = (req.body) ? req.body : undefined
        var oeuvre = JSON.parse(req.param('oeuvre'));
        var type = req.param('type');
        var fs = require("fs");
        var image =  req.file('images');
        var audio =  req.file('audio');
        var video =  req.file('video');
        if(type == 'image'){
            OeuvreService.uploadImage(oeuvre, image, function(callbackOeuvre) {
                console.log("Image");
                oeuvre = callbackOeuvre;

            });

            OeuvreService.uploadAudio(oeuvre, audio, function(callbackOeuvre) {
                console.log("Audio");
                oeuvre = callbackOeuvre;
                
                OeuvreService.addOeuvre(oeuvre, function(success) {
                    console.log("Record");
                    res.json(success);
                });
            });
        }
        else if(type == 'video'){
            OeuvreService.uploadVideo(oeuvre, video, function(oeuvre) {

                OeuvreService.addOeuvre(oeuvre, function(success) {
                    res.json(success);
                });

              });
        }
        else {
                OeuvreService.addOeuvre(oeuvre, function(success) {
                    res.json(success);
                });
        }
    },
    updateOeuvre: function(req, res) {
        console.log("Update");
        var oeuvre = JSON.parse(req.param('oeuvre'));
        var updateImage = req.param('updateImage');
        var updateVideo = req.param('updateVideo');
        var updateAudio = req.param('updateAudio');
        var fs = require("fs");
        if(updateImage == 'true'){
            var image = req.file('images');
            console.log('images');


            if(oeuvre.images[0]) {
                fs.unlink(process.cwd() +'/assets/images/uploads/'+oeuvre.images[0].url, function(err) {
                   if (err) {
                       return console.error(err);
                   }
                   console.log("File deleted successfully!");
                });

                fs.unlink(process.cwd() +'/.tmp/public/images/uploads/'+oeuvre.images[0].url, function(err) {
                   if (err) {
                       return console.error(err);
                   }
                   console.log("File deleted successfully!");
                });
            }

            OeuvreService.uploadImage(oeuvre, image, function(callbackOeuvre) {
                console.log("Image");
                oeuvre = callbackOeuvre;

                OeuvreService.updateOeuvre(oeuvre, function(success) {
                    res.json(success);
                });
            });
        }
                
        else if(updateAudio == 'true') {
            var audio = req.file('audio');
            console.log('audio');

            if(oeuvre.audio) {

                fs.unlink(process.cwd() +'/assets/audios/uploads/'+oeuvre.audio.url, function(err) {
                   if (err) {
                       return console.error(err);
                   }
                   console.log("File deleted successfully!");
                });

                fs.unlink(process.cwd() +'/.tmp/public/audios/uploads/'+oeuvre.audio.url, function(err) {
                   if (err) {
                       return console.error(err);
                   }
                   console.log("File deleted successfully!");
                });
                
            }
            OeuvreService.uploadAudio(oeuvre, audio, function(callbackOeuvre) {
                console.log("Audio");
                oeuvre = callbackOeuvre;
                
                OeuvreService.updateOeuvre(oeuvre, function(success) {
                    res.json(success);
                });
            });
                
        }
        else if(updateVideo == 'true'){
            var video = req.file('video');
            console.log('videos');
            if(oeuvre.video) {
                fs.unlink(process.cwd() +'/assets/videos/uploads/'+oeuvre.video.url, function(err) {
                   if (err) {
                       return console.error(err);
                   }
                   console.log("File deleted successfully!");
                });

                fs.unlink(process.cwd() +'/.tmp/public/videos/uploads/'+oeuvre.video.url, function(err) {
                   if (err) {
                       return console.error(err);
                   }
                   console.log("File deleted successfully!");
                });
            }
            OeuvreService.uploadVideo(oeuvre, video, function(oeuvre) {

                OeuvreService.updateOeuvre(oeuvre, function(success) {
                    res.json(success);
                });

              });
        }
        else {
            OeuvreService.updateOeuvre(oeuvre, function(success) {
                res.json(success);
            });
        }
    },
    removeOeuvre: function(req, res) {
       var oeuvreVal = (req.body) ? req.body : undefined

        var fs = require("fs");
        OeuvreService.removeOeuvre(oeuvreVal, function(success) {

            if(oeuvreVal.video) {
                if(oeuvreVal.video.url) {

                fs.unlink(process.cwd() +'/assets/videos/uploads/'+oeuvreVal.video.url, function(err) {
                   if (err) {
                       return console.error(err);
                   }
                   console.log("File deleted successfully!");
                });

                fs.unlink(process.cwd() +'/.tmp/public/videos/uploads/'+oeuvreVal.video.url, function(err) {
                   if (err) {
                       return console.error(err);
                   }
                   console.log("File deleted successfully!");
                });
               }
            }
            if(oeuvreVal.audio) {
                if(oeuvreVal.audio.url) {

                fs.unlink(process.cwd() +'/assets/audios/uploads/'+oeuvreVal.audio.url, function(err) {
                   if (err) {
                       return console.error(err);
                   }
                   console.log("File deleted successfully!");
                });

                fs.unlink(process.cwd() +'/.tmp/public/audios/uploads/'+oeuvreVal.audio.url, function(err) {
                   if (err) {
                       return console.error(err);
                   }
                   console.log("File deleted successfully!");
                });
               }
            }
           if(oeuvreVal.images) {
               if(oeuvreVal.images[0]) {
                    if(oeuvreVal.images[0].url) {

                    fs.unlink(process.cwd() +'/assets/images/uploads/'+oeuvreVal.images[0].url, function(err) {
                       if (err) {
                           return console.error(err);
                       }
                       console.log("File deleted successfully!");
                    });

                    fs.unlink(process.cwd() +'/.tmp/public/images/uploads/'+oeuvreVal.images[0].url, function(err) {
                       if (err) {
                           return console.error(err);
                       }
                       console.log("File deleted successfully!");
                    });
                   }
                }
            }
            res.json(success);
        });
    }
};

