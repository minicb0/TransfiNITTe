var Nightmare = require('nightmare')
var { PythonShell } = require('python-shell')
const nightmare = Nightmare()
const screenshotSelector = require('nightmare-screenshot-selector');
const fs = require('fs')

Nightmare.action('screenshotSelector', screenshotSelector)

function solve() {
    try {
        const timer = setTimeout(() => {
           console.log((`Promise timed out after 5000 ms`));
           return;
        }, 5000);
        const { spawn } = require("child_process");
        const python = spawn("scripts/env/bin/python3", ["scripts/cap.py"]);
        python.stdout.on("data", (data) => {
            console.log(data.toString());
            clearTimeout(timer);
        });
        python.stderr.on("data", function (data) {
            console.log(`Error: ${data}`);
            clearTimeout(timer);
        });
    } catch(err) {
        console.log(err)
    }
} 

exports.fillForm = async (req, res) => {
    try {
        const { name, fname, age, state } = req.body;
        console.log(name, fname)
        // nightmare
        //     .goto('https://electoralsearch.in/')
        //     // .type('#name1', "kalimuthu")
        //     // .type('#txtFName', "periyaswamy")
        //     // .select('#ageList', "number:66")
        //     // .select('#listGender', "M")
        //     // .select('#nameStateList', "S22")
        //     .screenshotSelector('#captchaDetailImg')
        //     .then((data) => {
        //         fs.writeFileSync('public/cap.jpg', data);

        //     })
        // .click('#btnDetailsSubmit')
        res.render('dashboard');
    } catch (err) {
        console.log(err);
        res.render('dashboard');
    }
}