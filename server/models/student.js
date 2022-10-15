const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    phonoNo: String,
    isSuperUser: Boolean,
    isVerified: Boolean
})

module.exports = mongoose.model('Student', studentSchema)