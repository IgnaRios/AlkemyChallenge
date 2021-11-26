const express = require('express');
const router = express.Router();

const controller  = require('../Controllers/loginController');

router.post('/', controller.controllerLogin);

module.exports = router;