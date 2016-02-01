/**
 * OeuvreController
 *
 * @description :: Server-side logic for managing Oeuvres
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    getOeuvres: function(req, res) {
        OeuvreService.getOeuvres(function(todos) {
            res.json(todos);
        });
    },
    addOeuvre: function(req, res) {
        var oeuvreVal = (req.body) ? req.body : undefined
        OeuvreService.addOeuvre(oeuvreVal, function(success) {
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

