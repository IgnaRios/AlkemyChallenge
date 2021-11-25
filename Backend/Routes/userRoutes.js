const express = require('express');
const router = express.Router();

const controller = require('../Controllers/userController');

//rutas user
router.get('/', controller.controllerUserList);
router.get('/:id', controller.controllerUserByID);



module.exports = router;