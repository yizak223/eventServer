const express = require('express')
const eventsRouter = require("./routes/events.routes")
const userRouter = require("./routes/users.routes")


const app = express()
app.use(express.json());

app.use('/api/v1/events', eventsRouter)
app.use('/api/v1/users', userRouter)

module.exports = { app }