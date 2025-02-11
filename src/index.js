import "./styles.css";
import { greeting } from "./home.js";

//display corousel
let picIndex = 0;
showPics();

function showPics() {
  let i;
  let pics = document.querySelectorAll(".picFade");

  for (i = 0; i < pics.length; i++) {
    pics[i].style.display = "none";
  }

  picIndex++;

  if (picIndex > pics.length) {picIndex = 1}
  pics[picIndex-1].style.display = "block";
  setTimeout(showPics, 3000);
}

//display drop down menu
document.querySelector("#dropButton").addEventListener("click", () =>{
    const dropMenu = document.querySelector(".dropMenu");

    if (dropMenu.style.display === "grid"){
        dropMenu.style.display = "none";
    }
    else { dropMenu.style.display = "grid"};
});


