let currentindex = 3;

function addToDo() {
    const inputEl = document.getElementById("inp");
    const todoText = inputEl.value.trim();

    if (todoText === "") {
        alert('Please enter a todo item.');
        return;
    }

    const parentEl = document.getElementById("todo-list");

    const newTodo = document.createElement('div');
    newTodo.setAttribute("id", currentindex + '-item');
    newTodo.className = "todo-item";

    const tempDiv = document.createElement("div");
    tempDiv.className = "temp";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const newSpan = document.createElement("span");
    newSpan.textContent = todoText;

    tempDiv.appendChild(checkbox);
    tempDiv.appendChild(newSpan);

    const editButton = document.createElement("button");
    editButton.className = "edit-btn";
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("onclick", "deleteitem(" + currentindex + ")");

    newTodo.appendChild(tempDiv);
    newTodo.appendChild(editButton);
    newTodo.appendChild(deleteButton);

    parentEl.appendChild(newTodo);
    currentindex++;
    inputEl.value = "";
}

function deleteitem(index) {
    const element = document.getElementById(index + '-item');
    if (element) {
        element.remove();
    }
}

function deleteAll() {
    document.getElementById("todo-list").innerHTML = "";
    currentindex = 1;
}
