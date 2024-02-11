const {app} =require('./app')

const PORT = process.env.PORT || 2000
app.listen(PORT, () => { // listen open port
    console.log(`Server is running on port ${PORT}`)
})
