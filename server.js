const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({path:'config.env'});
const PORT=process.env.PORT || 8080

// log request => morgan
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

// set view engine
app.set("view engine","ejs");
// app.set("views",path.resolve(__dirname,"views/ejs")); = if we create any folder inside views and add all ejs file inside that then we have to do this

// load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
//css/style.css
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

// load routers
app.use('/',require('./server/routes/router'));

app.listen(3000 , ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})