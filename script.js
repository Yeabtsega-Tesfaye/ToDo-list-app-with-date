const toDoList = [];

renderToDoList();

function renderToDoList() {
    let toDoListHTML = '';

    /* for (let i = 0; i < toDoList.length; i++) {
         const todoObject = toDoList[i];
         // const name = todoObject.name;
         // const dueDate = todoObject.dueDate;
         const { name, dueDate } = todoObject;
         const html = `
             <div>${name}</div>
             <div> ${dueDate}</div>
             <button onclick="
             toDoList.splice(${i}, 1)
             renderToDoList();
             " class="delete-btn">Delete</button>
             `;
         toDoListHTML += html;
     }*/

    toDoList.forEach(function (todoObject, index) {
        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div> ${dueDate}</div>
            <button class="delete-btn">Delete</button>
            `;
        toDoListHTML += html;
    });

    document.querySelector('.todo-list').innerHTML = toDoListHTML;

    document.querySelectorAll('.delete-btn').forEach((deleteBtn, index) => {
        deleteBtn.addEventListener('click', (index) => {
            toDoList.splice(index, 1);
            renderToDoList();
        })
    });
}

document.querySelector('.add-btn').addEventListener('click', () => {
    addToDo();
});

function addToDo() {
    const inputElement = document.querySelector('.input-box');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.task-date');
    const dueDate = dateInputElement.value;

    toDoList.push({
        // name: name,
        // dueDate: dueDate, shorthand method
        name,
        dueDate
    });

    inputElement.value = '';

    renderToDoList();
}