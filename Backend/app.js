const express = require('express');

const app = express();

app.use(express.json);

const PORT = process.env.PORT ? process.env.PORT : 3000;


app.post('/item', function(req, res) {

});



const server = app.listen(PORT, () => {
    console.log('Escuchando en el puerto', PORT)
})