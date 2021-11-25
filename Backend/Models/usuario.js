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
    },

    getUserByUser : async function(user){
        const query = 'SELECT * FROM usuario WHERE usuario = ?';
        const userID = await qy(query, [user]);
        return userID;
    },

    getUserByAlias : async function(alias){
        const query = 'SELECT * FROM usuario WHERE alias = ?';
        const userID = await qy(query, [alias]);
        return userID;
    }



};