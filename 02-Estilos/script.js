console.log("Holiwis a todos!")

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

Únicamente muestra el valor de los estilos en línea declarados directamente en el elemento HTML.
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

/* 
Método de propiedad 

Asignar el valor de la propiedad de estilo en el elemento seleccionado.

    elemento.style.nombrePropiedad = "valor" 

 - Forma más directa y legible de asignar propiedades.
 - Solo admite asignar propiedades con forma camelCase.
*/

let colorUsuario = prompt("Escribe un color 🎨");
titulo.style.color = "purple";
titulo.style.backgroundColor = "yellow";

console.log("Valores asignados con JS. Color " + titulo.style.color + " - Fondo: " + titulo.style.backgroundColor);

/* 
Método setProperty()

Asignamos una propiedad de estilo al elemento seleccionado.

   elemento.style.setProperty(nombrePropiedad, valor, important)

 - Más flexible y poderoso.
 - Las propiedades se escriban en formato kebab-case.
 - Parametro "important" es opcional.
*/

titulo.style.setProperty("color", "darkblue");
titulo.style.setProperty("background-Color", "lightpink", "important");
console.log("Valores asignados con setProperty. Color " + titulo.style.color + " - Fondo: " + titulo.style.backgroundColor);

/* 
Eliminar valores de propiedades

Usamos el método de propiedad y le definimos una cadena de texto vacía.

   elemento.style.nombrePropiedad 

Esto elimina los valores previamente definidos en JS y en los estilos en línea. 
*/

titulo.style.color = "";
titulo.style.backgroundColor = "";

/* 
Método removeProperty()

Elimina la propiedad de estilo. 

   elementostyle.removeProperty(nombreProperty)

-Las propiedades se pasan en formato kebab-case
*/

titulo.style.removeProperty("color");