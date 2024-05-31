//gallery pagination
let artworks = document.querySelectorAll(".gallery li");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const MAX = 6;
let index = 1;
const pagenum = Math.floor(artworks.length / MAX);

function displayitems(){
for(let i = 0; i < artworks.length; i++){
    artworks[i].classList.remove("show");
    artworks[i].classList.add("hide");
        if(i >=(index * MAX) - MAX && i < index * MAX){
            artworks[i].classList.add("show");
            artworks[i].classList.remove("hide");
        }
    }
}
function check(){
    if(pagenum == 1){
        prev.style.display = "none";
    }
    else{
        prev.style.display = "block"
    }

    if(pagenum == index){
        next.style.display = "none";
    }
    else{
        next.style.display = "block"
    }
}

console.log(pagenum);

displayitems();
prev.onclick = function(){
    console.log(index);
    index--;
    check();
    displayitems();
}

next.onclick = function(){
    console.log(index);
    index++;
    check();
    displayitems();
};
