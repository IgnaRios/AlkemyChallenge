const bcrypt = require('bcrypt');


const { getUserByAlias, getUserByUser } = require('../Models/usuario');
const { postRegistro } = require('../Models/registro');


const regitrationController =  async (req, res) => {
    try{
        
        if(!req.body.usuario || !req.body.alias || !req.body.password){
            throw new Error  ('Es necesario completar todos los campos')
        };

        const  encryptePassword = await bcrypt.hash(req.body.password, 10);
        
        const user = {
            user : req.body.usuario,
            alias : req.body.alias,
            password : encryptePassword
        };

        const mailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(!mailRegex.test(user.user)){
            throw new Error('El mail es inválido')
        };
        
        let consulta = await getUserByUser(user.user);

        if(consulta.length > 0) {{
            throw new Error('Ese usuario ya se encuentra registrado')
        }};

        consulta = await getUserByAlias(user.alias);

        if(consulta.length > 0) {{
            throw new Error('Ese alias ya se encuentra registrado')
        }};
        

        const registro = await postRegistro(user);
        
        res.status(200).send({'Muchas Gracias por registrarte! ' : user.alias});

    }
    catch(error){
        console.error(error.message);
        res.status(413).send({'Error ': error.message});
    }
};

module.exports = {
    regitrationController
}