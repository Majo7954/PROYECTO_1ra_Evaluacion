function calcular_precio(a,b) {
  const cantidad=a;
  const precio=b;
  var precioneto=cantidad*precio;
  return precioneto;
  }
  
  function impuesto_estado(estado, precio) {
    let impuesto;
    switch (estado) {
      case "CA":
        impuesto = 8.25;
        break;
      case "NV":
        impuesto = 8.00;
        break;
      case "UT":
        impuesto = 6.65;
        break;
      default:
        impuesto = 0;
    }
    return impuesto;
  }
  export {calcular_precio,impuesto_estado};