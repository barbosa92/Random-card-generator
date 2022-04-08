/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
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
  console.log(suit);
  // console.log(number);

  let icon = document.querySelectorAll("i");
  for (let index = 0; index < icon.length; index++) {
    icon[index].innerHTML = suit;
    const attribute = document.createAttribute("class");
    icon[index].setAttributeNode(attribute);
  }
  // Create a class attribute:
  const attribute = document.createAttribute("class");

  // Set the value of the class attribute:
  if (suit == "♦" || suit == "♥") {
    attribute.value = "red";
  } else {
    attribute.value = "black";
  }

  // Add the class attribute to the first h1:
  const h1 = document.querySelector("h1");
  h1.setAttributeNode(attribute);

  // Añade el valor de la carta al <h1>
  let numberValue = document.querySelector("h1");
  numberValue.innerHTML = number;
};
