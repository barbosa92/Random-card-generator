/* eslint-disable */
import "bootstrap";
import "./style.css";
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

const generator = document.querySelector("button");
generator.addEventListener("click", randomGenerator);

window.onload = function() {
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
};
