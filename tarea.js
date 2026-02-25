document.addEventListener("DOMContentLoaded", ()=> {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'))

    if(storedTasks){
        storedTasks.forEach((tasks)=> tasks.push(tasks))
        updateTasksList();
        updateStats();
    }
}

let tasks = [];

const saveTasks = ()=> {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const addTask = () => {
    const tasksInput =document.getElementById ("Ingrese Tarea")
    const text = tasksInput.Value.trim();

    if (text) {
        tasks.push({ text: text, completed: false });
        tasksInput.value = "";
        updateTasksList();  
        updateStats();
        saveTasks();
    }           
};

const toogleTastComplete = (index) => { 
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();
    updateStats();
    saveTasks();
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    updateTasksList();
    updateStats();
    saveTasks();
};

const editTask = (index)=> {
    const tasksInput = document.getElementById('taskInput');
    tasksInput.value = tasks[index].text;
    
    tasks.splice(index, 1);
    updateTasksList();
    updateStats();
    saveTasks();
};    

const updateStats = ()=>{
    const completedTasks = tasks.filter(task=> task.completed).length
    const totalTasks = tasks.length
    const progress =( completedTasks/totalTasks )*100
   const progressBar = document.getElementById('progress')
   
   progressBar.style.widows = `$(progress)`

   document.getElementById('numbers').innerText = `${totalTasks}`;
}

const updateTasksList = () => {
    const tasksList = document.getElementById("task-list");
    tasksList.innerHTML = "";
}

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


document.genElementById("Nueva Tarea").addEventListener("clikc" function (e) { e.preventDefault();

addTask();
});