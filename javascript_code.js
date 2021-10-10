alert('Welcome to the JavaScript Task List!');

document.addEventListener('DOMContentLoaded', function() {
  
document.querySelector("#new").onsubmit = function task_list() {
  const li = document.createElement('li');
  let task_point = document.querySelector('#task').value;
  let task_priority = document.querySelector('#priority').value;
  let new_task = `
  <h3 id = "status"> PENDING </h3> <br>
  <span style = "color: white;"> ${task_point} </span> <br>
  <h4> ${task_priority} </h4> <br>
  <input type = "radio" class = "remove"> <p> Remove from List </p>
  <input type = "radio" class = "completed"> <p> Mark as Completed </p>
  `;
  
  li.innerHTML = new_task
  
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
  
});
});
