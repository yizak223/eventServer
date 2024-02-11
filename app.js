const express = require('express')
const eventsRouter = require("./routes/events.routes")

const app = express()
app.use(express.json());

app.use('/api/v1/events', eventsRouter)

module.exports = { app }