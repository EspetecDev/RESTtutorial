'use strict';
module.exports = function(app){

    var todoList = require('../controllers/nodejsController.js');

    // Routes
    app.route('/tasks')
        .get(todoList.getAllTasks)
        .post(todoList.createTask);

    app.route('/tasks/:taskId')
        .get(todoList.getTaskById)
        .put(todoList.updateTaskById)
        .delete(todoList.deleteTaskById)
};