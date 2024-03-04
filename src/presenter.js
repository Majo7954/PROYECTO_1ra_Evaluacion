import { calcular_precio, impuesto_estado, aplicar_impuesto, descuento_totalOrden, impuesto_categoria } from "./totalizador";

const first = document.querySelector("#cantidad");
const second = document.querySelector("#precio");
const estado_select = document.querySelector("#estado");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");
const categoria_select = document.querySelector("#categoria");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(first.value);
  const precio = Number.parseInt(second.value);
  const estado = estado_select.value;
  const categoria = categoria_select.value;
  const precioNeto = calcular_precio(cantidad, precio);
  const impuesto = impuesto_estado(estado);
  const impuestoAplicado=aplicar_impuesto(impuesto_estado(estado),calcular_precio(cantidad, precio));
  const descuento = descuento_totalOrden(precioNeto);
  const descuentoAplicado = precioNeto*descuento/100;
  const precioTotal = precioNeto + impuestoAplicado - descuentoAplicado;
  const impuesto_adicionalProducto = impuesto_categoria(categoria);

  // Crea un elemento de párrafo
  const paragraphPrecioNeto = document.createElement("p");
  paragraphPrecioNeto.textContent = `Precio neto (${cantidad} * ${precio}): ${precioNeto}`;

  const paragraphImpuesto = document.createElement("p");
  paragraphImpuesto.textContent = `Impuesto para ${estado}(${impuesto}%): ${impuestoAplicado}`;

  // Limpia el contenido anterior de div
  div.innerHTML = "";

  // Agrega el párrafo al div
  var mensaje_descuento = "<p> Descuento (" + descuento + "%): "+ descuentoAplicado + "<p/>";
  var mensaje_impuestoProducto = "<p> Impuesto para " + categoria + "(" + impuesto_adicionalProducto + "%): " + "<p/>";
  var mensaje_precioTotal = "<p> Precio Total (descuento e impuesto): $" + precioTotal + "</p>";
  div.innerHTML = mensaje_descuento + mensaje_impuestoProducto + mensaje_precioTotal;
  div.appendChild(paragraphPrecioNeto);
  div.appendChild(paragraphImpuesto);

});
