const db = require('../DL/db')
db.connect()

const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    isActive: {
        type:Boolean,
        default:true
    },
date : {
    type:Date,
    default:Date.now(),
},
isDone: {
    type:Boolean,
    default:false
},
timeForFinish : {
    type:Date
}
})

const todoModel = mongoose.model('todo', todoSchema)

module.exports = todoModel
