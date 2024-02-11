const { app } = require('./app')
const mongoose = require('mongoose')
const mongoUrl = 'mongodb://localhost:27017/EventServer'

mongoose.connect(mongoUrl)
    .then(() => {
        console.log('connected to db');
    }).catch(err => {
        console.log(err);
    })

const PORT = process.env.PORT || 2000
app.listen(PORT, () => { // listen open port
    console.log(`Server is running on port ${PORT}`)
})
