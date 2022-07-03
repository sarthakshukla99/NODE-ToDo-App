console.log("STATIC JS FILE");

let cb = document.querySelectorAll(".check");
let tasks = document.querySelectorAll(".task_main");


for (let i = 0; i < tasks.length; i++) {
    tasks[i].addEventListener("click", function (e) {
        var target = e.target;
        if(!target.classList.contains('cut')){
            target.classList.add("cut");
            cb[i].checked = "true";
        }
        else{
            target.classList.remove('cut');
            cb[i].checked = false;
            
        }
    });
}


for (let i = 0; i < cb.length; i++) {
    cb[i].addEventListener("click", function (e) {
        var target = e.target;
        if(cb[i].checked== true){
            tasks[i].classList.add('cut')
        }
        else{
            tasks[i].classList.remove('cut')
            
        }
    });
}


