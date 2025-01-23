const searchBar = document.querySelector("#search-bar");

const taskList = document.querySelector("#list");
const insertTask = document.querySelector("#insert-container");
const taskName = document.querySelector("#name-input");
const taskDate = document.querySelector("#date-input");

const naviBar = document.querySelector("#navigation");

const saveTask = (text, date) => {

    const task = document.createElement("div") 
    task.classList.add("task")

    const divTaskTitle = document.createElement("div")
    divTaskTitle.classList.add("task-title")
    task.appendChild(divTaskTitle)
    
    const taskTitle = document.createElement("h2")
    taskTitle.innerText = text
    divTaskTitle.appendChild(taskTitle)

    const taskCreation = document.createElement("p")
    taskCreation.innerText = date
    task.appendChild(taskCreation)

    const doneButton = document.createElement("button")
    doneButton.classList.add("finish")
    task.appendChild(doneButton)

    const doneButtonImage = document.createElement("img")
    doneButtonImage.src = "assets/confirmed.png"
    doneButtonImage.alt = "icone de confirmado"
    doneButtonImage.async = true
    doneButton.appendChild(doneButtonImage)

    taskList.appendChild(task)

    taskName.value = ""
    taskDate.value = ""
}

const toggleForms = () => {
    insertTask.classList.toggle("hide")
    taskList.classList.toggle("hide")
}

insertTask.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputNameValue = taskName.value
    const inputDateValue = taskDate.value

    if (inputNameValue && inputDateValue) {
        saveTask(inputNameValue, inputDateValue)
    }
    toggleForms()
});

const submitTask = document.querySelector("#submitTask");

document.addEventListener("click", (e) => {
    const targetElement = e.target
    const parentElement = targetElement.closest("div")

    if(targetElement.classList.contains("finish")) {
        parentElement.classList.toggle("done")
    }
    if(targetElement.classList.contains("submitTask")) {
        toggleForms()
    }
})

const cancelButton = document.querySelector("#cancel");

cancelButton.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms()
})