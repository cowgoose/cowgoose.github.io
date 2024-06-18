//gallery pagination
let artworks = document.querySelectorAll(".gallery li");
let art = document.querySelectorAll(".gallery li img");
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
        if(i >= (index * MAX) - MAX && i < index * MAX){
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


prev.onclick = function(){
    index--;
    check();
    displayitems();
}

next.onclick = function(){
    index++;
    check();
    displayitems();
};

window.onload = function(){
check();
displayitems();
};

//lightbox
const lightbox = document.createElement("div");
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

art.forEach(image => {
    image.addEventListener("click", e => {
        lightbox.classList.add('active');
        const newpic = document.createElement("img");
        const caption = document.createElement('p');
        caption.innerText = image.alt;
        newpic.src = image.src;
        
        //for wider pictures, fits better on screen when lightbox is active
        if(newpic.width > newpic.height){
            newpic.style.height = 'auto';
        }

        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(newpic);
        lightbox.appendChild(caption);
    })
})

lightbox.addEventListener('click', e =>{
    if(e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
})
