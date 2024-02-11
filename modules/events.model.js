const mongoose = require('mongoose');

const eventScheme = new mongoose.Schema({
    id: { type: String, required: false },
    title: { type:String, required: false },
    description: { type:String, required: false },
    date: { type:String, required: false },
    time: { type:String, required: false, default: new Date() }
}) 

const Event = mongoose.model('Event',eventScheme)
module.exports = {Event}