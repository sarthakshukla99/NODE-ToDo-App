const express = require('express');
const path = require('path');

const app = express();
const port = 3000

app.use('/',require('./routes/index2'))
app.set('view engine', 'ejs');
app.set('views','./views');




app.listen(port,(err)=>{
    if(err){
        console.log('error => ',err);
    }
    else{
        console.log('server is running on port=>',port);
    }
})