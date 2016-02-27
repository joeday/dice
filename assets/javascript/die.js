function SingleDie(bg, sides) {
    this.bg = bg;
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

    // TODO:
    // Construct HTML - separate object that is simply instantiated here?
        // how do different collections of dice work?
        // 1 is easy, 6 is easy
        // different numbered sides?
    // Update colors
    // Sum up for text
    // How does the user select how many dice they want?
    // How does the user select how many sides per die?

}
