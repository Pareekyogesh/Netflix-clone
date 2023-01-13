const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const  app = express();
mongoose.set("strictQuery", false);

const bodyParser = require('body-parser');
// // const cookieParser = require('cookie-parser');
// // const expressValidator = require("express-validator");
// // const morgan = require('morgan');

//middleware 
app.use(cors());
app.use(bodyParser.json());


// get routing from routes
const authRoutes = require('./routes/router');

// make route for api's
app.use('/api',authRoutes);



// const cors = require('cors');
mongoose.connect('mongodb://0.0.0.0/ecom').then(()=>console.log("DB Connect"));
app.listen(8000,() =>{
    console.log("rahul mern project run at port:");
});
// console.log('hiii');