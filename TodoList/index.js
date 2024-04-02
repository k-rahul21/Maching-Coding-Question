document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoSubmit = document.querySelector(".todo-submit");
  const todolist = document.querySelector(".todo-list");
  let editMode = false;
  let editItem = null;

  todoForm.addEventListener("submit", function(event) {
    event.preventDefault()
    const textValue = todoInput.value.trim();

    if(textValue !== '') {
      if(editMode) {
        editItem.firstChild.textContent = textValue;
        todoSubmit.innerText = "Add Task";
        editMode = false;
        todoInput.value = '';
      } else {
        addTodoText(textValue);
        todoInput.value = '';
      }
    } else {
      alert("Please enter a valid task..")
    }
  })

  todolist.addEventListener('click', function(event) {
    const target = event.target;
    if(target.tagName === "BUTTON") {
      const todoItem = target.parentNode;
      if(target.innerText === '✏️') {
        editMode = true;
        editItem = todoItem;
        todoSubmit.innerText = "Edit Todo"; 
        todoInput.value = todoItem.firstChild.textContent;
        todoInput.focus();
      } else if(target.innerText === '❌') {
        todoItem.remove();
      }
    }
  })
  
  function addTodoText(textValue) {
    const todoItem = document.createElement('li');
    const todoEdit = document.createElement('button');
    const todoDelete = document.createElement('button');

    todoItem.innerHTML = `<span>${textValue}</span>`;
    todoEdit.innerText = '✏️';
    todoDelete.innerText = '❌';
    todoItem.appendChild(todoDelete);
    todoItem.appendChild(todoEdit);
    todolist.appendChild(todoItem);
  }
})