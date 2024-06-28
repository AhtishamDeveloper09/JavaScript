// Faulty Calaculator

let a = 10;
let b = 2;
let random = Math.random();
console.log("Random number:", random);

if (random < 0.1) {
  console.log("a + b =", a * b);
  console.log("a * b =", a + b);
  console.log("a - b =", a / b);
  console.log("a / b =", a ** b);
} else {
  console.log("a + b =", a + b);
  console.log("a * b =", a * b);
  console.log("a - b =", a - b);
  console.log("a / b =", a / b);
}
