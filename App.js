const express = require('express');
const app = express();
const mongoose = require('mongoose');


const url = 'mongodb+srv://Horlarh:1234@cluster0.syhy6.mongodb.net/Todos?retryWrites=true&w=majority';

//setting view engine
app.set("view engine",'ejs')

//connecting to database

mongoose.connect(url)

.then(app.listen(3001,()=>{
    console.log("now listening to port 3001")
})).catch(err => console.log(err));

//adding middlewares

app.use(express.static('assets'));
app.use(express.urlencoded({extended:true}))

//creating schema


const todoSchema = new mongoose.Schema({
    todo:{ type:"string",required: true}
},{timestamps:true})

const Todo = mongoose.model("Todo",todoSchema);

//setting up route
const list = ['todo1','todo2']

app.get('/todos',(req,res)=>{
    Todo.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('index',{list:result});
    })
})
app.post('/todos',(req,res)=>{
    const newtodo = new Todo({
        todo:req.body.todo
    })
    newtodo.save()
    .then(()=>{
        res.redirect('/todos')
    }).catch((err)=>console.log(err))
    
})
app.delete('/todos/:id',(req,res)=>{
    const _id = req.params.id;
    Todo.findByIdAndDelete(_id)
    .then(res.json({redirect: '/todos'}))
})
