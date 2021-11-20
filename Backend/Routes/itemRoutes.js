const express = require('express');
const router = express.Router();

const controller = require('../Controllers/itemController');

router.post('/', controller.guardarItem);


module.exports = { router };