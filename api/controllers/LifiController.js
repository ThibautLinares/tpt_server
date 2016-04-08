/**
 * LifiController
 *
 * @description :: Server-side logic for managing Lifis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getLifis: function(req, res) {
        LifiService.getLifis(function(lifis) {
            res.json(lifis);
        });
    },
    addLifi: function(req, res) {
        var lifiVal = (req.body) ? req.body : undefined
        LifiService.addLifi(lifiVal, function(success) {
            res.json(success);
        });
    },
    getLifi: function(req, res) {
        var lifiVal = (req.params.id) ? req.params.id : undefined
        LifiService.getLifi(lifiVal, function(lifi) {
            res.json(lifi);
        });
    },
    updateLifi: function(req, res) {
        var lifiVal = (req.body) ? req.body : undefined
        LifiService.updateLifi(lifiVal, function(success) {
            res.json(success);
        });
    },
    removeLifi: function(req, res) {
       var lifiVal = (req.body) ? req.body : undefined
        LifiService.removeLifi(lifiVal, function(success) {
            res.json(success);
        });
    }
};

