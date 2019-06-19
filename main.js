console.log("siema");
const name = "Piotrek";
const age = 24;
let piotrek = null;
console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lat`);

console.log("Witaj, przybyszu!");

const omnie = document.querySelector(".about__paragraph--js");
omnie.innerHTML = `Nazywam się ${name} i mam ${age} lat`;

if ("javascript" != "java") {
  console.log("to prawda!");
}

if (age < 20) {
  console.log("Dzieciak jesteś.");
} else if (age > 20 && age <= 29) {
  console.log("Jesteś dwudziestokilkulatkiem.");
} else {
  console.log("Jesteś 30+.");
}

switch (age) {
  case 20:
    console.log(`masz równo 20 lat`);
    break;
  case 30:
    console.log(`masz równo 30 lat`);
    break;
  default:
    console.log(`masz ${age} lat`);
    break;
}

let oldIndicator;

const amIOld = age > 70 ? `yes` : `no`;
console.log(amIOld);

function calculate(x) {
  x = x + 3;
  console.log(x);
  return x*7;
}

console.log(calculate(2));

const calculateFat = x => (x+3)*7;

console.log(calculateFat(3));