// TODO:
// Construct HTML - separate object that is simply instantiated here?
    // how do different collections of dice work?
    // 1 is easy, 6 is easy
    // different numbered sides?
// Update colors
// Sum up for text
// How does the user select how many dice they want?
// How does the user select how many sides per die?

function SingleDie(currentBG, sides) {
    this.currentBG = currentBG;
    this.sides = sides;
    this.numberString = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty-one"];

    // the random number the die displays
    this.num = Math.floor((Math.random() * this.sides) + 1);

    // number of dots of the die
    this.dotsCount;

    // get the number of dot placeholders for each type of die
    // setting things up to be able to more sides to the dice
    if (this.sides <= 9)  {
        this.dotsCount = 9;
    } else {
        this.dotsCount = 9;
    }

    // Create an array of dot elements
    function getDots(num, strAry) {
        var ary = [];
        for (var i = 1; i <= num; i++) {
            ary[i] = document.getElementById(strAry[i]);
        }
        return ary;
    }

    // Create an array of the HTML elements we need to control
    this.dotsAry = getDots(this.dotsCount, this.numberString);

    // the background of the die itself
    // TODO: Needs to be serialized
    this.dieBG = document.getElementById("dieBG");

    // get the existing color if it exists to prevent setting the next color to the same
    this.prevBG = currentBG ? currentBG: (currentBG = "rgb(125,161,191)");

    // set the color of the background
    this.getBG = getColor(this.prevBG);

    // change the background color
    this.dieBG.style.background = this.getBG;

    // set all numbers to bg, essentially turning them all off so we can turn only the correct ones back on
    function setColor(ary, color) {
        for (var i = 1; i < ary.length; i++) {
            ary[i].style.background = color;
        };
        return ary;
    }

    this.setBG = setColor(this.dotsAry, this.dieBG);

    // NEED TO MAKE THIS DYNAMIC hide the spacers on a six sided die
    this.dotsAry[4].style.background = this.dieBG;
    this.dotsAry[6].style.background = this.dieBG;

    if (this.num === 6) {
        animateDice(this.dotsAry[1,2,3,7,8,9], "rgb(255,255,255)");
    } else if (this.num == 5) {
        animateDice(this.dotsAry[1,3,5,7,9], "rgb(255,255,255)");
    } else if (this.num == 4) {
        animateDice(this.dotsAry[1,3,7,9], "rgb(255,255,255)");
    } else if (this.num == 3) {
        animateDice(this.dotsAry[1,5,9], "rgb(255,255,255)");
    } else if (this.num == 2) {
        animateDice(this.dotsAry[1,9], "rgb(255,255,255)");
    } else if (this.num == 1) {
        animateDice(this.dotsAry[5], "rgb(255,255,255)");
    }

    // Get the color for the backgrounds
    // Ensure it doesn't match the previous color
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
        var colors = [c1, c5, c6];

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

    // receive an array of elements and color to animate to the desired color
    function animateDice(ary, color) {
        console.log(ary);
        for (var i=1; i < ary.length; i++) {
            ary[i].style.background = color;
        };
    }

}
