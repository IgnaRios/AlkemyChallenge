const qy = require('../DB/dataBase');

module.exports = {

    userRegistration : async function(user) {
        const query = 'INSERT INTO usuario (usuario, password) VALUES (?,?)';
        const registrarUsuario = await qy(query, [user.user, user.password]);
        return registrarUsuario.insertId;
    }

};