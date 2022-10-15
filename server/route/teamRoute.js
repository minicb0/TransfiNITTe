const express = require('express');
const { createTeam } = require('../controllers/teamController');
const { register, login, newInfo } = require('../controllers/userController');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

router.post('/createTeam', createTeam);
router.post('/addMembers', addMembers);
router.post('/addMembers', addMembers);
//router.post('/newInfo', verifyToken, newInfo)

module.exports = router;