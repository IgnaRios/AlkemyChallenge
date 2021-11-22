const {postItem, getItems, putItem, deleteItem} = require('../Models/item');

const guardarItem = async (req, res, next) =>{
    try{
        const item = {
            concept : req.body.concept.toUpperCase(),
            amount : req.body.amount,
            date : req.body.date,
            type : req.body.type,
            user : req.body.userID 
        };

        if(!item.concept || !item.amount || !item.date || !item.type || !item.user){
            throw new Error ('faltan completar datos');
        };

        if(!/^[a-z ]+$/gi.test(item.concept)){
            throw new Error('Simbols and numbers not allowed');
        };

        if(!Number(item.amount)){
            throw new Error('Amout must be a number');
        };

        if(!Number(item.user)){
            throw new Error ('userID must be a number');
        };
     
        const newItem = await postItem(item);

        res.status(200).send({'se ha agregado ': item.concept});

    }
    catch(error){
        console.error(error.message);
        res.status(413).send({'Error': error.message})
    };
};


module.exports = {
    guardarItem
}
