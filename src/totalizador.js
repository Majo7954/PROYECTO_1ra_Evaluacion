function calcular_precio(a,b) {
  const cantidad=a;
  const precio=b;
  var precioneto=cantidad*precio;
  return precioneto;
  }
  
function impuesto_estado(estado,precio){
  let impuesto;
  if(estado=="CA"){
    impuesto=8.25;
  }
  return impuesto;
}
  export {calcular_precio,impuesto_estado};