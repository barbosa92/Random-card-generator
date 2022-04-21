/* eslint-disable */
import "bootstrap";
import "./style.css";

// Genera una carta de forma aleatoria
function randomGenerator() {
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = [
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

  let suit = suits[Math.floor(Math.random() * suits.length)];
  let number = numbers[Math.floor(Math.random() * numbers.length)];

  let icon = document.querySelectorAll("i");
  for (let index = 0; index < icon.length; index++) {
    icon[index].innerHTML = suit;
    const attribute = document.createAttribute("class");
    if (suit == "♦" || suit == "♥") {
      attribute.value = "red";
    } else {
      attribute.value = "black";
    }
    icon[index].setAttributeNode(attribute);
  }

  // Crea un atributo "class"
  const attribute = document.createAttribute("class");

  // Define el valor de "class" según el valor de "suit"
  if (suit == "♦" || suit == "♥") {
    attribute.value = "red";
  } else {
    attribute.value = "black";
  }

  // Añade el atributo a l <h1>
  const h1 = document.querySelector("h1");
  h1.setAttributeNode(attribute);

  // Añade el valor de la carta al <h1>
  let numberValue = document.querySelector("h1");
  numberValue.innerHTML = number;
}

// Lanza la función randomGenerator al hacer click en el botón
const generator = document.querySelector("button");
generator.addEventListener("click", randomGenerator);

window.onload = randomGenerator();

// Recoge el valor de ancho registrado en el input lo lo añade como CSS inline al HTML
let inputAncho = document.querySelector(".ancho");
inputAncho.addEventListener("keypress", event => {
  // Guarda el valor al pulsar enter
  if (event.keyCode == 13) {
    // Formatea "valor" para que sea "number"
    let valor = Number(document.querySelector(".ancho").value);
    document.querySelector(".ancho").value = "";

    // Comprueba que el valor introducido sea un número mayor a 0
    if (typeof valor == "number" && valor > 0) {
      // console.log("Valor valido");
      // console.log(valor);

      let card = document.querySelector(".card");
      card.style.width = `${valor}px`;
    } else {
      console.log("Ingresa un valor númerico mayo a 0");
    }
  }
});

// Recoge el valor de alto registrado en el input lo lo añade como CSS inline al HTML
let inputAlto = document.querySelector(".alto");
inputAlto.addEventListener("keypress", event => {
  // Guarda el valor al pulsar enter
  if (event.keyCode == 13) {
    // Formatea "valor" para que sea "number"
    let valor = Number(document.querySelector(".alto").value);
    document.querySelector(".alto").value = "";

    // Comprueba que el valor introducido sea un número mayor a 0
    if (typeof valor == "number" && valor > 0) {
      // console.log("Valor valido");
      // console.log(valor);

      let card = document.querySelector(".card");
      card.style.height = `${valor}px`;
    } else {
      console.log("Ingresa un valor númerico mayo a 0");
    }
  }
});

// Llama a la función randomGenerator cada 5 segundos
setInterval(randomGenerator, 5000);
