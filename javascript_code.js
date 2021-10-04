  <script>
  alert('Hello toad!');
</script> 
  <script>
      document.addEventListener('DOMContentLoaded', function() {
        document.querySelector("new").onsubmit = function() {
          const li = document.createElement('li');
          li.innerHTML = document.querySelector('#task').value;
          document.querySelector("#tasks").append(li);
          document.querySelector("#task").value = '';
          return false;
        }
      });
    </script>
