document.getElementById('add-task').addEventListener('click', function () {
    const taskText = document.getElementById('new-task').value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.style.padding = "6px";
        deleteButton.style.borderRadius = "6px";
        deleteButton.style.border = " 2px solid #00ff00";
        deleteButton.style.backgroundColor = "#00ff00";
        deleteButton.style.boxShadow = "0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00";

        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(newTask);
        });

        newTask.appendChild(deleteButton);
        newTask.addEventListener('click', function () {
            newTask.classList.toggle('completed');
        });

        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});
