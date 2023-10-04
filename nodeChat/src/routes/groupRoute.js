const express = require('express');

const groupController = require('../controllers/group/groupController.js');

const router = express.Router();

router.get('/list', groupController.index);

module.exports = router;