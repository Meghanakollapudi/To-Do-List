let tasks = []; // Array to store tasks

function addTask() 
{
    const input = document.getElementById("input-text");
    const warning = document.getElementById("warning");
    const taskText = input.value.trim();

    if (taskText === "") 
    {
        warning.textContent = "Please enter a task!";
        return;
    }

    // Check if task already exists (case-insensitive)
    const taskExists = tasks.some(t => t.toLowerCase() === taskText.toLowerCase());
    if (taskExists) 
    {
        warning.textContent = "Task already exists!";
        input.value = "";
        return;
    }

    // Add task to array
    tasks.push(taskText);
    renderTasks();
    input.value = ""; // Clear input
    warning.textContent = "";
}

function renderTasks() 
{
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => 
    {
        const li = document.createElement("li");
        li.textContent = task;

        // Click on task to delete it
        li.onclick = () => 
        {
            tasks.splice(index, 1); // Remove task from array
            renderTasks();          // Re-render the list
        };

        taskList.appendChild(li);
    });
}


