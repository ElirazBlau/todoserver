const todoController = require('../DL/todo.controller')
const {updateDoneAll, createNew,readAllActive, readAllDone, readOne, updateTodoById, deleteTodo, deleteAll} = todoController

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

async function deleteAllToDo(){
    let read =  await todoController.deleteAll()
    return read
}

async function updateDone(id, data) {
    let read = await todoController.updaeTodoDone({ _id: id }, data)
    return read
}

async function updateAllDone(){
    let read =  await todoController.updateDoneAll()
    return read
}

module.exports={updateAllDone, createTodo, getAllTodos, getTodoById, deleteTodoById, updateDone, deleteAllToDo}