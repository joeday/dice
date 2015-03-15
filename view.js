
function rollDice() {

  var num = Math.floor((Math.random() * 6) +1)
  
  var el1 = document.getElementById("one");
  var el2 = document.getElementById("two");
  var el3 = document.getElementById("three");
  var el4 = document.getElementById("four");
  var el5 = document.getElementById("five");
  var el6 = document.getElementById("six");
  var el7 = document.getElementById("seven");

  if (num === 6) {
    el1.style.background = getRGB();
    el2.style.background = getRGB();
    el3.style.background = getRGB();
    el4.style.background = "rgb(255,255,255)";
    el5.style.background = getRGB();
    el6.style.background = getRGB();
    el7.style.background = getRGB();
  } else if (num == 5) {
    el1.style.background = getRGB();
    el2.style.background = "rgb(255,255,255)";
    el3.style.background = getRGB();
    el4.style.background = getRGB();
    el5.style.background = getRGB();
    el6.style.background = "rgb(255,255,255)";
    el7.style.background = getRGB();
  } else if (num == 4) {
    el1.style.background = getRGB();
    el2.style.background = "rgb(255,255,255)";
    el3.style.background = getRGB();
    el4.style.background = "rgb(255,255,255)";
    el5.style.background = getRGB();
    el6.style.background = "rgb(255,255,255)";
    el7.style.background = getRGB();
  } else if (num == 3) {
    el1.style.background = getRGB();
    el2.style.background = "rgb(255,255,255)";
    el3.style.background = "rgb(255,255,255)";
    el4.style.background = getRGB();
    el5.style.background = "rgb(255,255,255)";
    el6.style.background = "rgb(255,255,255)";
    el7.style.background = getRGB();
  } else if (num == 2) {
    el1.style.background = getRGB();
    el2.style.background = "rgb(255,255,255)";
    el3.style.background = "rgb(255,255,255)";
    el4.style.background = "rgb(255,255,255)";
    el5.style.background = "rgb(255,255,255)";
    el6.style.background = "rgb(255,255,255)";
    el7.style.background = getRGB();
  } else if (num == 1) {
    el1.style.background = "rgb(255,255,255)";
    el2.style.background = "rgb(255,255,255)";
    el3.style.background = "rgb(255,255,255)";
    el4.style.background = getRGB();
    el5.style.background = "rgb(255,255,255)";
    el6.style.background = "rgb(255,255,255)";
    el7.style.background = "rgb(255,255,255)";
  }
  
}

function getRGB() {
  
  var r = Math.floor((Math.random() * 255) +1)
  var g = Math.floor((Math.random() * 255) +1)
  var b = Math.floor((Math.random() * 255) +1)
  var rgb = "rgb("+parseInt(r)+","+parseInt(g)+","+parseInt(b)+")";
  
  return rgb;
}


document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      rollDice();
    }
}

rollDice();