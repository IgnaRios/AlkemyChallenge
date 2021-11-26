const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { postLogin } = require('../Models/login');

const controllerLogin = async (req, res ) => {

    try{

        if(!req.body.usuario || !req.body.password){
            throw new Error ('Es necesario completar todos los datos');
        };

        const user = {
            usuario : req.body.usuario,
            password : req.body.password
        }
        let consulta = await postLogin(user);
        
        console.log(user);
        console.log(consulta);

        if(consulta.length == 0 ){
            throw new Error ('Usuario y/o contraseña incorrectos');
        }

        if(!bcrypt.compareSync(consulta.password, user.password)){
            throw new Error('Usuario y/o contraseña incorrectos');
        };
        /*
        const tokenData = {
            user: consulta.usuario,
            alias : consulta.alias,
            user_id: consulta.ID
        };

        console.log(tokenData);
        */
        const token = jwt.sign(consulta, 'Secret', {
            expiresIn: 60 * 60 * 24 
        });

        res.statius(200).send({token});

    }
    catch(error){
        console.error(error.mesagge);
        res.status(413).send({'Error ': error.mesagge})
    }


};

module.exports = {
    controllerLogin
}