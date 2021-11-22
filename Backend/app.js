const express = require('express');
const router = require('./Routes/itemRoutes');


const app = express();

app.use(express.urlencoded({extended : true}))
app.use(express.json());
app.use(router);

const PORT = process.env.PORT ? process.env.PORT : 3000;




const server = app.listen(PORT, () => {
    console.log('listening at the port', PORT)
});
