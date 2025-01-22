/* 
Métodos de Navegación 

Nos permiten movernos entre los elementos relacionados al DOM. */

// Referencias

const padre = document.getElementById('parent');

const hijo = document.getElementById('child');

const hermano = document.getElementById('sibling');

// parentNode -> Devuelve el nodo padre del elemento.

console.log(hijo.parentNode);

/* childNodes -> Devuelve una colección (NodeList) de todos los nodos 
hijos, incluyendo elementos, texto, comentarios. */

console.log(padre.childNodes);

/* children -> Devuelve una colección (HTMLCollection) de los nodos hijos
que son elementos. Ignora nodos de texto o comentarios. */

console.log(padre.children);

/* firstChild -> Devuelve el primer nodo hijo, puede ser un nodo de texto, 
comentario o elemento. */

console.log(padre.firstChild);

/* firstElementChild -> Devuelve el primer nodo hijo que sea un elemento. */

console.log(padre.firstElementChild);

/* lastChild -> Devuelve al último nodo hijo, puede ser nodo de texto, 
comentario o elemento.  */

console.log(padre.lastChild);

/* lastElementChild -> Devuelve el último nodo hijo que sea un elemento.  */

console.log(padre.lastElementChild);

/* nextSibling -> Devuelve el siguiente nodo hermano, puede ser nodo de texto, 
comentario o elemento */

console.log(hijo.nextSibling);
console.log(hermano.nextSibling);

/* nextElementSibling -> Devuelve el siguiente nodo hermano que sea un elemento
que sea un elemento. */

console.log(hijo.nextElementSibling);
console.log(hermano.nextElementSibling);

/* previousSibling -> Devuelve el anterior nodo hermano, puede ser un nodo de texto,
comentario o elemento.  */

console.log(hijo.previousSibling);
console.log(hermano.previousSibling);

/* previousElementSibling -> Devuelve el anterior nodo hermano que sea un elemento.*/

console.log(hijo.previousElementSibling);
console.log(hermano.previousElementSibling);

// commit: "Metodos de navegación del DOM"