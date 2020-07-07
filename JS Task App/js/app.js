//Select all the items
const taskForm = document.querySelector('#tasks-form')
const addTaskBtn = document.querySelector('#add-task-btn')
const taskList = document.querySelector('.task-list')
const deleteAllTaskBtn = document.querySelector('#delete-all-task-btn')
const hideShowForm = document.querySelector('#hide-form-btn')
const taskAddedAlert = document.querySelector('.task-added-alert')
const taskRemovedAlert = document.querySelector('.task-removed-alert')
const closeAddAlertBtn = document.querySelector('#close-task-added-alert')
const closeRemovedAlertBtn = document.querySelector('#close-task-removed-alert')

let taskTitle = document.querySelector('#task-title')
let taskDate = document.querySelector('#task-date')
let taskCategory = document.querySelector('#task-category')
let taskDescription = document.querySelector('#task-description')
//Save task data
taskForm.addEventListener('submit', (e) => {
    e.preventDefault() //Cancel the default form event
})
addTaskBtn.addEventListener('click', () => {
    let task = {
        taskTitle: taskTitle,
        taskDescription: taskDescription,
        taskDate: taskDate,
        taskCategory: taskCategory
    }
    taskList.innerHTML += `<div class ="task-container">
    <h4>${task.taskTitle.value}</h4>
    <p>${task.taskDescription.value}</p>
    <p id="task-date-value">${task.taskDate.value}</p>
    <p id="task-category-value">${task.taskCategory.value}</p>
    <hr>
    </div>`
    taskAddedAlert.style.display = 'block' //Show alert
    taskForm.reset()
})
deleteAllTaskBtn.addEventListener('click', () => {
    taskList.innerHTML = ''
    taskRemovedAlert.style.display = 'block' //Show alert
})
//Animate form
function HideShowForm() {
    taskForm.classList.toggle('hide')
    taskList.classList.toggle('moveTask')
    if (taskForm.classList == 'hide') {
        hideShowForm.textContent = 'Show'
    } else {
        hideShowForm.textContent = 'Hide'
    }
}
//Animate alerts
closeAddAlertBtn.addEventListener('click', () => {
    taskAddedAlert.classList.add('alertClose')
})
closeRemovedAlertBtn.addEventListener('click', () => {
    taskRemovedAlert.classList.add('alertClose')
})