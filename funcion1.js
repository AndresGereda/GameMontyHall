x1="abierta.png";
x2="cldoor.png";
x3="tesoro.png";
x4="copia.png";

var b1 = document.getElementById("sorteo");
b1.addEventListener("click", f);
function f()
{
  var n = 9; 
  var vector = []; 

  for (var i = 0; i < n; i++) {vector[i] = i+1;}

  function getRandomArbitrary(min, max){return Math.floor(Math.random() * (max - min) + min);}
  var x=(getRandomArbitrary(1,n+1));
 
  let counter = 0;
  var b5 = document.querySelector('#p1');b5.addEventListener('click', function() {counter++; if (counter === 1) {y=1;r1.src =x4;} else if (counter === 2) {w=1;d();}});
  var b6 = document.querySelector('#p2');b6.addEventListener('click', function() {counter++; if (counter === 1) {y=2;r2.src =x4;} else if (counter === 2) {w=2;d();}});
  var b7 = document.querySelector('#p3');b7.addEventListener('click', function() {counter++; if (counter === 1) {y=3;r3.src =x4;} else if (counter === 2) {w=3;d();}});
  var b8 = document.querySelector('#p4');b8.addEventListener('click', function() {counter++; if (counter === 1) {y=4;r4.src =x4;} else if (counter === 2) {w=4;d();}});
  var b9 = document.querySelector('#p5');b9.addEventListener('click', function() {counter++; if (counter === 1) {y=5;r5.src =x4;} else if (counter === 2) {w=5;d();}});
var b10 = document.querySelector('#p6');b10.addEventListener('click', function() {counter++; if (counter === 1) {y=6;r6.src =x4;} else if (counter === 2) {w=6;d();}});
var b11 = document.querySelector('#p7');b11.addEventListener('click', function() {counter++; if (counter === 1) {y=7;r7.src =x4;} else if (counter === 2) {w=7;d();}});
var b12 = document.querySelector('#p8');b12.addEventListener('click', function() {counter++; if (counter === 1) {y=8;r8.src =x4;} else if (counter === 2) {w=8;d();}});
var b13 = document.querySelector('#p9');b13.addEventListener('click', function() {counter++; if (counter === 1) {y=9;r9.src =x4;} else if (counter === 2) {w=9;d();}});

for (let i = 1; i <= 9; i++) {
  window[`r${i}`] = document.getElementById(`r${i}`);
}

  function c()
  {
    var vectorNuevo = [];
    var j = 0;
    for (var i = 0; i < vector.length; i++) {
      if (vector[i] !== y) {
        vectorNuevo[j] = vector[i];
        j++;
      }
    }
    var n1 = vectorNuevo[Math.floor(Math.random() * vectorNuevo.length)];
    if (y===x){
      n1=n1;
    }
    else{
      n1=x;
    }

    for (let i = 1; i <= 9; i++) {
    if (i===n1){
      window[`r${i}`].src = x2;
    }
    else if(i===y){
      window[`r${i}`].src = x4;
    }
    else{
      window[`r${i}`].src = x1;
    }
    }
    de.innerHTML ="Recuerda la puerta 🚪🚪 que escogio es la numero: "+y+" te quedas con esa o cambia?";
  }
  var de = document.getElementById("de");
  var b2 = document.getElementById("sorteo1");
  b2.addEventListener("click", c);

function d()
{

  for (let i = 1; i <= 9; i++) {
    if (x === i){
      window[`r${i}`].src = x3;
    } 
    else{
      window[`r${i}`].src = x1;
    }
    }

if(w===x){d1.innerHTML ="Felicitaciones Ganaste ✅✅💰💰🥇🥇🙏😇";}
else{d1.innerHTML ="Que Lastima Perdiste 😢😭🐂🙉😂😓🤣";}
}
var d1 = document.getElementById("d1");

}
