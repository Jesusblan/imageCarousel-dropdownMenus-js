import "./styles.css";
import { greeting } from "./home.js";


let picIndex = 0;
showSlides();

function showSlides() {
  let i;
  let pics = document.querySelectorAll(".picFade");

  for (i = 0; i < pics.length; i++) {
    pics[i].style.display = "none";
  }

  picIndex++;

  if (picIndex > pics.length) {picIndex = 1}
  pics[picIndex-1].style.display = "block";
  setTimeout(showSlides, 2500);
}



