const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");

const tasks = JSON.parse(localStorage.getItem("list_tasks")) || [];

function renderTodo() {
  listElement.innerHTML = "";
  for (let task of tasks) {
    const taskElement = document.createElement("li");
    const taskText = document.createTextNode(task);

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#")
    const index = tasks.indexOf(task);
    linkElement.setAttribute("onclick", `deleteTask(${index})`)
    const linkText = document.createTextNode("Excluir");

    linkElement.appendChild(linkText);
    taskElement.appendChild(taskText);
    taskElement.appendChild(linkElement);
    listElement.appendChild(taskElement);
  }
}

function addTask() {
  const taskText = inputElement.value;
  tasks.push(taskText);
  inputElement.value = "";
  renderTodo();
  saveToStorage();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTodo()
  saveToStorage();
}

buttonElement.onclick = addTask;

function saveToStorage() {
  localStorage.setItem("list_tasks", JSON.stringify(tasks));
}

renderTodo()