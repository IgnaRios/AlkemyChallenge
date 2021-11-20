const express = require('express');
const routes = require('./Routes/itemRoutes');


const app = express();

app.use(express.urlencoded({extended : true}))
app.use(express.json);
app.use(routes);

const PORT = process.env.PORT ? process.env.PORT : 3000;

app.use((req, res)=>{
    res.status(404).json({msj: "Not found"})
})


app.use((err, req, res, next)=>{
    if(err.errors){
        res.status(400).json({error:err.errors[0].message})
        return
    }
    res.status(400).json({error:err.message})
})




const server = app.listen(PORT, () => {
    console.log('listening at the port', PORT)
});
