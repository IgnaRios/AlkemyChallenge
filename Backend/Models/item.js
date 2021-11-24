const qy = require('../DB/dataBase')

module.exports = {

    postItem : async function(item) {
        const query = 'INSERT INTO movimientos (concept, amount, date, type, userID) Values (?, ?, ?, ?, ?)';
        const result = await qy(query, [item.concept, item.amount, item.date, item.type, item.user]);
        return result;
    },
    
    getItems : async function() {
        const query = 'SELECT * from movimientos';
        const allItems = await qy(query);
        return allItems;        
    },

    getItemsByID : async function(id) {
        const query = 'SELECT * from movimientos WHERE id = ?';
        const itemId = await qy(query, [id]);
        return itemId;        
    },

    putItem : async function(id, item) {
        const query = 'UPDATE movimientos SET concept = ?, amount = ?, date = ?, userID = ? WHERE id = ?';
        const itemModificado = await qy(query, [item.concept, item.amount, item.date, item.user, id]);
        return itemModificado;
    },
    
    deletedItem : async function (id) {
        const query = 'DELETE  FROM movimientos WHERE id = ?';
        const itemDeleted = await qy(query, [id]);
        return itemDeleted.affectedRows;
    }

};


