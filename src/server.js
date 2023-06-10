require('dotenv').config();
const express = require('express'); //commonjs
const app = express();  //app express


const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routers/web')
const connection = require('./config/database');

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get the client
const port = process.env.PORT ||8088;


//config template engine
configViewEngine(app);

//khai bao route
app.use('/', webRoute);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})