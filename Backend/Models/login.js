const qy = require('../DB/dataBase');

module.exports = {
    postLogin : async function({usuario}){
        const query = 'SELECT * FROM usuario WHERE usuario = ?';
        const login = await qy(query, [usuario]);
        return login[0];
    }
};