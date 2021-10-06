alert('Welcome to the JavaScript Task List!');

document.addEventListener('DOMContentLoaded', function() {
  
document.querySelector("#new").onsubmit = function() {
  const li = document.createElement('li');
  let task_point = document.querySelector('#task').value;
  let new_task = `
  <span> ${task_point} </span>
  <input type = "radio" id = "pending" name = "status" value = "Pending">
      <label for = "pending">  <h3> Pending </h3> </label>
  <input type = "radio" id = "completed" name = "status" value = "Completed">
      <label for = "completed"> <h3> Mark as Completed </h3> </label>
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
  
/*document.querySelector("#complete_task").onchange = function() {
  document.querySelector('#completed').style.textDecoration = document.querySelector("#completedTask").value
}    
)  */
  
})
});

