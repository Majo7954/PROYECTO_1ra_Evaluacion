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
    if(totalOrden >= 30000){
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
      case "muebles":
        descuento = 0;
        break;
      case "vestimenta":
        descuento = 0;
        break;
      case "varios":
        descuento = 0;
        break;
      case "electronicos":
        descuento = 1;
        break;
      case "material":
        descuento = 1.5;
        break;
      case "alimentos":
        descuento = 2;
        break;
    }
    return descuento;
  }

  function aplicar_descuento(descuento, precioNeto){
    let descuento_dolares=precioNeto*(descuento/100)
    return descuento_dolares;
  }

  function costoEnvio(peso){
    let costo;
    if(peso>200){
      costo=9;
    } else if (peso>=101 && peso<=200){
      costo=8;
    } else if (peso>=81 && peso<=100){
      costo=6.5;
    } else if (peso>=41 && peso<=80){
      costo=6;
    } else if (peso>=21 && peso<=40){
      costo=5;
    } else if (peso>=11 && peso<=20){
      costo=3.5;
    } else if (peso>=0 && peso<=10){
      costo=0;
    }
    return costo;
  }

  function descuentoEnvio(tipoCliente){
    let descuento;
    switch(tipoCliente){
      case "Normal":
        descuento = 0;
        break;
      case "Recurrente":
        descuento = 0.5;
        break;
      case "Antiguo_Recurrente":
        descuento = 1;
        break;
    }
    return descuento;
  }

  export {calcular_precio,impuesto_estado,aplicar_impuesto, descuento_totalOrden, impuesto_categoria, descuento_categoria, aplicar_descuento, costoEnvio, descuentoEnvio};