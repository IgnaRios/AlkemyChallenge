const express = require('express');
const router = express.Router();

const controller = require('../Controllers/registroController');

//Ruta

router.post('/', controller.regitrationController);

module.exports = router;



