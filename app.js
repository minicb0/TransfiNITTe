const express = require('express');
const session = require("express-session");
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// setting view engine
app.set('view engine', 'ejs');

// load assets
app.use('/public', express.static("public"))

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'thisisasecret',
    saveUninitialized: false,
    resave: false
}));

app.use(require('./routes/indexRoute'));

// 404 page
app.get('*', (req, res) => {
    res.status(404).render('404')
})

app.listen(port, () => {
    console.log(`listening on port : ${port}`);
})