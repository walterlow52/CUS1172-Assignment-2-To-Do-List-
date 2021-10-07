alert('Welcome to the JavaScript Task List!');

document.addEventListener('DOMContentLoaded', function() {
  
document.querySelector("#new").onsubmit = function() {
  const li = document.createElement('li');
  let task_point = document.querySelector('#task').value;
  let new_task = `
  <span style = "color: white;"> ${task_point} </span> <br>
  <input type = "radio" class = "remove"> <p> Remove from List </p> 
  <input type = "radio" class = "completed"> <p> Mark as Completed </p>
  `;
  li.innerHTML = new_task
  
  document.querySelector("#tasks").append(li);
  document.querySelector("#task").value = '';
  return false;
}
  
document.querySelector("button").onclick = inc;
let priority = document.querySelector('#priorities').value;
function inc()  {
  let taskPriority = `
  <label for = "priority"> <p> Enter the priority of the task: </p> </label>
      <select name = "Task Priority" id = "priority">
        <option value = "Low"> Low </option>
        <option value = "Medium"> Medium </option>
        <option value = "High"> High </option>
      </select>
      <span style = "text-align: center;"> ${priority} </span>
      `
  if (priority === 'high') {
    document.querySelector("#priority").innerHTML = "HIGH"   
  }
  if (priority === 'medium') {
    document.querySelector("#priority").innerHTML = "MEDIUM"   
  }
  if (priority === 'low') {
    document.querySelector("#priority").innerHTML = "LOW"   
  }
}
)



document.addEventListener('click', function(event) {
  element = event.target;
  if (element.className === 'remove') {
    element.parentElement.remove();
  }
 if (element.className === 'completed') { 
      element.style.property = "completed_task";
  }
  
})
});
