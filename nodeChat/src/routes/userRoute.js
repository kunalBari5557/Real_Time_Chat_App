const express = require('express');

const userController = require('../controllers/user/userController.js');

const router = express.Router();

router.post('/add', userController.add);

module.exports = router;