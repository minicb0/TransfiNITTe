const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: String,
    description: String,
    roles: [{
        name: String,
        stipend: String
    }]
})

module.exports = mongoose.model('Company', companySchema)