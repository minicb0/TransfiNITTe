const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    phoneNo: String,
    department: String,
    isSuperUser: Boolean,
    isVerified: Boolean,
    isPlaced:Boolean
})

module.exports = mongoose.model('User', studentSchema);