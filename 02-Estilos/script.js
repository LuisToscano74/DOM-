console.log("Beep Beep Richie!")

/* 
Seleccionar el elemento h1 a través de su clase 
*/

const titulo = document.querySelector(".titulo");

/* 
Mostramos el nodo seleccionado  

-Nodo expandido -> <h1>...<h1>
-Nodo abstracto -> h1.title 

Algunos navegadores optimizan la representación de los nodos en la consola. (Chrome👽)
*/

console.log(titulo);

/* 
Objeto Style

Accedemos a el usuario la notación del punto (.)

elemento.style

Resultado es CSS Style Declaration. Es una lista que representa todas las propiedades de estilo de un elemento.

Únicamente muestra el valor de los estilos en línea declarados directamente en ele elemento HTML.
*/

console.log(titulo.style);

/* 
Propiedades de Estilo 

Accedemos a las propiedades usando la notación de punto (.)

   elemento.style.nombrePropiedad 
   
A diferencia de CSS, las propiedades de estilo en JS las escribimos usando el formato camelCase.

  CSS -> background-color (keebab-case)
  JS -> backgroundColor (camelCase)
   */

console.log("Valores en linea. Color: " + titulo.style.color + " - Fondo: " + titulo.style.backgroundColor)