//timer to change gif of greetng
setTimeout(function(){
    document.getElementById("title").src = "./images/staticani.gif";
}, 1250);


//timer for social media buttons
setTimeout(function(){
    document.getElementById("socialdiv").style.visibility = "visible";
}, 1250);

//dog animation
const dog = document.getElementById("dog");
const portrait = document.getElementById("portrait");
const back = document.getElementById("background");
const tail = document.getElementById("tail");

portrait.onmouseover = function() {mouseOver()};
portrait.onmouseleave = function() {mouseOff()};

function mouseOver(){
  dog.style.opacity = "1";
  dog.style.transform = "translateY(-190px) translateX(-40px)";
  back.style.transform = "rotate(20deg)";
  portrait.style.transform = "translateX(10px)";
  dog.style.transition = "all 1s"
  back.style.transition = "all 1s"
  portrait.style.transition = "all 1s"
  tail.style.transform = "translateX(-80px)";
  tail.style.transition = "all 1s";
  tail.style.opacity = "0";
}

function mouseOff(){
  dog.style.opacity = "0";
  dog.style.transform = "translateY(100px) translateX(30px)";
  back.style.transform = "rotate(0deg)";
  portrait.style.transform = "translateX(0px)";
  tail.style.transform = "translateX(0px)";
  tail.style.opacity = "1";
}