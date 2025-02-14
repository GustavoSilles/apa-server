const express = require('express')
const cors = require('cors')
const app = express()

const index = require('./routers/index')
const userRouters = require('./routers/user.routers')
const postRouters = require('./routers/post.routers')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.json({type: 'aplication/vnd.api+json'}))
app.use(cors())

app.use(index)
app.use('/api/', userRouters)
app.use('/api/', postRouters)
module.exports = app