//gallery pagination
let artworks = document.querySelectorAll(".gallery li");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let page = document.getElementById("pnum");
const MAX = 6;
let index = 1;
let pagenum = Math.ceil(artworks.length / MAX);


//applies class to each image to show 6 art pieces at a time
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

//to avoid blank pages, disable going past 0 and MAX
function check(){
    if(index == 1){
        prev.style.visibility = "hidden";
    }
    else{
        prev.style.visibility = "visible"
    }

    if(index == pagenum){
        next.style.visibility = "hidden";
    }
    else{
        next.style.visibility = "visible"
    }
    page.innerHTML = index;
}

console.log(pagenum);

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

window.onload = function(){
check();
displayitems();
};

