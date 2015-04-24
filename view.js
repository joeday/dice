// construct the current color var
// empty at first
var currentColor;

function rollDice() {
  
  // the random number the die displays
  var num = Math.floor((Math.random() * 6) +1);
  
  // create variables for die element IDs, then put them in an array
  var el1 = document.getElementById("one");
  var el2 = document.getElementById("two");
  var el3 = document.getElementById("three");
  var el4 = document.getElementById("four");
  var el5 = document.getElementById("five");
  var el6 = document.getElementById("six");
  var el7 = document.getElementById("seven");
  var all = [el1,el2,el3,el4,el5,el6,el7];
  
  // the sum text
  var txt = document.getElementById("sum");
  
  // the background of the die itself
  var die = document.getElementById("dieBG");
  
  // get the existing color if it exists to prevent setting the next color to the same
  var prevColor = currentColor ? currentColor : (currentColor = "rgb(125,161,191)");
  
  // set the color of the background
  var bg = getColor(prevColor);
  
  // change the background color
  die.style.background = bg;
  
  // set all numbers to white
  for (var i=0; i < all.length; i++) {
    all[i].style.background = "rgb(255,255,255)";
  };

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
  
  txt.innerHTML = num;
  
}

function getColor(previous) {
  // based on Pantone spring 2015 color pallette
  // http://iwork3.us/2014/09/16/pantone-2015-spring-fashion-report/
  
  // collect the previous color so we can use it to remove it from the array below
  var prev = previous;
  
  // construct the colors array
  var c1 = "rgb(125,161,191)";
  var c2 = "rgb(28,78,137)";
  var c3 = "rgb(78,110,56)";
  var c4 = "rgb(127,128,64)";
  var c5 = "rgb(198,203,204)";
  var c6 = "rgb(138,133,135)";
  var c7 = "rgb(210,178,154)";
  var c8 = "rgb(199,141,107)";
  var c9 = "rgb(149,82,81)";
  var c10 = "rgb(179,143,177)";
  
  // simplifying the color pallette
  var colors = [c1,c5,c6];
  
  // remove previus color from array to ensure each role of die gets new color
  for (var i = 0; i < colors.length; i++) {
    if (colors[i] === prev) {
      colors.splice(i, 1);
    }
  }
  
  // get a random number based on contents of colors array
  var randColor = Math.floor((Math.random() * colors.length))
  
  // set the color to return
  var color = colors[randColor];
  
  // set the current color to the new color we just selected
  currentColor = color;

  return color;
}

// press space bar to roll the die
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      rollDice();
    }
}

// initial die roll
rollDice();