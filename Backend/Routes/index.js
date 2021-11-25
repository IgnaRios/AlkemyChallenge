const express = require('express');
const router = express.Router();

const itemRoutes = require('./itemRoutes');
const registroRoutes = require('./registrationRoutes');


router.use('/registro', registroRoutes);
router.use('/item', itemRoutes);



module.exports = router;