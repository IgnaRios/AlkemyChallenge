const express = require('express');
const router = express.Router();

const controller = require('../Controllers/itemController');

//ruta item
router.post('/', controller.guardarItem);
router.get('/', controller.itemList);
router.get('/:id', controller.item);
router.put('/:id', controller.modifyItem);

module.exports = router ;