const express = require('express')
const todoRouter = express.Router()
const todoService = require('../Service/todo.service')

todoRouter.get('/', async (req, res)=>{
    try {
     res.send( await todoService.getAllTodos())
    } catch (err) {
       res.status(400).send(err)
    }

})

todoRouter.get('/:id', async (req, res)=>{
    try {
       res.send(await todoService.getTodoById(req.params.id))
    } catch (error) {
         res.status(400).send('todo not found')
    }
})

todoRouter.post('/', async (req, res)=>{
    try {
       res.send(await todoService.createTodo(req.body))
      //  res.status(201).send('ok')
    } catch (err) {
       res.status(400).send(err)
    }
})

todoRouter.delete('/:id', async (req, res)=>{
    try {
       res.send(await todoService.deleteTodoById(req.params.id))
    } catch (err) {
       res.status(400).send(err)
    }
})

todoRouter.put('/:id', async (req, res)=>{
    try {
       res.send(await todoService.updateDone(req.params.id, req.body))
    } catch (err) {
       res.status(400).send(err)
    }
})


module.exports = todoRouter