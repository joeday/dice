
function getNum(highNum) {
  if (!highNum) {
    highNum = 6;
  }
  var num = Math.floor((Math.random() * highNum) +1)
  var el = document.getElementById("number")
  var r = getRGB();
  var g = getRGB();
  var b = getRGB();
  var rgb = "rgb("+parseInt(r)+","+parseInt(g)+","+parseInt(b)+")";
  el.innerHTML = parseInt(num);
  el.style.color = rgb;
}

function getRGB() {
  var num = Math.floor((Math.random() * 255) +1)
  console.log(num)
  return num;
}


document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      getNum();
    }
}

getNum();