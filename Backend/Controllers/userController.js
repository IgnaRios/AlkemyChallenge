const { getAllUsers, getUserByID } = require('../Models/usuario');


const userList = async (req, res) =>{
    try{
        
    }
    catch(error){
        console.error(error.message);
        res.status(413).send({'Error': error.message})
    };

}