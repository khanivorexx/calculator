const urdun = document.getElementById("urdun");

let firstNumber = 0;
let secondNumber = 0;
let action = null;
let hariuGarsan = false;

const getNumber = (number) => {
  if (hariuGarsan) {
    firstNumber = 0;
    hariuGarsan = false;
  }
  if (action) {
    secondNumber = secondNumber * 10 + number;
    urdun.textContent = secondNumber;
  } else {
    firstNumber = firstNumber * 10 + number;
    urdun.textContent = firstNumber;
  }
};
const getAction = (uildel) => {
  action = uildel;
  hariuGarsan = false;
};
const reset = () => {
  firstNumber = 0;
  secondNumber = 0;
  action = null;
  hariuGarsan = false;
  urdun.textContent = 0;
};
const tentsuu = () => {
  let hariu = 0;
  if (action === "nemeh") {
    hariu = firstNumber + secondNumber;
  } else if (action === "hasah") {
    hariu = firstNumber - secondNumber;
  } else if (action === "urjih") {
    hariu = firstNumber * secondNumber;
  } else if (action === "huvaah") {
    if (secondNumber === 0) {
      reset();
      urdun.textContent = "Aldaa";
      return;
    }
    hariu = firstNumber / secondNumber;
    hariuGarsan = true;
  }
  urdun.textContent = hariu;
  action = null;
  firstNumber = hariu;
  secondNumber = 0;
  hariuGarsan = true;
};
