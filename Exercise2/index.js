// Bussiness Name Generator

// First Way
/*
function adjective() {

  let ranNum = Math.floor(Math.random() * 3);
  if (ranNum == 0) {
    return "Crazy";
  } 
  else if (ranNum == 1) {
    return "Amazing";
  } 
  else if (ranNum == 2) {
    return "Fire";
  }
}

function shopName() {

  let ranNum = Math.floor(Math.random() * 3);
  if (ranNum == 0) {
    return "Engine";
  } 
  else if (ranNum == 1) {
    return "Food";
  } 
  else if (ranNum == 2) {
    return "Garments";
  }
}

function anotherWord() {

  let ranNum = Math.floor(Math.random() * 3);
  if (ranNum == 0) {
    return "Bros";
  } 
  else if (ranNum == 1) {
    return "Limited";
  } 
  else if (ranNum == 2) {
    return "Hub";
  }
}

console.log("Bussiness Name:", adjective(), shopName(), anotherWord());
*/

// Second Way

let obj1 = {
  1: "Crazy",
  2: "Amazing",
  3: "Fire",
};
let obj2 = {
  1: "Engine",
  2: "Foods",
  3: "Garments",
};
let obj3 = {
  1: "Bros",
  2: "Limited",
  3: "Hub",
};
let ranNum1 = Math.floor(Math.random() * 3) + 1;
let ranNum2 = Math.floor(Math.random() * 3) + 1;
let ranNum3 = Math.floor(Math.random() * 3) + 1;

console.log(`Bussiness Name: ${obj1[ranNum1]} ${obj2[ranNum2]} ${obj3[ranNum3]}`);