const router = require("express").Router();
router.get("/say_hello",(req,res) => {
    return res.json({
       message:"helolo"
    });
})