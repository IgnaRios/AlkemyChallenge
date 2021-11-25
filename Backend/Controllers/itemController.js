const {postItem, getItems, getItemsByID, putItem, deletedItem} = require('../Models/item');

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
            throw new Error('Símbolos y números no permitidos');
        };

        if(!Number(item.amount)){
            throw new Error('El monto ingresado no es un número');
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

        if(itemId.length == 0 ){
            throw new Error ('Ese movimiento no existe');
        };

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
        type : req.body.type, 
        user : req.body.userID
        };

        const itemId = await getItemsByID(id);

        if(itemId[0].type !== item.type){
            throw new Error('No se puede modificar el tipo de movimiento ')
        };        

        if(!item.concept || !item.amount || !item.date || !item.user){
            throw new Error ('faltan completar datos');
        };

        if(!/^[a-z ]+$/gi.test(item.concept)){
            throw new Error('Símbolos y números no permitidos');
        };

        if(!Number(item.amount)){
            throw new Error('El monto ingresado no es un número');
        };

        if(!Number(item.user)){   // probar con nombre más que con el N° de ID del usuario
            throw new Error ('userID must be a number');
        };

        const actualizarItem = await putItem(id, item);

        res.status(200).send({'Se ha modificado con éxito ': item.concept})

    }
    catch(error){
        console.error(error.message);
        res.status(413).send({'Error' : error.message});
    };
};

const deleteItem = async(req, res) => {
    
    try{
        const id = req.params.id;

        const borrarItem = await deletedItem(id);

        res.status(200).send('se ha borrado con éxito el movimiento' );
    }
    catch(error){
        console.log(error.message);
        res.status(413).send({'Error' : error.message})
    };
};

module.exports = {
    guardarItem, 
    itemList,
    item,
    modifyItem,
    deleteItem
};
