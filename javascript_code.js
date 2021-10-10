alert('Welcome to the JavaScript Task List!');

document.addEventListener('DOMContentLoaded', function() {
  
document.querySelector("#new").onsubmit = function task_list() {
  const li = document.createElement('li');
  let task_point = document.querySelector('#task').value;
  let task_priority = document.querySelector('#Priority').value;
  let new_task = `
  <h3 id = "status"> PENDING </h3> <br>
  <span style = "color: white;"> ${task_point} </span> <br>
  <input type = "radio" class = "remove"> <p> Remove from List </p>
  <input type = "radio" class = "completed"> <p> Mark as Completed </p>
  `;
  let priority_check = `
  <label for = "priority" class = "Priority"> <p> Enter the priority of the task: </p> </label> <br>
  <select name = "Task Priority">
  <option value = "Low"> Low </option>
  <option value = "Medium"> Medium </option>
  <option value = "High"> High </option>
  </select>  <span style = "text-align: center;> ${task_priority} </span> <br>
  `;
  li.innerHTML = new_task
  priority.innerHTML = priority_check;
  
  document.querySelector("#tasks").append(li);
  document.querySelector("#task").value = '';
  return false;
}

  document.addEventListener('click', function(event) {
  element = event.target;
  if (element.className === 'remove') {
    element.parentElement.remove();
  }
 if (element.className === 'completed') { 
   document.getElementById("tasks").style.textDecoration = "line-through";
   document.querySelector("#status").innerHTML = "COMPLETED";
  }
 if (element.className === 'priority') {
   document.querySelector("Priority").value = 'task_priority';
 }
    
})
});
