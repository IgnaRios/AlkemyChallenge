const express = require('express');
const router = express.Router();

const controller = require('../Controllers/userController');

//rutas user
router.get('/', controller.controllerUserList);
router.get('/:id', controller.controllerUserByID);
router.get('/:user', controller.controllerUserByUser);
router.get('/:alias', controller.controllerUserByAlias);


module.exports = router;