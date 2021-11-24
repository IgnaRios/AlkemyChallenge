const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { getUserByID } = require('../Models/usuario');
const { userRegistration } = require('../Models/registro');


