const express = require('express');
const router = require('./itemRoutes');
const ruter = express.Router();

const itemRoutes = require('./itemRoutes');


router.use('/item', itemRoutes);

module.exports = router;