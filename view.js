
function rollDice() {

  var num = Math.floor((Math.random() * 6) +1);
  
  var el1 = document.getElementById("one");
  var el2 = document.getElementById("two");
  var el3 = document.getElementById("three");
  var el4 = document.getElementById("four");
  var el5 = document.getElementById("five");
  var el6 = document.getElementById("six");
  var el7 = document.getElementById("seven");
  var all = [el1,el2,el3,el4,el5,el6,el7];
  var die = document.getElementById("dieBG");
  var bg = getColor();
  var white = "#fff";

  // set background of die
  die.style.background = bg;
  
  // set all numbers to white
  for (var i; i < all.length; i++) {
    all[i].style.background = white;
  }

  // hide unneeded numbers by setting the to the same bg color as the background
  if (num === 6) {
    el4.style.background = bg;
  } else if (num == 5) {
    el2.style.background = bg;
    el6.style.background = bg;
  } else if (num == 4) {
    el2.style.background = bg;
    el4.style.background = bg;
    el6.style.background = bg;
  } else if (num == 3) {
    el2.style.background = bg;
    el3.style.background = bg;
    el5.style.background = bg;
    el6.style.background = bg;
  } else if (num == 2) {
    el2.style.background = bg;
    el3.style.background = bg;
    el4.style.background = bg;
    el5.style.background = bg;
    el6.style.background = bg;
  } else if (num == 1) {
    el1.style.background = bg;
    el2.style.background = bg;
    el3.style.background = bg;
    el5.style.background = bg;
    el6.style.background = bg;
    el7.style.background = bg;
  }
  
}

function getColor() {
  // based on Frozen Anna color scheme from color.adobe.com https://color.adobe.com/Frozen-Anna-color-theme-5544861/edit/?copy=true
  var c1 = "rgb(165,39,131)";
  var c2 = "rgb(39,90,139)";
  var c3 = "rgb(4,157,191)";
  var c4 = "rgb(215,129,52)";
  var c5 = "rgb(241,179,154)";
  var colors = [c1,c2,c3,c4,c5];
  var randColor = Math.floor((Math.random() * colors.length))
  
  var color = colors[randColor];
  
  return color;
}


document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      rollDice();
    }
}

rollDice();