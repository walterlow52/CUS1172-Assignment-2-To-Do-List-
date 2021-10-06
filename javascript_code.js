alert('Welcome to the JavaScript Task List!');

document.addEventListener('DOMContentLoaded', function() {
  
document.querySelector("#new").onsubmit = function() {
  const li = document.createElement('li');
  let task_point = document.querySelector('#task').value;
  let new_task = `
  <span style = "color: white;"> ${task_point} </span> <br>
  <input type = "radio" class = "remove"> <p> Remove from List </p> </button>
  <input type = "radio" class = "completed"> <p> Mark as Completed </p> </button>
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
 /* if (element.className === 'completed' {
      element.parentElement.
  }*/
  
})
});

