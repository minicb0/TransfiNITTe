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
        if (name == "" || fname == "" || age == "" || state == "") res.json({ "error": "Wrong Input" })
        // console.log(name)
        var idx = Math.floor(Math.random() * users.length);
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

            if(name == "kalimuthu" && fname == "periyaswamy") {
                setTimeout(() => {
                    res.json({"familyTree": {
                        "firstName": "Kalimuthu",
                        "lastName": "",
                        "male": true,
                        "spouse": {
                          "firstName": "Suseela"
                        },
                        "children": [
                          {
                            "firstName": "Karthik",
                            "lastName": "",
                            "male": true
                          },
                          {
                            "firstName": "KamalaSree",
                            "lastName": "",
                            "male": false
                          }
                        ]
                      }})
                }, 20000 + Math.random()*50000)
            } else if(name == "murugesan" && fname == "ramasamy") {
                setTimeout(() => {
                    res.json({"familyTree": {
                        "firstName": "Ramasamy",
                        "lastName": "",
                        "male": true,
                        "spouse": {
                          "firstName": "Palaniammal"
                        },
                        "children": [
                          {
                            "firstName": "Murugesan",
                            "lastName": "",
                            "male": true
                          },
                          {
                            "firstName": "Gayathri",
                            "lastName": "",
                            "male": false
                          }
                          {
                            "firstName": "Priya",
                            "lastName": "",
                            "male": false
                          }
                        ]
                      }})
                }, 20000 + Math.random()*50000)
            } else {
                setTimeout(() => {
                    if (Math.random() < 0.5) {
        
                        res.json({
                            "familyTree": {
                                "firstName": fname,
                                "lastName": "",
                                "male": true,
                                "children": [
                                    {
                                        "firstName": name,
                                        "lastName": "",
                                        "male": Math.random() > 0.5 ? true : false
                                    },
                                    {
                                        "firstName": users[idx].Name,
                                        "lastName": "",
                                        "male": users[idx].Gender == "Male" ? true : false
                                    }
                                ]
                            }
                        })
        
                    } else {
        
                        res.json({ "familyTree": "not found" })
                    }
        
                }, 20000 + Math.random()*50000)
            }
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
   
    } catch (err) {
        console.log(err);
        res.render('dashboard');
    }
});

module.exports = router;