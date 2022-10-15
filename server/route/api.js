const User = require("../models/user");
const express = require("express");

//const passportLocalMongoose = require("passport-local-mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 15;

const router = express.Router();
router.post("/create-user", async (req, res) => {
  var success = true;
  var err;
  if (req.body.password == req.body.confirm_password) {
    try {
      let user = await User.findOne({ email: req.body.email });
      if (!user) {
        const new_user = { ...req.body };
        // bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        //     new_user.password = hash;
        // });

        const hashedPassword = await new Promise((resolve, reject) => {
          bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
            if (err) reject(err);
            resolve(hash);
          });
        });
        new_user.password = hashedPassword;
        user = new User(new_user);
        await user.save();
      } else {
        success = false;
      }
    } catch (err) {
      err = err;
      success = false;
    }
  } else {
    success = false;
  }

  if (success) {
    return res.status(200).json({
      success,
      message: "Successfully created!",
    });
  } else {
    return res.status(500).json({
      success,
      message: err,
    });
  }
});

// router.post("/login", async (req,res)=>{
//     var err;

//     const user = await User.findOne({email:req.body.email});

//     if (!user) {
//        err = "User not found"
//     }
//     else{
//         try{

//         }
//         error(err){

//         }

//     }
// })

module.exports = router;
