var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(event) {
  console.log(event);
} 