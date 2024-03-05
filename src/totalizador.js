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
    let descuento = 0;
    if(totalOrden >= 15000){
      descuento = 15;
    }else
      if(totalOrden >= 10000){
        descuento = 10;
      }else
        if(totalOrden >= 7000){
          descuento = 7;
        }else
          if(totalOrden >= 3000){
            descuento = 5;
          }
          else
            if(totalOrden >= 1000){
              descuento = 3
            }
    return descuento;
  }

  function impuesto_categoria(categoria) {
    let impuesto;
    switch (categoria) {
      case "bebidas":
        impuesto = 7;
        break;
      case "electronicos":
        impuesto = 4;
        break;
      case "muebles":
        impuesto = 3;
        break;
      case "vestimenta":
        impuesto = 2;
        break;
      case "alimentos":
        impuesto = 0;
        break;
      case "material":
        impuesto = 0;
        break;
      case "varios":
        impuesto = 0;
    }
    return impuesto;
  }

  function descuento_categoria(categoria){
    let descuento;
    switch (categoria) {
      case "bebidas":
        descuento = 0;
        break;
    }
    return descuento;
  }
  export {calcular_precio,impuesto_estado,aplicar_impuesto, descuento_totalOrden, impuesto_categoria, descuento_categoria};