const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    name: String,
    description: String,
    members: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    messages: [{
        sentBy: mongoose.Schema.Types.ObjectId,
        date: Date,
        message: String,
    }],
    createdOn: Date
})

module.exports = mongoose.model('Team', teamSchema)