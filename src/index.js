import "./styles.css";
import { greeting } from "./home.js";


let picIndex = 0;

//display animals

showCarousel();

document.querySelector("#animals").addEventListener("click", () =>{
location.reload();
});

function showCarousel() {
  let i;
  let pics = document.querySelectorAll(".picContainer");

  for (i = 0; i < pics.length; i++) {
      pics[i].style.display = "none";
  }

  picIndex++;

  if (picIndex > pics.length) {picIndex = 1}
  pics[picIndex-1].style.display = "block";
  setTimeout(showCarousel, 3000);
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
    document.querySelector(".dropMenu").style.display = "none";
    container.innerHTML = "";

    const plant1 = document.createElement("div");
    plant1.classList.add("picContainer");
    plant1.innerHTML = `
        <div class="picName">Prickly pear</div>
        <img id="pic1" style="width: 100%;">
        <div class="picNumber">1 / 4</div>
    `

    const plant2 = document.createElement("div");
    plant2.classList.add("picContainer");
    plant2.innerHTML = `
        <div class="picName">Who knows...</div>
        <img id="pic2" style="width: 100%;">
        <div class="picNumber">2 / 4</div>
    `

    const plant3 = document.createElement("div");
    plant3.classList.add("picContainer");
    plant3.innerHTML = `
        <div class="picName">Poppy</div>
        <img id="pic3" style="width: 100%;">
        <div class="picNumber">3 / 4</div>
    `

    const plant4 = document.createElement("div");
    plant4.classList.add("picContainer");
    plant4.innerHTML = `
        <div class="picName">Dandelion</div>
        <img id="pic4" style="width: 100%;">
        <div class="picNumber">4 / 4</div>
    `

    container.appendChild(plant1);
    container.appendChild(plant2);
    container.appendChild(plant3);
    container.appendChild(plant4);

    document.querySelector("#pic1").setAttribute("src", "206ffa3bc378df1fb663.jpeg");
    document.querySelector("#pic2").setAttribute("src", "39e51f3f62f0a98a1df3.jpeg");
    document.querySelector("#pic3").setAttribute("src", "9cf720a6fc31e961a431.jpeg");
    document.querySelector("#pic4").setAttribute("src", "b238b4bb87bb94a31120.jpeg");
  });

