const qy = requiere('../DB/dataBase')


module.exports = {

    postItem : async function(item) {
        const query = 'INSERT INTO movimientos (Concept, Amount, Date, type, usuario_ID) Values (?, ?, ?, ?, ?)';
        const result = await qy(query, [item.concept, item.amount, item.date, item.type, item.usuarioID]);
        return result.insertId;
    },
    
    getItems : async function() {
        const query = 'SELECT * from movimientos';
        const allItems = await qy(query);
        return allItems;        
    },

    putItem : async function(id, concept, amount, date, usuarioID) {
        const query = 'UPDATE movimientos SET Concept = ?, Amount = ?, Date = ?, usuario_ID = ? WHERE id = ?';
        const itemModificado = await qy(query, [concept, amount, date, usuarioID, id]);
        return itemModificado;
    },
    
    deleteItem : async function (id) {
        const query = 'SELECT * FROM movimientos WHERE id = ?';
        const itemDeleted = await qy(query, [id]);
        return itemDeleted.affectedRows;
    }

};


