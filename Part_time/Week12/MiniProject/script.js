const form = document.getElementById("frm");
const nameItem = document.getElementById("name");
const description = document.getElementById("description");
const start = document.getElementById("startdate");
const end = document.getElementById("enddate");
const submit = document.getElementById("submit");
const root = document.getElementById("tasks")
let arr = []

const addTask = (e) => {
    e.preventDefault();
    arr.push(
        {name: nameItem.value, 
        description: description.value, 
        start: start.value,
        end: end.value})
    localStorage.setItem('ToDoList', JSON.stringify(arr))
    createTask(arr)
}

const createTask = (arr) => {
    const html = arr.map((task, index) => {
        return `<div class="inline" class="divs" id="div${index}" onClick="show('div${index}')">
        <span>${task.name}</span>
        <span class="hidden">${task.description}</span>
        <span>${task.start}</span>
        <span>${task.end}</span>
        <input type="checkbox" name="completed" id="completed">
        <span id="completedtask">Completed</span>
        </div>`
    })
    root.innerHTML = html.join('');
}

const getTasksFromStorage = () => {
    const tasks = localStorage.getItem('ToDoList');
    if(tasks){
        return JSON.parse(tasks)
    }
    else{
        return []
    }
}

arr = getTasksFromStorage()
createTask(arr)

const show = (id) => {
    console.log(id);
    document.querySelector(`#${id} .hidden`).style.display = "block"
}
