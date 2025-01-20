/* Referencia */

const emojiCursor = document.querySelector(".emoji-cursor");

/* Detectamos el evento movimiento del mouse */

document.addEventListener("mousemove" , (e) => {

/* console.log(e.clientX);
   console.log(e.clientY); */

// Guardamos las coordenadas en variables.

  let mouseX = e.clientX;
  let mouseY = e.clientY;

// Aplicar las coordenadas al elemento emojiCursor.

emojiCursor.style.left = `${mouseX}px`;

});

// Cambiar el emoji al presionar una tecla 

document.addEventListener("keydown" , (e) => {console.log(e.key); });

/* Utilizamos Switch para asignar un nuevo  */

switch (e.key) {
  case "1":
  emojiCursor.textContent = "💩";
  break;
  case "2":
  emojiCursor.textContent = "🌸";
  break;
  case "3":
  emojiCursor.textContent = "🍫";
  break;
  default:
  emojiCursor.textContent = "😀";
}

// commit -m "Ejercicio Event"