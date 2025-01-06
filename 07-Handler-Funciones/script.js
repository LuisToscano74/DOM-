alert("Feliz año nuevo 2025 🎉🎇");

/* 
  Handler - Funciones 

 El handler en un evento es una función que se ejecuta cuando el evento ocurre.
 Hay tres formas de escribir la función handler.

 1. Como una función externa 
 2. Como una función anónima 
 3. Como una función flecha
*/

/* 
Función Externa 

Esta función se escribe por fuera del evento y se pasa como argumento al addEventListener.

function handler() {
 // Código a ejecutar 
 }
 
 elemento.addEventListener
 (tipoEvento , handler)

 
Función Anónima 

Esta función se escribe dentro del evento y no tiene nombre. 

 elemento.addEventListener(tipoEvento, function(){
 // Código a ejecutar } );


Función Flecha 

Esta función se escribe dentro del evento, no tiene nombre, pero es más concisa.

elemento.addEventListener(tipoEveneto, () => {// Código que se ejecuta });

Cuando el código que se ejecuta que tiene más de una línea se debe escribir entre las llaves.
Si el código que se ejecuta solo tiene una línea, se pueden omitir las llaves. 

*/

// Referencias

const externa = document.getElementById("externa");
const anonima = document.getElementById("anonima");
const flecha = document.getElementById("flecha");

//Función Externa

function funcionExterna() {
  console.log("Click en el botón externa! 👽")
};

externa.addEventListener("click", funcionExterna);

// Función Anónima

anonima.addEventListener('click', function(){
  console.log('Click en el botón anónimo ❓')
})

// Función flecha 

flecha.addEventListener('click', () => {
  console.log("click en el botón flecha 🏹")
});

/* commit: "Handler - Funciones" */
