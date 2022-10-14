const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.createUser = async(req, res) => {
    return res.status(200).json({
        message: 'success',
    });
}
exports.register = async(req, res) => {
    const { email, password, name, type } = req.body;
    if (!email || !password || !name || !type) {
        res.status(400).json({
            message: "Required field missing",
        })
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    try {
        const user_doc = await User.find({'mail' : email}).lean().exec();

        if (user_doc.length !== 0) {
            return res.status(400).json({
                message: 'User already exists!'
            })
        }

        const created = await User.create({
            mail: email,
            password: encryptedPassword,
            name: name,
            department: department
        });

        const token = jwt.sign({ user_id: created._id, email },
            process.env.TOKEN_KEY, { expiresIn: "2h" }
        );

        return res.status(200).json({
            message: 'Success!',
            apiToken: token,
            type: type,
            id: created._id
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal server error!',
            data: err,
        });
    }
}



exports.login = async(req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({
            message: "Required field missing",
        })
    }

    try {
        const user_doc = await User.findOne({ 'mail': email }).lean().exec();

        if (user_doc && (await bcrypt.compare(password, user_doc.password))) {

            const token = jwt.sign({ user_id: user_doc._id, email },
                process.env.TOKEN_KEY, {
                    expiresIn: "2h",
                }
            );

            return res.status(200).json({
                message: "Successfully logged In!",
                apiToken: token,
                type: user_doc.type,
                id: user_doc._id
            });
        }

        return res.status(400).send({
            message: "Invalid creds!"
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal server error!',
            data: err,
        });
    }
}

/*
exports.newInfo = async (req, res) => {
    res.status(200).json({
        req: req.user
    })
}*/
exports.showProfile = (req,res) => {
    
};