// Instantiate Fastclick
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

// construct the current color var
// empty at first
var currentColor;

function init() {
  rollDice();
};

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
  var el8 = document.getElementById("eight");
  var el9 = document.getElementById("nine");
  var all = [el1,el2,el3,el4,el5,el6,el7,el8,el9];
  
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
  
  // set all numbers to bg
  for (var i=0; i < all.length; i++) {
    all[i].style.background = bg;
  };
  
  // hide the spacers
  el4.style.background = bg;
  el6.style.background = bg;
  
  // show desired numbers by getting appropriate die locations and animating them to white
  if (num === 6) {
    animateDice([el1,el2,el3,el7,el8,el9], "rgb(255,255,255)");
  } else if (num == 5) {
    animateDice([el1,el3,el5,el7,el9], "rgb(255,255,255)");
  } else if (num == 4) {
    animateDice([el1,el3,el7,el9], "rgb(255,255,255)");
  } else if (num == 3) {
    animateDice([el1,el5,el9], "rgb(255,255,255)");
  } else if (num == 2) {
    animateDice([el1,el9], "rgb(255,255,255)");
  } else if (num == 1) {
    animateDice([el5], "rgb(255,255,255)");
  }
  
  // set the text to the number
  txt.innerHTML = num;
  
}

// receive an array of elements and color to animate to the desired color
function animateDice(ary, color) {
  
  for (var i=0; i < ary.length; i++) {
    ary[i].style.background = color;
  };
  
  // ary.style.background = color;
  // $(ary).animate({backgroundColor: color}, 300);
}

function getColor(previous) {
  // based on Pantone spring 2015 color pallette
  // http://iwork3.us/2014/09/16/pantone-2015-spring-fashion-report/
  
  // collect the previous color so we can use it to remove it from the array below
  var prev = previous;
  
  // construct the colors array
  var c1 = "rgb(17,128,174)";
  var c2 = "rgb(109,91,151)";
  var c3 = "rgb(252,178,57)";
  var c4 = "rgb(215,64,97)";
  var c5 = "rgb(243,122,41)";
  var c6 = "rgb(182,107,163)";
  var c7 = "rgb(52,90,153)";
  
  // simplifying the color pallette
  var colors = [c1,c2,c3,c4,c5,c6,c7];
  
  // remove previous color from array to ensure each role of die gets new color
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
window.onload = init();