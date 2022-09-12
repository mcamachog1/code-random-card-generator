/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cartas = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const palos = ["♠", "♥", "♣", "♦"];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let numero = document.getElementById("numero");
  let paloHeader = document.getElementById("paloHeader");
  let paloFooter = document.getElementById("paloFooter");

  setInterval(function() {
    numero.innerHTML = cartas[Math.floor(Math.random() * 13)];
    let palo = palos[Math.floor(Math.random() * 4)];

    if (palo === "♥" || palo === "♦") {
      paloHeader.style.color = "red";
      paloFooter.style.color = "red";
      numero.style.color = "red";
    } else {
      paloHeader.style.color = "black";
      paloFooter.style.color = "black";
      numero.style.color = "black";
    }
    paloHeader.innerHTML = palo;
    paloFooter.innerHTML = palo;
  }, 2000);
};
