alert('Welcome to the JavaScript Task List!');

document.addEventListener('DOMContentLoaded', function() {
  
document.querySelector("#new").onsubmit = function() {
  const li = document.createElement('li');
  let task_point = document.querySelector('#task').value;
  let new_task = `
  <span> ${task_point} </span>
  <input type = "radio" id = "sorting_status" name = "status" value = "Pending">
      <label for = "sorting_status"> Pending </label>
  <input type = "radio" id = "sorting_status" name = "status" value = "Completed">
      <label for = "sorting_status"> Mark as Completed </label>
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
})
});

