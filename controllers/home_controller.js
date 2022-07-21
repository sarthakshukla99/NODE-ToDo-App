const Todo = require('../models/todo');

// dummy data 
var taskList = [{
        task: "Go for shopping",
        date: "May 2,2022",
        category: "Personal"
    },
    {
        task: "Play cricket",
        date: "June 3,2022",
        category: "Personal"
    },
    {
        task: "Go for a movie",
        date: "June 5,2022",
        category: "Personal"
    },
]

// send data to home page 
module.exports.home = function (req, res) {

    Todo.find({}, function (err, todos) {
        if (err) {
            console.log('error is=>', err);;
        } else {
            return res.render("home", {
                title: "My TODO APP",
                task_List: todos,
            });
        }
    })



};


// adding task to the db 
module.exports.add = function (req, res) {
// =================xxxxxx I ADDED THIS BELOW CODE INTENTIONALY, PLS DON'T MIND THIS ==========

    // console.log(req.body.date);
    // taskList.push({
    //     task: req.body.task,
    //     date: req.body.date,
    //     category: req.body.category
    // })

//   XXXXXXXXXXXXXXXXXX======================XXXXXXXXXXXXXXXXXXXXXXX  

    Todo.create({
        task: req.body.task,
        date: req.body.date,
        category: req.body.category
    }, function (err, newTodo) {
        if (err) {
            console.log('error in newTodo=>', err);
        } else {
            // console.log("*****===>", newTodo);
            return res.redirect('/');
        }
    })

}



// deleting all the tasks 
module.exports.deleteAll = function (req, res) {
    Todo.deleteMany({}).then(() => {
        console.log('data deleted');
        res.redirect('/')
    }).catch((err) => {
        console.log('err in deleting=>', err)
        return res.redirect('/')
    })
}


// <!-- deleting a particular task  -->
module.exports.delete = function(req,res){
    Todo.findByIdAndDelete(req.params.id, function(err){
        if(err){
            console.log('error in deleting');
        }
        return res.redirect('back');
    })
}