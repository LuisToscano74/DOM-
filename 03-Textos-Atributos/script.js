/* Seleccionamos los elementos por su id. */

const titulo = document.getElementById("title");
const lista = document.getElementById("list");

/* Los mostramos por consola */

console.log(titulo);
console.log(lista);

/* 

 innerText

 Devuelve un "string" del contenido visible dentro de un elemento.

    elemento.innerText
 -Excluye los elementos ocultos.
 -Excluye los espacios en el documento.
 -Excluye las etiquetas html.
*/

console.log(titulo.innerText);
console.log(lista.innerText);
console.log(">>> Con innertext");

/* 
textContent 

Devuelve un "string" del contenido visible dentro de un elemento. 

    elemento.textContent
    
 - Incluye los espacios.
 - Incluye los elementos ocultos.
 - Excluye las etiquetas html.

 */

 console.log(titulo.textContent);
 console.log(lista.textContent);
 console.log(">>> Con textContent");

/* 
innerHTML

Devuelve un "string" con la estructura interna de ele elmento seleccionado 

   elemento.innerHTML 

*/

console.log(titulo.innerHTML);
console.log(lista.innerHTML);
console.log(">>> Con innerHTML");

/* 
Modificar el contenido de innerText

Asignamos el valor el elemento seleccionado

   elemento.innerText = "string" 
*/

titulo.innerText = "Marvel Heroes 👊";
lista.innerText = "No hay personajes!";

/* 
Modificar el contenido de textContent

Asignamos el valor el elemento seleccionado

   elemento.textContent = "string" 
*/

titulo.textContent = "Mis héroes favoritos";
lista.textContent = "Cargando...";

/* 
Modificar el contenido de innerHTML

Asignamos el valor el elemento seleccionado 

  elemento.innerHTML = "<tag>...</tag>"
  
*/

titulo.innerHTML = "Amigos <span>poderosos</span>!";
lista.innerHTML = "<li>Black Widow 🕷️🔫</li><li>Thor ⛈️🔨</li>"