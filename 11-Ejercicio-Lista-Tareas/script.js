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
      
      /* Creamos el contenedor de una tarea. */
    const taskItem = document.createElement('div');
    taskItem.classList.add('task');

    /* Creamos el parrafo de una tarea  */

    const taskText = document.createElement('p');
    taskText.innerText = taskInput.value;

    /* Creamos el contenedor de íconos */

    const taskIcons = document.createElement('div');
    taskIcons.classList.add('task-icons');

    /* Creamos el ícono de Check */

    const iconCheck = document.createElement('i');
    iconCheck.classList.add('bi', 'bi-bookmark-check', 'icon-complete');

    /* Creamos el ícono de Delete */

    const iconDelete = document.createElement('i');
    iconDelete.classList.add('bi', 'bi-bookmark-x', 'icon-delete');

    /* Estructura de los elementos */

    taskIcons.append(iconCheck, iconDelete);
    taskItem.append(taskText, taskIcons);
    taskList.append(taskItem);

 /* Escuchadores de los íconos */

 iconCheck.addEventListener('click', (e) => {
  e.target.parentNode.parentNode.classList.toggle('complete');
 });

 /* Escuchadores de los íconos iconDelete */

 iconDelete.addEventListener('click', (e) => {
  e.target.parentNode.parentNode.remove();
 })

    taskInput.value = ''; 
// Regresamos el valor vacío al input

} else {
  alert('Primero, escribe una tarea!👀');
  }
}

// Hacer que cuando el usuario de la tecla Enter se cree la tarea

taskInput.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    createTask();
  }
});

