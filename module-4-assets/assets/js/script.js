console.dir(window.document);

var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);

var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listeItemEl = document.createElement("li");
    listeItemEl.className = "task-item";
    listeItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listeItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);