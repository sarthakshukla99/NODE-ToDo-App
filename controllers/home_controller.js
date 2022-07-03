const Todo = require('../models/todo');
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


module.exports.add = function (req, res) {
    // console.log(req.body.date);
    // taskList.push({
    //     task: req.body.task,
    //     date: req.body.date,
    //     category: req.body.category
    // })

    Todo.create({
        task: req.body.task,
        date: req.body.date,
        category: req.body.category
    },function(err,newTodo){
        if(err){
            console.log('error in newTodo=>',err);
        }else{
            console.log("*****===>",newTodo);
            return res.redirect('/');
        }
    }
    )




    
    
}