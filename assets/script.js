const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Variables globales pour le carousel

const dots = document.querySelector(".dots"); //déclare la variable qui cible et affiche les dot le conteneur dots
let index = 0; // declare variable index pour le array
const arrowRigth = document.querySelector(".arrow_right"); //variables pour recuperer la classe des fleches
const arrowLeft = document.querySelector(".arrow_left");
const img = document.querySelector(".banner-img"); //variable qui recupere les img du conteneur banner
const p = document.querySelector("#banner p"); //variable qui recupere le texte du conteneur banner

//Affichage du clic de la flèche droite

function clickRight() {
  arrowRigth.addEventListener("click", () => {
    const dots = document.querySelectorAll(".dots .dot");
    dots[index].classList.remove("dot_selected");
    index++;
    if (index > slides.length - 1) {
      index = 0;
    }
    img.src = "./assets/images/slideshow/"+slides[index].image;
    p.innerHTML = slides[index].tagLine;
    dots[index].classList.add("dot_selected");
  });
}
clickRight();

//Affichage du clic de la flèche gauche

function clickLeft() {
  arrowLeft.addEventListener("click", () => {
    const dots = document.querySelectorAll(".dots .dot");
    dots[index].classList.remove("dot_selected");
    index--;
    if (index < 0) {
      index = slides.length - 1;
    }
    img.src = "./assets/images/slideshow/"+slides[index].image;
    p.innerHTML = slides[index].tagLine;
    dots[index].classList.add("dot_selected");
  });
}
clickLeft();

// Affichage des dots dans le carousel

function displayDots() {
  for (let i = 0; i < slides.length; i++) {
    //on affiche le nb de dot que l'on veut
    const dot = document.createElement("div"); //on crée la div qui affichera notre class css du dot
    dot.classList.add("dot");
    dots.appendChild(dot); //on declare que notre div dot  appartient au conteneur dots

    //pour avoir un dot selectionée
    if (i == index) {
      dot.classList.add("dot_selected");
    }
  }
}
displayDots();
