const {postItem, getItems, putItem, deleteItem} = require('../Models/item');

const guardarItem = async (req, res, next) =>{
    try{
        if(!req.body.concept || !req.body.amount || !req.body.date || !req.body.type || !req.body.userID){
            throw new Error('faltan completar datos')
        }
        
        const item = {
            concept : req.body.concept,
            amount : req.body.amount,
            date : req.body.date,
            type : req.body.type,
            user : req.body.userID 
        } 

        const newItem = postItem(item);

        res.status(200).send({'se ha agregado ': newItem.concept})

    }
    catch(e){
        console.error(e.messege);
        res.status(413).send({'Error': e.messege})
    }
};


module.exports = {
    guardarItem
}
