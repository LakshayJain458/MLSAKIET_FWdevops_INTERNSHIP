const newTaskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText === "") return;

  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const taskTextNode = document.createElement("span");
  taskTextNode.textContent = taskText;
  taskItem.appendChild(taskTextNode);

  const taskButtons = document.createElement("div");
  taskButtons.classList.add("task-buttons");

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.textContent = "Complete";
  completeBtn.onclick = () => {
    taskItem.classList.toggle("completed");
  };
  taskButtons.appendChild(completeBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => {
    taskItem.remove();
  };
  taskButtons.appendChild(deleteBtn);

  taskItem.appendChild(taskButtons);

  taskList.appendChild(taskItem);

  newTaskInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);

newTaskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
