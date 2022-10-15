const express = require('express');
const { fillForm } = require('../controllers/indexController');

const router = express.Router();

var Nightmare = require('nightmare')
require('nightmare-evaluate-with-callback')(Nightmare);
const nightmare = Nightmare()
const screenshotSelector = require('nightmare-screenshot-selector');
const fs = require('fs')

Nightmare.action('screenshotSelector', screenshotSelector)

router.get('/', (req, res) => {
    res.render('dashboard');
});

router.post('/fillForm', async (req, res) => {
    try {
        const { name, fname, age, state } = req.body;
        console.log(name)
        var capText = "";
        nightmare
            .goto('https://electoralsearch.in/')
            
            .screenshotSelector('#captchaDetailImg')
            .then((data) => {
                fs.writeFileSync('public/cap.jpg', data);


                capText="";
            })
            .evaluateWithCallback(function (callback) {
                
            })
            // .type('#name1', "kalimuthu")
            // .type('#txtFName', "periyaswamy")
            // .select('#ageList', "number:66")
            // .select('#listGender', "M")
            // .select('#nameStateList', "S22")
            // .then(() => {
            //     console.log("yes");
            // })
            // .click('#btnDetailsSubmit');
        res.render('dashboard');
    } catch (err) {
        console.log(err);
        res.render('dashboard');
    }
});

module.exports = router;