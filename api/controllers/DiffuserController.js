/**
 * DiffuserController
 *
 * @description :: Server-side logic for managing diffusers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getDiffusers: function(req, res) {
        DiffuserService.getDiffusers(function(diffusers) {
            res.json(diffusers);
        });
    },
    addDiffuser: function(req, res) {
        var diffuserVal = (req.body) ? req.body : undefined
        DiffuserService.addDiffuser(diffuserVal, function(success) {
            res.json(success);
        });
    },
    getDiffuser: function(req, res) {
        var diffuserVal = (req.params.id) ? req.params.id : undefined
        DiffuserService.getDiffuser(diffuserVal, function(diffuser) {
            res.json(diffuser);
        });
    },
    updateDiffuser: function(req, res) {
        var diffuserVal = (req.body) ? req.body : undefined
        DiffuserService.updateDiffuser(diffuserVal, function(success) {
            res.json(success);
        });
    },
    removeDiffuser: function(req, res) {
       var diffuserVal = (req.body) ? req.body : undefined
        DiffuserService.removeDiffuser(diffuserVal, function(success) {
            res.json(success);
        });
    }
	
};

