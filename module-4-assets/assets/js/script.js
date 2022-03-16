console.dir(window.document);

var formEl = document.querySelector("#task-form");
console.log(buttonEl);

var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    
    event.preventDefault();
    
    console.log(event);

    var listeItemEl = document.createElement("li");
    listeItemEl.className = "task-item";
    listeItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listeItemEl);
};

formEl.addEventListener("submit", createTaskHandler);