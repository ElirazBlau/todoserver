const todoModel = require('../DL/todo.model')

async function createNew(data){
return await todoModel.create(data)
}

async function readOne (filter) {
    return await todoModel.findOne(filter)
}

async function readAllActive(filter){
return await todoModel.find({filter, isActive:true})
}

async function deleteTodo(id){
    return await todoModel.findByIdAndUpdate(id, {isActive: false})
}


async function updateTodoById(id,data){
    return await todoModel.updateOne({_id:id},data)
    }

async function updaeTodoDone(id, data){
    return await todoModel.updateOne({ _id: id }, data)
}

async function readAllDone(filter){
    return await todoModel.find(filter, {isDone:true})
}

module.exports = {createNew,readAllActive, readAllDone, readOne, updateTodoById, deleteTodo, updaeTodoDone}