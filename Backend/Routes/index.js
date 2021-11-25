const express = require('express');
const router = express.Router();

const itemRoutes = require('./itemRoutes');
const registroRoutes = require('./registrationRoutes');
const userRoutes = require('./userRoutes')

router.use('/registro', registroRoutes);
router.use('/item', itemRoutes);
router.use('/user', userRoutes);




module.exports = router;