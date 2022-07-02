module.exports.home = function(req,res){
    return res.render('home',({
        title: 'My TODO APP'
    }))
}