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

/* 

getAttribute()

Devuelve el valor del atributo del elemento.

elemento.getAttribute(atributo) 

*/

const enlace = document.getElementsByTagName("a");

/*  */

enlace[0].removeAttribute("href");

console.log(enlace[0].getAttribute("href"))

/* 

setAttribute()

Asigna un atributo y un valora a un elemento.

elemento.setAttribute( atributo , valor)

- Sobreescribir un atributo ya declarado. 
- Crea un atributo y su valor. 

commit -m "Terminamos textos y atributos del DOM"

*/

enlace[0].setAttribute("href", "https://www.instagram.com");

console.log(enlace[0].getAttribute("href"));

// Antes 

console.log(enlace[0].getAttribute("target"));

enlace[0].setAttribute("target", "_blank");

// Después

console.log(enlace[0].getAttribute("target"));