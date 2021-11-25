const qy = require('../DB/dataBase');

module.exports = {

    postRegistro : async function(user) {
        const query = 'INSERT INTO usuario (usuario, alias, password) VALUES (?,?,?)';
        const registrarUsuario = await qy(query, [user.user,user.alias, user.password]);
        return registrarUsuario.insertId;
    }

};