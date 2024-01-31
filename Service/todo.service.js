const todoController = require('../DL/todo.controller')
const {createNew,readAllActive, readAllDone, readOne, updateTodoById, deleteTodo} = todoController

async function createTodo(data){
    return await todoController.createNew(data)
}

async function getAllTodos(filter){
    let read =  await todoController.readAllActive(filter)
    return read
}

async function getTodoById(id){
    let read =  await todoController.readOne({_id:id})
    return read
}

async function deleteTodoById(id){
    let read =  await todoController.deleteTodo({_id:id})
    return read
}

async function updateDone(id){
    let read =  await todoController.updaeTodoDone({_id:id})
    return read
}

module.exports={createTodo, getAllTodos, getTodoById, deleteTodoById, updateDone}