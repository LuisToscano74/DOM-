/* 

Obtenemos un elemento de referencia

- Este es el nodo de HTML donde vamos a crear un nuevo elemento. 
*/

const movies = document.getElementById("movies");

/* 
 Para crear un nuevo elemento usamos createElement

 document.createElement(tipoElemento)

- El tipo de elemento pasa con String "" o ''
- Se debe guardar en una variable o constante
*/

const newMovie = document.createElement("li");

/* 
Agregamos el elemento al DOM desde la referencia usamos el método append()

  elementoReferencia.append(nuevoElemento)

- El nuevo elemento no pasa como String

*/

movies.append(newMovie)

/* 
Agregamos texto al nuevo elemento con innerText

  elemento.innerText = valor 
  
- Valor pasa como String "" o '' 
*/

newMovie.innerText = "Spider-Man: No way home 🕷️🕸️";

/* 
Agregamos las clases al nuevo elemento con el método add()

  elemento.classList.add
  
- La clase pasa como String 
- El método acepta más de un parametro separandolas con comas , 
*/

newMovie.classList.add("list-item", "bg-two")

/* Reto: Agregar un nuevo elemento  */

const newMovie2 = document.createElement("li");
movies.append(newMovie2)
newMovie2.innerText = "Thor: Love and Thunder ⛈️💘"
newMovie2.classList.add("list-item", "bg-one")
