/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getTodos: function(req, res) {
        UserService.getTodos(function(todos) {
            res.json(todos);
        });
    },
    addTodo: function(req, res) {
        var todoVal = (req.body) ? req.body : undefined
        UserService.addTodo(todoVal, function(success) {
            res.json(success);
        });
    },
    removeTodo: function(req, res) {
       var todoVal = (req.body) ? req.body : undefined
        UserService.removeTodo(todoVal, function(success) {
            res.json(success);
        });
    }
}

