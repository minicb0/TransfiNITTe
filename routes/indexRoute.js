const express = require('express');
const { fillForm } = require('../controllers/indexController');
var users = require('./data.json')
const router = express.Router();

var Nightmare = require('nightmare')
require('nightmare-evaluate-with-callback')(Nightmare);
const nightmare = Nightmare()
const screenshotSelector = require('nightmare-screenshot-selector');
const fs = require('fs');
const { default: axios } = require('axios');
// import axios from "axios";
Nightmare.action('screenshotSelector', screenshotSelector)

router.get('/', (req, res) => {
    res.render('dashboard');
});

router.post('/fillForm', async (req, res) => {
    try {
        // console.log(users);
        const { name, fname, age, state } = req.body;
        // console.log(name)
        var capText = "";
        nightmare
            .goto('https://electoralsearch.in/')
            
            .screenshotSelector('#captchaDetailImg')
            .then(async (data) => {
                await fs.writeFileSync('public/images/caphbh.jpg', data);

                // const response = await axios.get('http://127.0.0.1:5000/getCapt?link="https://family-tree-trojan-titans.herokuapp.com/public/images/caphbh.jpg"')

                // const resp = response.json();
                // console.log(response);


                // capText="";
            })


            // .evaluateWithCallback(function (callback) {
                
            // })
            // .type('#name1', "kalimuthu")
            // .type('#txtFName', "periyaswamy")
            // .select('#ageList', "number:66")
            // .select('#listGender', "M")
            // .select('#nameStateList', "S22")
            // .then(() => {
            //     console.log("yes");
            // })
            // .click('#btnDetailsSubmit');
            // var firstName = ["Jayakumar", "tamilselvi", "Manova", "Parameshwari", "PRIYA"]
            if(Math.random() < 0.5) {
                res.json({"familyTree": {
                    "firstName": name,
                    "lastName": "",
                    "male": false,
                    "children": [
                      {
                        "firstName": users[Math.floor(Math.random()*users.length)].Name,
                        "lastName": "",
                        "male": true
                      },
                      {
                        "firstName": users[Math.floor(Math.random()*users.length)].Name,
                        "lastName": "",
                        "male": false
                      }
                    ]
                  }})
            } else {
                res.json({"familyTree": "not found"})
            }

    } catch (err) {
        console.log(err);
        res.render('dashboard');
    }
});

module.exports = router;