import calcular_precioneto from "./totalizador";

const first = document.querySelector("#cantidad");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  div.innerHTML = "<p>" + calcular_precioneto(firstNumber) + "</p>";
});
