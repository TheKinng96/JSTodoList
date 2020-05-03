window.onload =() => {
 
}

// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//add things
todoButton.addEventListener('click', (event) => {
    event.preventDefault();



    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');

    //create li
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    console.log(todoInput.value)
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton)
    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton)
    //append to list
    todoList.appendChild(todoDiv);
    //clear input value
    todoInput.value = "";
});

//delete  and checked things
todoList.addEventListener('click', (e)=> {
    const item = e.target;

    //delete
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', ()=> {
            todo.remove();
        })

    }

    //checked
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

})


//filter todos
filterOption.addEventListener('click', (e)=> {
    const todos = todoList.childNodes;
    todos.forEach(todo => {
        console.log(todo)
        console.log(e.target.value);
        switch(e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none"
                }
        }
    } )
})