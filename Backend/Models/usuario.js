const qy = require('../DB/dataBase');

module.exports = {

    getAllUsers : async function(){
        const query = 'SELECT * FROM usuario';
        const userList = await qy(query);
        return userList;
    },

    getUserByID : async function(id){
        const query = 'SELECT * FROM usuario WHERE ID = ?';
        const userID = await qy(query, [id]);
        return userID;
    }
};