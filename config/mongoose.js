const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo_list').then(()=>console.log('connection successful')).catch((err)=>console.log(err));

