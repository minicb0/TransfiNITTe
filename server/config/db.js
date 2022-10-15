const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin-bhoopesh:bjioknmlp@cluster0.s6slsoh.mongodb.net/userDB", {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error',console.error.bind(console,'Error in connecting db'));
db.once('open', () => {
    console.log('connected to db');
});

//export it
module.exports = db;