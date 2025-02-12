// Referencias

const taskInput = document.getElementById ('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById ('taskList');

// Escuchador 

addButton.addEventListener('click', createTask);

// Función Manejadora Externa 

function createTask() {
  if (taskInput.value) {
      // Crear los elementos que integran la tarea.
      console.log(taskInput.value);

      /* Creamos el contenedor de una tarea. */
    const taskItem = document.createElement('div');
    taskItem.classList.add('task');

    /* Creamos el parrafo de una tarea  */

    const taskText = document.createElement('p');
    taskText.innerText = taskInput.value;

    /* Creamos el contenedor de íconos */

    const taskIcons = document.createElement('div');
    taskIcons.classList.add('task-icons');

    const iconCheck = document.createElement('i');
    iconCheck.classList.add('bi', 'bi-bookmark-check', 'icon-complete');

    const iconDelete = document.createElement('i');
    iconDelete.classList.add('bi', 'bi-bookmark-x', 'icon-delete');


    taskIcons.append(iconCheck, iconDelete);
    taskItem.append(taskText, taskIcons);
    taskList.append(taskItem);

     taskInput.value = ''; // Regresamos el valor vacío al input
} else {
  alert('Primero, escribe una tarea!👀');
  }
}