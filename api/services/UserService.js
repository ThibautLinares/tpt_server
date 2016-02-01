module.exports = {
  getTodos: function(next) {
    User.find().exec(function(err, todos) {
      if(err) throw err;
      next(todos);
    });
  },
  addTodo: function(todoVal, next) {
    User.create(todoVal).exec(function(err, todo) {
      if(err) throw err;
      next(todo);
    });
  },
  removeTodo: function(todoVal, next) {
    User.destroy(todoVal).exec(function(err, todo) {
      if(err) throw err;
      next(todo);
    });
  }
};