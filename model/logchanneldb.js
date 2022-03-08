const mongoose = require('mongoose')

const Log = new mongoose.Schema({
    guild: String,
    channel: String,
    user: String,
    content: Array 
})

module.exports = mongoose.model("Logchannelset", Log);