const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'alkemi_presupuestopersonal'
})

connection.connect((error) => {
    if(error) {
        throw console.error;
    }
    console.log('connection with database established');
})

const qy = util.promisify(connection.query).bind(connection);

module.exports = qy;