function calcular_precio(a,b) {
  const cantidad=a;
  const precio=b;
  var precioneto=cantidad*precio;
  return precioneto;
  }
  
  function impuesto_estado(estado) {
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
      case "TX":
        impuesto = 6.25;
        break;
      case "AL":
        impuesto = 4.00;
        break;
      default:
        impuesto = 0;
    }
    return impuesto;
  }

  function aplicar_impuesto(impuesto, precioNeto){
    let impuesto_dolares=precioNeto*(impuesto/100)
    return impuesto_dolares;
  }

  function descuento_totalOrden(totalOrden) {
    let descuento;
    if(totalOrden >= 3000){
      descuento = 5;
    }else
      if(totalOrden >= 1000){
        descuento = 3;
      }else
      descuento = 0;
    return descuento;
  }

  export {calcular_precio,impuesto_estado,aplicar_impuesto, descuento_totalOrden};