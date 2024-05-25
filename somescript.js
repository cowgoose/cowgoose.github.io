//timer to change gif of greetng
setTimeout(function(){
    document.getElementById("title").src = "./images/staticani.gif";
}, 1300);


//timer for social media buttons
setTimeout(function(){
    document.getElementById("socialdiv").style.visibility = "visible";
}, 1300);

let t = 0; // time variable

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(40, 200, 40);
}

const body = document.getElementsByTagName('body').style.background = draw();

