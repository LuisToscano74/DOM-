/* 
 Objeto Event

El objeto Event representa un suceso que ocurre en el navegador, como un click, 
usar una tecla o el movimiento del mouse y proporciona la información sobre las 
propiedades y métodos para manejarlo 

Para acceder al objeto event (e) se pasa automáticamente como un argumento a la 
función manejadora. 

Sintaxis

function funcionManejadora(event) {
  // Código a ejecutar...
  console.log(event) // Muestra la lista de propiedades y métodos. 
}
  
Propiedades del objeto event:

- type: devuelve el tipo de evento. 
- target: devuelve el elemento donde ocurre el evento. 
- timeStamp: devuelve la marca de tiempo en milisegundos desde la carga de la página.  

- code: Devuelve el código de la tecla presionada. 
- key: Devuelve el valor de la tecla presionada. 

- clientX: Devuelve la posición horizontal de puntero del mouse en relación a la ventana de navegación. 
- clientY: Devuelve la posición vertical del puntero del mouse en relación con la ventana del navegador.

commit -m "Aprendimos a usar Objetos Events"
*/

const button = document.getElementsByClassName("button");

// console.log(button[0];)

console.log(button);
console.log(button[0]);

button[0].addEventListener('click', mostrarObjetoEvento);

// Accedemos al objeto evento

function mostrarObjetoEvento(event) {
  // Código que se ejecuta
  console.log(event);
  console.log(event.type);
  console.log(event.target);
  console.log(event.timeStamp);
  console.log(event.innerText);
}

document.addEventListener('Keydown', function (e) {
  console.log(e);
  console.log(e.type);
  console.log(e.code);
  console.log(e.key);
})

document.addEventListener('mousemove', (e) => {
  // console.log(e);
console.log("Cord x: " + e.clientX + " Cord Y: " + e.clientY);
} );