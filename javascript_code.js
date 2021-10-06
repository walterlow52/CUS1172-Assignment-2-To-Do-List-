alert('Welcome to the JavaScript Task List!');

document.addEventListener('DOMContentLoaded', function() {
  
document.querySelector("#new").onsubmit = function() {
  const li = document.createElement('li');
  const priority = document.createElement('priority');
  let task_point = document.querySelector('#task').value;
  let new_task = `
  <span style = "color: white;"> ${task_point} </span> <br>
  <input type = "radio" class = "remove"> <p> Remove from List </p> </button>
  <input type = "radio" class = "completed"> <p> Mark as Completed </p> </button>
  `;
  li.innerHTML = new_task
  let task_priority = document.querySelector('#priority').value
  let priority_rating = `
  <span style = "color: white; text-align: center;"> ${task_priority} </span> <br>
  <label for = "priority"> <p> Enter the priority of the task: </p> </label>
      <select name = "Task Priority" id = "priority">
        <option value = "Low"> Low </option>
        <option value = "Medium"> Medium </option>
        <option value = "High"> High </option>
      </select>
  `;
  priority.innerHTML = priority_rating
  
  document.querySelector("#tasks").append(li);
  document.querySelector("#task").value = '';
  return false;
}
  
document.addEventListener('click', function(event) {
  element = event.target;
  if (element.className === 'remove') {
    element.parentElement.remove();
  }
 if (element.className === 'completed' {
      element.parentElement.style.property = "completed_task";
  }
  
})
});

