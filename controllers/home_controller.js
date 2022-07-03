var taskList = [
    {
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
];
module.exports.home = function (req, res) {
    return res.render("home", {
        title: "My TODO APP",
        task_List: taskList,
    });
};


module.exports.add = function(req,res){
    console.log(req.body.date);
    taskList.push({
        task : req.body.task,
        date : req.body.date,
        category: req.body.category
    })

    console.log('new task added');

    return res.redirect('/');
}
