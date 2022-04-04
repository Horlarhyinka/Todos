const express = require('express');
const app = express();
const mongoose = require('mongoose')

//setting view engine
app.set("view-engine",'ejs')

//connecting to database

const url = 'mongodb+srv://Horlarh:1234@cluster0.syhy6.mongodb.net/Todos?retryWrites=true&w=majority';
mongoose.connect(url)
.then(app.listen(3001,()=>{
    console.log("now listening to port 3001")
})).catch(err=> console.log(err));


