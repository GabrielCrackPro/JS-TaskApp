//Select all the items
const taskForm = document.querySelector('#tasks-form')
let taskTitle = document.querySelector('#task-title')
let taskDate = document.querySelector('#task-date')
let taskCategory = document.querySelector('#task-category')
let taskDescription = document.querySelector('#task-description')
const addTaskBtn = document.querySelector('#add-task-btn')
const taskList = document.querySelector('.task-list')
const deleteAllTaskBtn = document.querySelector('#delete-all-task-btn')
const hideShowForm = document.querySelector('#hide-form-btn')
//Save task data
taskForm.addEventListener('submit',(e)=>{
    e.preventDefault() //Cancel the default form event
})
addTaskBtn.addEventListener('click',()=>{
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
    taskForm.reset()
})
deleteAllTaskBtn.addEventListener('click',()=>{
    taskList.innerHTML = ''
})
//Animate form
function HideShowForm(){
    taskForm.classList.toggle('hide')
    hideShowForm.classList.toggle('togglebtn')
    taskList.classList.toggle('moveTask')
    if(taskForm.classList == 'hide'){
        hideShowForm.textContent = 'Show'
    }else{
        hideShowForm.textContent = 'Hide'
    }
}