/* 
DOM 

Organiza los elementos del documento en "nodos" en un árbol jerárquico. 

Nodo -> Todo elemento individual de nuestro documento. 

Tipos de Nodo 

1. Nodo de Documento
2. Nodo de Elemento
3. Nodo de Atributo
4. Nodo de Texto 
5. Nodo de comentarios
*/

/* 
Nodo de Documento 

Este nodo representa el documento completo de html. Incluye el contenido desde la "raíz" - root,
hasta los elementos hijos.

Para acceder usamos:  

-> document
*/

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);

/* 
Nodo Elemento 

Para seleccionar nodos de elementos, usamos:

getElementsByTagName() 
("etiqueta")

Se escribe después del nodo "document"
*/

/* let title = document.getElementsByTagName("p");

console.log(title); */

/* 
Nodos de Atributo 

Son los nodos que accedemos a través de su clase o de su ID

getElementById("nombreId")
getElementByClassName("nombreClase")


querySelector("nombreSelector") -> Selecciona al primer elemento que encuentre con el selector. 
querySelectorAll("nombreSelector") -> Seleccionar todos los elementos con el mismo selector.
*/

/* let title = document.getElementById("title");

console.log(title);
console.log(title.innerText);
console.log(title.id);

let texts = documents.getElementsByClassName
("paragraph");

console.log(texts);
console.log(texts(0).textContent);
console.log(texts(1).textContent);
 */

let titulo = document.querySelector(".title"); //Class

console.log(titulo)

// let parrafos = document.querySelectorAll("p"); // Tag
let parrafos = document.querySelectorAll(".paragraph");

console.log(parrafos);

/* Nodo de Texto 

Son los elementos de texto contenidos en las etiquetas de html.

.innerText
.textContent
*/

let subtitle = document.querySelector(".subtitle");
console.log(subtitle.innerText)
console.log(subtitle.textContent)

/* 
Nodos de Comentarios 

Tienen un valor de 8 dentro del DOM 
*/

let comentario = document.COMMENT_NODE;

console.log(comentario);