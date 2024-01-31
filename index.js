const express = require('express')
const cors = require('cors')

const app = express()
require('dotenv').config()

const db = require('./DL/db')
db.connect()

app.use(express.json())
app.use(cors())

const userRouter = require('./Router/user.router')
app.use('/user', userRouter)

const todoRouter = require('./Router/todo.router')
app.use('/todo', todoRouter)


app.listen(2555,()=>console.log("🪂Server is up"))
