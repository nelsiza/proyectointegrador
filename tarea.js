let tasks = [];

const addTask = ()=> {
    const tasksInput =document.getElementById ("Ingrese Tarea")
    const text = tasksInput.ariaValueMax.trim()

    if (text){
        tasks.push ({text:text, completed: false});

        updateTasksList()
        }
};

const updateTasksList = ()=> {
    const tasksList = document.getElementById("Lista de Tareas")
    tasksList.innerHTML = ''

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li')

    listItem.innerHTML = `
        <div class="taskItem">
            <div class="task ${task.completed ? 'completed':''}">
                <input type="checkbox" class="checkbox" />
                <p>Finish this project</p>
            </div>
            <div class="icons">
                <img src="./img/edit.png" />
                <img src="./img/bin.png" />
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