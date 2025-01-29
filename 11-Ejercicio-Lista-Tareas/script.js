alert("Aquí se presentan las tareas 📄🔎");

// Referencias

const taskInput = document.getElementById ('taskInput');
const addButton = document.getElementById('addButton');

// Escuchador 

addButton.addEventListener('click', () => {
  console.log(taskInput.value);
});

// Función Manejadora Externa 

function createTask () {
  if (taskInput.value) {
  // Crear los elementos que integran la tarea.
  console.log(taskInput.value);
  taskInput.value = ''; // Regresamos el valor vacío al input
} else {
  alert('Primero, escribe una tarea!');
  }
}

// commit: "Iniciamos funcionalidad de la lista de tareas"



