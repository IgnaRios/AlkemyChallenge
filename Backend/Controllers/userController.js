const { getAllUsers, getUserByID } = require('../Models/usuario');


const controllerUserList = async (req, res) =>{
    try{
        const list = await getAllUsers();

        if(list.length == 0) {
            throw new Error ('No hay usuarios registrados todavía');
        };

        res.status(200).send({'Lista ': list})
    }
    catch(error){
        console.error(error.message);
        res.status(413).send({'Error': error.message})
    };

};

const controllerUserByID = async (req, res) =>{
    try{

        const id = req.params.id;

        const user = await getUserByID(id);

        if(user.length == 0) {
            throw new Error ('No hay usuarios registrados con el ID indicado');
        };

        res.status(200).send({'Usuario ': user})
    }
    catch(error){
        console.error(error.message);
        res.status(413).send({'Error': error.message})
    };

};


module.exports = {
    controllerUserList,
    controllerUserByID,

}