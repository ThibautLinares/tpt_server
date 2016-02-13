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
    addOeuvre: function(req, res) {
        var oeuvreVal = (req.body) ? req.body : undefined
        OeuvreService.addOeuvre(oeuvreVal, function(success) {
            res.json(success);
        });
    },
    updateOeuvre: function(req, res) {
        var oeuvreVal = (req.body) ? req.body : undefined
        OeuvreService.updateOeuvre(oeuvreVal, function(success) {
            res.json(success);
        });
    },
    removeOeuvre: function(req, res) {
       var oeuvreVal = (req.body) ? req.body : undefined
        OeuvreService.removeOeuvre(oeuvreVal, function(success) {
            res.json(success);
        });
    }
};

