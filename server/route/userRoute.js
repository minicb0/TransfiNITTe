const express = require('express');
const { createUser } = require('../controllers/userController');
const { createTeam } = require('../controllers/teamController');
const { register, login, newInfo } = require('../controllers/userController');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
//router.post('/newInfo', verifyToken, newInfo)

module.exports = router;