const express = require('express');
const { signup, login, getCurrentUser } = require('../controller/user.controller.js');
const protectRoute = require('../middleware/authMiddleware.js');

const router = express.Router();

router.get('/me', protectRoute, getCurrentUser);
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;