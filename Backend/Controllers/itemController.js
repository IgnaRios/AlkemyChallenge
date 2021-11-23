const {postItem, getItems, getItemsByID, putItem, deleteItem} = require('../Models/item');

const guardarItem = async (req, res) =>{
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

        if(!Number(item.user)){   // probar con nombre más que con el N° de ID del usuario
            throw new Error ('userID must be a number');
        };
     
        const newItem = await postItem(item);

        res.status(200).send({'se ha agregado ': item.concept});

    }
    catch(error){
        console.error(error.message);
        res.status(413).send({'Error': error.message});
    };
};

const itemList = async (req, res) =>{
    
   try{ 
        const list = await getItems();

        if(list.length == 0 ){
            throw new Error ('No tenés movimientos cargados todavía');
        };
        
        res.status(200).send({list});
    }
    catch(error){
        console.error(error.message);
        res.status(413).send({'Error': error.message});
    };
};

const item = async (req, res) =>{
    
    try{ 
        const id = req.params.id;

        const itemId = await getItemsByID(id);

        res.status(200).send({'Item' : itemId});

        
     }
     catch(error){
         console.error(error.message);
         res.status(413).send({'Error': error.message});
     };
};

const modifyItem = async (req, res) => {

    try{
        const id = req.params.id;

        const item = {
        concept : req.body.concept.toUpperCase(),
        amount : req.body.amount,
        date : req.body.date,
        user : req.body.userID
        };

        if(!item.concept || !item.amount || !item.date || !item.user){
            throw new Error ('faltan completar datos');
        };

        if(!/^[a-z ]+$/gi.test(item.concept)){
            throw new Error('Simbols and numbers not allowed');
        };

        if(!Number(item.amount)){
            throw new Error('Amout must be a number');
        };

        if(!Number(item.user)){   // probar con nombre más que con el N° de ID del usuario
            throw new Error ('userID must be a number');
        };

        const actualizarItem = await putItem(id, item);

        res.status(200).send({'Se ha actualizado correctamente ' : item.concept})

    }
    catch(error){
        console.error(error.message);
        res.status(413).send({'Error' : error.message});
    };
};

module.exports = {
    guardarItem, 
    itemList,
    item,
    modifyItem
};
