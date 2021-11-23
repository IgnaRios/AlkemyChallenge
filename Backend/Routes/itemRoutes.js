const express = require('express');
const router = express.Router();

const controller = require('../Controllers/itemController');

router.post('/', controller.guardarItem);
router.get('/', controller.itemList);
router.get('/:id', controller.item)

module.exports = router ;