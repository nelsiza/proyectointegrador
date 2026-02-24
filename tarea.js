let tasks = [];

const addTask = ()=> {
    const tasksInput =document.getElementById ("Ingrese Tarea")
    const text = tasksInput.ariaValueMax.trim()

    if (text){
        tasks.push ({text:text, completed: false});

        updateTasksList();         
};

const toogleTastCompete = (index) =>{
    tasks[index].completed = !tasks[index].completed
};

const deleteTask = (index) => {
    tasks.splice(index,1);
    updateTasksList();
};

const editTask = (index)=> {
    const tasksInput = dovument.getElementById('taskInput')
    tasksInput.value =tasks[index].text
    
}

const updateTasksList = ()=> {
    const tasksList = document.getElementById("Lista de Tareas")
    tasksList.innerHTML = ''

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li')

    listItem.innerHTML = `
        <div class="taskItem">
            <div class="task ${task.completed ? 'completed':''}">
                <input type="checkbox" class="checkbox"  ${task.completed ?"checked" : ""}/>
                <p>${task.text}</p>
            </div>
            <div class="icons">
                <img src="./img/edit.png" onClick="editTask(${index})" />
                <img src="./img/bin.png" onClick="deleteTask(${index})" />
            </div>
        </div>    
     `;
     listItem.addEventListener('change', ()=> toogleTastCompete(index));
        tasksList.append(listItem);
    });
    };
        console.log(tasks);
    };


document.genElemenById("Nueva Tarea").addEventListener("clikc" function e.preventDefault();
addTask();
})