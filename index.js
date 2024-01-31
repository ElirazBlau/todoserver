const express = require('express')
const cors = require('cors')

const app = express()
require('dotenv').config()

const db = require('./db')
db.connect()

app.use(express.json())
app.use(cors())

const userRouter = require('./user/user.router')
app.use('/user', userRouter)

const itemRouter = require('./item/item.router')
app.use('/item', itemRouter)


app.listen(2555,()=>console.log("🪂Server is up"))
