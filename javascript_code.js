function assignment_2() {
alert('Hello toad!');
  <script>
      document.addEventListener('DOMContentLoaded', function() {
        document.querySelector("new").onsubmit = function() {
          const li = document.createElement('li');
          //li.innerHTML = document.querySelector('#task').value;
         let task_text = document.querySelector('#task').value;
         let new_task_html = `
         <span> ${task_text} </span>
         <button class = "remove"> Mark as complete </button>
         `;
         li.innerHTML = new_task_html
         
          document.querySelector("#tasks").append(li);
          document.querySelector("#task").value = '';
          return false;
        }
document.addEventListener('click', function(event) {
 element = event.target;
 
 if (element.className === 'remove') {
  element.parentElement.remove();
 }
});
 
      });
    </script>
}
