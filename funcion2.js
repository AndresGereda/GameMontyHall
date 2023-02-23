x1="abierta.png";
x2="cldoor.png";
x3="tesoro.png";
x4="copia.png";

var b1 = document.getElementById("sorteo");
b1.addEventListener("click", f);
function f()
{
  var n = 100; 
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
var b14 = document.querySelector('#p10');b14.addEventListener('click', function() {counter++; if (counter === 1) {y=10;r10.src =x4;} else if (counter === 2) {w=10;d();}});
var b15 = document.querySelector('#p11');b15.addEventListener('click', function() {counter++; if (counter === 1) {y=11;r11.src =x4;} else if (counter === 2) {w=11;d();}});
var b16 = document.querySelector('#p12');b16.addEventListener('click', function() {counter++; if (counter === 1) {y=12;r12.src =x4;} else if (counter === 2) {w=12;d();}});
var b17 = document.querySelector('#p13');b17.addEventListener('click', function() {counter++; if (counter === 1) {y=13;r13.src =x4;} else if (counter === 2) {w=13;d();}});
var b18 = document.querySelector('#p14');b18.addEventListener('click', function() {counter++; if (counter === 1) {y=14;r14.src =x4;} else if (counter === 2) {w=14;d();}});
var b19 = document.querySelector('#p15');b19.addEventListener('click', function() {counter++; if (counter === 1) {y=15;r15.src =x4;} else if (counter === 2) {w=15;d();}});
var b20 = document.querySelector('#p16');b20.addEventListener('click', function() {counter++; if (counter === 1) {y=16;r16.src =x4;} else if (counter === 2) {w=16;d();}});
var b21 = document.querySelector('#p17');b21.addEventListener('click', function() {counter++; if (counter === 1) {y=17;r17.src =x4;} else if (counter === 2) {w=17;d();}});
var b22 = document.querySelector('#p18');b22.addEventListener('click', function() {counter++; if (counter === 1) {y=18;r18.src =x4;} else if (counter === 2) {w=18;d();}});
var b23 = document.querySelector('#p19');b23.addEventListener('click', function() {counter++; if (counter === 1) {y=19;r19.src =x4;} else if (counter === 2) {w=19;d();}});
var b24 = document.querySelector('#p20');b24.addEventListener('click', function() {counter++; if (counter === 1) {y=20;r20.src =x4;} else if (counter === 2) {w=20;d();}});
var b25 = document.querySelector('#p21');b25.addEventListener('click', function() {counter++; if (counter === 1) {y=21;r21.src =x4;} else if (counter === 2) {w=21;d();}});
var b26 = document.querySelector('#p22');b26.addEventListener('click', function() {counter++; if (counter === 1) {y=22;r22.src =x4;} else if (counter === 2) {w=22;d();}});
var b27 = document.querySelector('#p23');b27.addEventListener('click', function() {counter++; if (counter === 1) {y=23;r23.src =x4;} else if (counter === 2) {w=23;d();}});
var b28 = document.querySelector('#p24');b28.addEventListener('click', function() {counter++; if (counter === 1) {y=24;r24.src =x4;} else if (counter === 2) {w=24;d();}});
var b29 = document.querySelector('#p25');b29.addEventListener('click', function() {counter++; if (counter === 1) {y=25;r25.src =x4;} else if (counter === 2) {w=25;d();}});
var b30 = document.querySelector('#p26');b30.addEventListener('click', function() {counter++; if (counter === 1) {y=26;r26.src =x4;} else if (counter === 2) {w=26;d();}});
var b31 = document.querySelector('#p27');b31.addEventListener('click', function() {counter++; if (counter === 1) {y=27;r27.src =x4;} else if (counter === 2) {w=27;d();}});
var b32 = document.querySelector('#p28');b32.addEventListener('click', function() {counter++; if (counter === 1) {y=28;r28.src =x4;} else if (counter === 2) {w=28;d();}});
var b33 = document.querySelector('#p29');b33.addEventListener('click', function() {counter++; if (counter === 1) {y=29;r29.src =x4;} else if (counter === 2) {w=29;d();}});
var b34 = document.querySelector('#p30');b34.addEventListener('click', function() {counter++; if (counter === 1) {y=30;r30.src =x4;} else if (counter === 2) {w=30;d();}});
var b35 = document.querySelector('#p31');b35.addEventListener('click', function() {counter++; if (counter === 1) {y=31;r31.src =x4;} else if (counter === 2) {w=31;d();}});
var b36 = document.querySelector('#p32');b36.addEventListener('click', function() {counter++; if (counter === 1) {y=32;r32.src =x4;} else if (counter === 2) {w=32;d();}});
var b37 = document.querySelector('#p33');b37.addEventListener('click', function() {counter++; if (counter === 1) {y=33;r33.src =x4;} else if (counter === 2) {w=33;d();}});
var b38 = document.querySelector('#p34');b38.addEventListener('click', function() {counter++; if (counter === 1) {y=34;r34.src =x4;} else if (counter === 2) {w=34;d();}});
var b39 = document.querySelector('#p35');b39.addEventListener('click', function() {counter++; if (counter === 1) {y=35;r35.src =x4;} else if (counter === 2) {w=35;d();}});
var b40 = document.querySelector('#p36');b40.addEventListener('click', function() {counter++; if (counter === 1) {y=36;r36.src =x4;} else if (counter === 2) {w=36;d();}});
var b41 = document.querySelector('#p37');b41.addEventListener('click', function() {counter++; if (counter === 1) {y=37;r37.src =x4;} else if (counter === 2) {w=37;d();}});
var b42 = document.querySelector('#p38');b42.addEventListener('click', function() {counter++; if (counter === 1) {y=38;r38.src =x4;} else if (counter === 2) {w=38;d();}});
var b43 = document.querySelector('#p39');b43.addEventListener('click', function() {counter++; if (counter === 1) {y=39;r39.src =x4;} else if (counter === 2) {w=39;d();}});
var b44 = document.querySelector('#p40');b44.addEventListener('click', function() {counter++; if (counter === 1) {y=40;r40.src =x4;} else if (counter === 2) {w=40;d();}});
var b45 = document.querySelector('#p41');b45.addEventListener('click', function() {counter++; if (counter === 1) {y=41;r41.src =x4;} else if (counter === 2) {w=41;d();}});
var b46 = document.querySelector('#p42');b46.addEventListener('click', function() {counter++; if (counter === 1) {y=42;r42.src =x4;} else if (counter === 2) {w=42;d();}});
var b47 = document.querySelector('#p43');b47.addEventListener('click', function() {counter++; if (counter === 1) {y=43;r43.src =x4;} else if (counter === 2) {w=43;d();}});
var b48 = document.querySelector('#p44');b48.addEventListener('click', function() {counter++; if (counter === 1) {y=44;r44.src =x4;} else if (counter === 2) {w=44;d();}});
var b49 = document.querySelector('#p45');b49.addEventListener('click', function() {counter++; if (counter === 1) {y=45;r45.src =x4;} else if (counter === 2) {w=45;d();}});
var b50 = document.querySelector('#p46');b50.addEventListener('click', function() {counter++; if (counter === 1) {y=46;r46.src =x4;} else if (counter === 2) {w=46;d();}});
var b51 = document.querySelector('#p47');b51.addEventListener('click', function() {counter++; if (counter === 1) {y=47;r47.src =x4;} else if (counter === 2) {w=47;d();}});
var b52 = document.querySelector('#p48');b52.addEventListener('click', function() {counter++; if (counter === 1) {y=48;r48.src =x4;} else if (counter === 2) {w=48;d();}});
var b53 = document.querySelector('#p49');b53.addEventListener('click', function() {counter++; if (counter === 1) {y=49;r49.src =x4;} else if (counter === 2) {w=49;d();}});
var b54 = document.querySelector('#p50');b54.addEventListener('click', function() {counter++; if (counter === 1) {y=50;r50.src =x4;} else if (counter === 2) {w=50;d();}});
var b55 = document.querySelector('#p51');b55.addEventListener('click', function() {counter++; if (counter === 1) {y=51;r51.src =x4;} else if (counter === 2) {w=51;d();}});
var b56 = document.querySelector('#p52');b56.addEventListener('click', function() {counter++; if (counter === 1) {y=52;r52.src =x4;} else if (counter === 2) {w=52;d();}});
var b57 = document.querySelector('#p53');b57.addEventListener('click', function() {counter++; if (counter === 1) {y=53;r53.src =x4;} else if (counter === 2) {w=53;d();}});
var b58 = document.querySelector('#p54');b58.addEventListener('click', function() {counter++; if (counter === 1) {y=54;r54.src =x4;} else if (counter === 2) {w=54;d();}});
var b59 = document.querySelector('#p55');b59.addEventListener('click', function() {counter++; if (counter === 1) {y=55;r55.src =x4;} else if (counter === 2) {w=55;d();}});
var b60 = document.querySelector('#p56');b60.addEventListener('click', function() {counter++; if (counter === 1) {y=56;r56.src =x4;} else if (counter === 2) {w=56;d();}});
var b61 = document.querySelector('#p57');b61.addEventListener('click', function() {counter++; if (counter === 1) {y=57;r57.src =x4;} else if (counter === 2) {w=57;d();}});
var b62 = document.querySelector('#p58');b62.addEventListener('click', function() {counter++; if (counter === 1) {y=58;r58.src =x4;} else if (counter === 2) {w=58;d();}});
var b63 = document.querySelector('#p59');b63.addEventListener('click', function() {counter++; if (counter === 1) {y=59;r59.src =x4;} else if (counter === 2) {w=59;d();}});
var b64 = document.querySelector('#p60');b64.addEventListener('click', function() {counter++; if (counter === 1) {y=60;r60.src =x4;} else if (counter === 2) {w=60;d();}});
var b65 = document.querySelector('#p61');b65.addEventListener('click', function() {counter++; if (counter === 1) {y=61;r61.src =x4;} else if (counter === 2) {w=61;d();}});
var b66 = document.querySelector('#p62');b66.addEventListener('click', function() {counter++; if (counter === 1) {y=62;r62.src =x4;} else if (counter === 2) {w=62;d();}});
var b67 = document.querySelector('#p63');b67.addEventListener('click', function() {counter++; if (counter === 1) {y=63;r63.src =x4;} else if (counter === 2) {w=63;d();}});
var b68 = document.querySelector('#p64');b68.addEventListener('click', function() {counter++; if (counter === 1) {y=64;r64.src =x4;} else if (counter === 2) {w=64;d();}});
var b69 = document.querySelector('#p65');b69.addEventListener('click', function() {counter++; if (counter === 1) {y=65;r65.src =x4;} else if (counter === 2) {w=65;d();}});
var b70 = document.querySelector('#p66');b70.addEventListener('click', function() {counter++; if (counter === 1) {y=66;r66.src =x4;} else if (counter === 2) {w=66;d();}});
var b71 = document.querySelector('#p67');b71.addEventListener('click', function() {counter++; if (counter === 1) {y=67;r67.src =x4;} else if (counter === 2) {w=67;d();}});
var b72 = document.querySelector('#p68');b72.addEventListener('click', function() {counter++; if (counter === 1) {y=68;r68.src =x4;} else if (counter === 2) {w=68;d();}});
var b73 = document.querySelector('#p69');b73.addEventListener('click', function() {counter++; if (counter === 1) {y=69;r69.src =x4;} else if (counter === 2) {w=69;d();}});
var b74 = document.querySelector('#p70');b74.addEventListener('click', function() {counter++; if (counter === 1) {y=70;r70.src =x4;} else if (counter === 2) {w=70;d();}});
var b75 = document.querySelector('#p71');b75.addEventListener('click', function() {counter++; if (counter === 1) {y=71;r71.src =x4;} else if (counter === 2) {w=71;d();}});
var b76 = document.querySelector('#p72');b76.addEventListener('click', function() {counter++; if (counter === 1) {y=72;r72.src =x4;} else if (counter === 2) {w=72;d();}});
var b77 = document.querySelector('#p73');b77.addEventListener('click', function() {counter++; if (counter === 1) {y=73;r73.src =x4;} else if (counter === 2) {w=73;d();}});
var b78 = document.querySelector('#p74');b78.addEventListener('click', function() {counter++; if (counter === 1) {y=74;r74.src =x4;} else if (counter === 2) {w=74;d();}});
var b79 = document.querySelector('#p75');b79.addEventListener('click', function() {counter++; if (counter === 1) {y=75;r75.src =x4;} else if (counter === 2) {w=75;d();}});
var b80 = document.querySelector('#p76');b80.addEventListener('click', function() {counter++; if (counter === 1) {y=76;r76.src =x4;} else if (counter === 2) {w=76;d();}});
var b81 = document.querySelector('#p77');b81.addEventListener('click', function() {counter++; if (counter === 1) {y=77;r77.src =x4;} else if (counter === 2) {w=77;d();}});
var b82 = document.querySelector('#p78');b82.addEventListener('click', function() {counter++; if (counter === 1) {y=78;r78.src =x4;} else if (counter === 2) {w=78;d();}});
var b83 = document.querySelector('#p79');b83.addEventListener('click', function() {counter++; if (counter === 1) {y=79;r79.src =x4;} else if (counter === 2) {w=79;d();}});
var b84 = document.querySelector('#p80');b84.addEventListener('click', function() {counter++; if (counter === 1) {y=80;r80.src =x4;} else if (counter === 2) {w=80;d();}});
var b85 = document.querySelector('#p81');b85.addEventListener('click', function() {counter++; if (counter === 1) {y=81;r81.src =x4;} else if (counter === 2) {w=81;d();}});
var b86 = document.querySelector('#p82');b86.addEventListener('click', function() {counter++; if (counter === 1) {y=82;r82.src =x4;} else if (counter === 2) {w=82;d();}});
var b87 = document.querySelector('#p83');b87.addEventListener('click', function() {counter++; if (counter === 1) {y=83;r83.src =x4;} else if (counter === 2) {w=83;d();}});
var b88 = document.querySelector('#p84');b88.addEventListener('click', function() {counter++; if (counter === 1) {y=84;r84.src =x4;} else if (counter === 2) {w=84;d();}});
var b89 = document.querySelector('#p85');b89.addEventListener('click', function() {counter++; if (counter === 1) {y=85;r85.src =x4;} else if (counter === 2) {w=85;d();}});
var b90 = document.querySelector('#p86');b90.addEventListener('click', function() {counter++; if (counter === 1) {y=86;r86.src =x4;} else if (counter === 2) {w=86;d();}});
var b91 = document.querySelector('#p87');b91.addEventListener('click', function() {counter++; if (counter === 1) {y=87;r87.src =x4;} else if (counter === 2) {w=87;d();}});
var b92 = document.querySelector('#p88');b92.addEventListener('click', function() {counter++; if (counter === 1) {y=88;r88.src =x4;} else if (counter === 2) {w=88;d();}});
var b93 = document.querySelector('#p89');b93.addEventListener('click', function() {counter++; if (counter === 1) {y=89;r89.src =x4;} else if (counter === 2) {w=89;d();}});
var b94 = document.querySelector('#p90');b94.addEventListener('click', function() {counter++; if (counter === 1) {y=90;r90.src =x4;} else if (counter === 2) {w=90;d();}});
var b95 = document.querySelector('#p91');b95.addEventListener('click', function() {counter++; if (counter === 1) {y=91;r91.src =x4;} else if (counter === 2) {w=91;d();}});
var b96 = document.querySelector('#p92');b96.addEventListener('click', function() {counter++; if (counter === 1) {y=92;r92.src =x4;} else if (counter === 2) {w=92;d();}});
var b97 = document.querySelector('#p93');b97.addEventListener('click', function() {counter++; if (counter === 1) {y=93;r93.src =x4;} else if (counter === 2) {w=93;d();}});
var b98 = document.querySelector('#p94');b98.addEventListener('click', function() {counter++; if (counter === 1) {y=94;r94.src =x4;} else if (counter === 2) {w=94;d();}});
var b99 = document.querySelector('#p95');b99.addEventListener('click', function() {counter++; if (counter === 1) {y=95;r95.src =x4;} else if (counter === 2) {w=95;d();}});
var b100 = document.querySelector('#p96');b100.addEventListener('click', function() {counter++; if (counter === 1) {y=96;r96.src =x4;} else if (counter === 2) {w=96;d();}});
 
for (let i = 1; i <= 100; i++) {
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

  for (let i = 1; i <= 100; i++) {
    if (i===n1){
      window[`r${i}`].src = x2;
    }
    else if(i==y){
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

  for (let i = 1; i <= 100; i++) {
    if (x === i){
      window[`r${i}`].src = x3;
    } 
    else{
      window[`r${i}`].src = x1;
    }
    }

if(w==x){d1.innerHTML ="Felicitaciones Ganaste ✅✅💰💰🥇🥇🙏😇";}
else{d1.innerHTML ="Que Lastima Perdiste 😢😭🐂🙉😂😓🤣";}
}
var d1 = document.getElementById("d1");

}
