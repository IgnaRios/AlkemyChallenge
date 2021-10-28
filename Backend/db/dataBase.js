const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'alkemi_presupuestopersonal'
})

connection.connect((eror) => {
    if(error) {
        throw console.error;
    }
    console.log('DataBase Connected')
})

export const qy = util.promisify(connection.query).bind(connection);