const mongoose = require('mongoose');

// defining schema / structure for the data 
const todoSchema = new mongoose.Schema({
    task:{
        type: String,
        required : true
    },
    date:{
        type: String,
        required : true
    },
    category:{
        type: String,
        required : true
    }   
});


// creating model or collection for db 
const Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;