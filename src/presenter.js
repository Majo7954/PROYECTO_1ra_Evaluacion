import calcular_precio from "./totalizador";

const first = document.querySelector("#cantidad");
const second = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + calcular_precio(firstNumber,secondNumber) + "</p>";
});
