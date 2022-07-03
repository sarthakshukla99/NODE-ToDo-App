const express = require('express');
const path = require('path');
const app = express();
const db = require('./config/mongoose');
const port = 3000;

const Todo = require('./models/todo');

// for parsing the data (middleware)
app.use(express.urlencoded());  

//for fetching static files like css,js (mw)
app.use(express.static(path.join(__dirname, "assets"))); 

// imp routes 
app.use('/',require('./routes/index2'))

// set the view engine 
app.set('view engine', 'ejs');

app.set('views','./views');




// listen to the port req 
app.listen(port,(err)=>{
    if(err){
        console.log('error => ',err);
    }
    else{
        console.log('server is running on port=>',port);
    }
})