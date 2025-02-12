import "./styles.css";
import { greeting } from "./home.js";


let picIndex = 0;

//display animals

showAnimals();
document.querySelector("#animals").addEventListener("click", () =>{
    
    showAnimals();
});

function showAnimals() {
    let i;
    let pics = document.querySelectorAll(".animalPic");

    for (i = 0; i < pics.length; i++) {
        pics[i].style.display = "none";
    }

    picIndex++;

    if (picIndex > pics.length) {picIndex = 1}
    pics[picIndex-1].style.display = "block";
    setTimeout(showAnimals, 3000);
}

//display drop down menu
document.querySelector("#dropButton").addEventListener("click", () =>{
    const dropMenu = document.querySelector(".dropMenu");

    if (dropMenu.style.display === "grid"){
        dropMenu.style.display = "none";
    }
    else { dropMenu.style.display = "grid"};
});


//display plants

document.querySelector("#plants").addEventListener("click", () =>{
    const container = document.querySelector(".carousel");
    container.innerHTML = "";
})