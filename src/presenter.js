import { calcular_precio,impuesto_estado } from "./totalizador";

const first = document.querySelector("#cantidad");
const second = document.querySelector("#precio");
const estado_select = document.querySelector("#estado");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(first.value);
  const precio = Number.parseInt(second.value);
  const estado = estado_select.value;
  const precioNeto = calcular_precio(cantidad, precio);
  const impuesto = impuesto_estado(estado,precioNeto)

  // Crea un elemento de párrafo
  const paragraphPrecioNeto = document.createElement("p");
  paragraphPrecioNeto.textContent = `Precio neto (${cantidad} * ${precio}): ${precioNeto}`;

  const paragraphImpuesto = document.createElement("p");
  paragraphImpuesto.textContent = `Impuesto para ${estado}(${impuesto}%): `;

  // Limpia el contenido anterior de div
  div.innerHTML = "";

  // Agrega el párrafo al div
  div.appendChild(paragraphPrecioNeto);
  div.appendChild(paragraphImpuesto);
});
