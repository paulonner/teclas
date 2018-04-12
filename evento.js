var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}

document.addEventListener("keyup", dibujarTeclado);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.stroke();
 lienzo.closePath();
}

function dibujarTeclado(event) {
  console.log(event);
} 