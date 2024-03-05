import {calcular_precio, impuesto_estado, aplicar_impuesto, descuento_totalOrden, impuesto_categoria, descuento_categoria } from "./totalizador.js";

describe("Calcular precio", () => {
  it("Devolver la cantidad ingresada", () => {
    expect(calcular_precio(2,1)).toEqual(2);
  });

  it("Devolver el precio ingresado", () => {
    expect(calcular_precio(1,2)).toEqual(2);
  });

  it("Devolver la multiplicacion del precio y cantidad (Precio Neto)", () => {
    expect(calcular_precio(1,2)).toEqual(2);
  });

  it("Devolver la multiplicacion del precio y cantidad (Precio Neto)", () => {
    expect(calcular_precio(1,2)).toEqual(2);
  });

  it("Selecionar estado(CA) y devolver impuesto en porcentaje", () => {
    expect(impuesto_estado("CA")).toEqual(8.25);
  });

  it("Selecionar estado(NV) y devolver impuesto en porcentaje", () => {
    expect(impuesto_estado("NV")).toEqual(8.00);
  });

  it("Selecionar estado(UT) y devolver impuesto en porcentaje", () => {
    expect(impuesto_estado("UT")).toEqual(6.65);
  });

  it("Selecionar estado(TX) y devolver impuesto en porcentaje", () => {
    expect(impuesto_estado("TX")).toEqual(6.25);
  });

  it("Selecionar estado(AL) y devolver impuesto en porcentaje", () => {
    expect(impuesto_estado("AL")).toEqual(4.00);
  });

  it("Mostrar el impuesto en dolares(TX)", () => {
    expect(aplicar_impuesto(impuesto_estado("TX"),calcular_precio(20,3))).toEqual(3.75);
  });

  it("Mostrar el impuesto en dolares(CA)", () => {
    expect(aplicar_impuesto(impuesto_estado("CA"),calcular_precio(20,3))).toEqual(4.95);
  });

  it("Mostrar el impuesto en dolares(AL)", () => {
    expect(aplicar_impuesto(impuesto_estado("AL"),calcular_precio(20,3))).toEqual(2.4);
  });

  it("Mostrar el impuesto en dolares(NV)", () => {
    expect(aplicar_impuesto(impuesto_estado("NV"),calcular_precio(20,3))).toEqual(4.8);
  });

  it("Mostrar el impuesto en dolares(UT)", () => {
    expect(aplicar_impuesto(impuesto_estado("UT"),calcular_precio(20,3))).toEqual(3.99);
  });

  it("Mostrar descuento de 3% si el total de la orden es mayor o igual a 1000", () => {
    expect(descuento_totalOrden(1000)).toEqual(3);
  });
  it("Mostrar descuento de 5% si el total de la orden es mayor o igual a 3000", () => {
    expect(descuento_totalOrden(3000)).toEqual(5);
  });
  it("Mostrar descuento de 5% si el total de la orden es mayor o igual a 3000", () => {
    expect(descuento_totalOrden(4000)).toEqual(5);
  });
  it("Mostrar descuento de 7% si el total de la orden es mayor o igual a 7000", () => {
    expect(descuento_totalOrden(7000)).toEqual(7);
  });
  it("Mostrar descuento de 7% si el total de la orden es mayor o igual a 7000", () => {
    expect(descuento_totalOrden(8000)).toEqual(7);
  });
  it("Mostrar descuento de 10% si el total de la orden es mayor o igual a 10000", () => {
    expect(descuento_totalOrden(10000)).toEqual(10);
  });
  it("Mostrar descuento de 10% si el total de la orden es mayor o igual a 10000", () => {
    expect(descuento_totalOrden(11000)).toEqual(10);
  });
  it("Mostrar descuento de 15% si el total de la orden es mayor o igual a 30000", () => {
    expect(descuento_totalOrden(30000)).toEqual(15);
  });
  it("Mostrar descuento de 15% si el total de la orden es mayor o igual a 30000", () => {
    expect(descuento_totalOrden(31000)).toEqual(15);
  });
  it("Mostrar descuento de 30$ para un total de orden de 1000$", () => {
    expect(descuento_totalOrden(calcular_precio(1000,1))*calcular_precio(1000,1)/100).toEqual(30);
  });
  it("Mostrar descuento de 150$ para un total de orden de 3000$", () => {
    expect(descuento_totalOrden(calcular_precio(3000,1))*calcular_precio(3000,1)/100).toEqual(150);
  });
  it("Mostrar descuento de 490$ para un total de orden de 7000$", () => {
    expect(descuento_totalOrden(calcular_precio(7000,1))*calcular_precio(7000,1)/100).toEqual(490);
  });
  it("Mostrar descuento de 1000$ para un total de orden de 10000$", () => {
    expect(descuento_totalOrden(calcular_precio(10000,1))*calcular_precio(10000,1)/100).toEqual(1000);
  });
  it("Mostrar descuento de 4500$ para un total de orden de 30000$", () => {
    expect(descuento_totalOrden(calcular_precio(30000,1))*calcular_precio(30000,1)/100).toEqual(4500);
  });
  it("Se muestra el precio total aplicando el descuento y el impuesto", () => {
    expect(calcular_precio(20,3)+aplicar_impuesto(impuesto_estado("TX"),calcular_precio(20,3))-descuento_totalOrden(calcular_precio(20,3))).toEqual(63.75);
  });

  it("Mostrar impuesto de 7% si la categoria del producto es bebidas alcoholicas", () => {
    expect(impuesto_categoria("bebidas")).toEqual(7);
  });
  it("Mostrar impuesto de 4% si la categoria del producto es electronicos", () => {
    expect(impuesto_categoria("electronicos")).toEqual(4);
  });
  it("Mostrar impuesto de 3% si la categoria del producto es muebles", () => {
    expect(impuesto_categoria("muebles")).toEqual(3);
  });
  it("Mostrar impuesto de 2% si la categoria del producto es vestimenta", () => {
    expect(impuesto_categoria("vestimenta")).toEqual(2);
  });
  it("Mostrar impuesto de 0% si la categoria del producto es alimentos", () => {
    expect(impuesto_categoria("alimentos")).toEqual(0);
  });
  it("Mostrar impuesto de 0% si la categoria del producto es material de escritorio", () => {
    expect(impuesto_categoria("material")).toEqual(0);
  });
  it("Mostrar impuesto de 0% si la categoria del producto es varios", () => {
    expect(impuesto_categoria("varios")).toEqual(0);
  });
  it("Se muestra el impuesto segun categoria del producto expresado en dolares", () => {
    expect(impuesto_categoria("bebidas")*calcular_precio(10,2)/100).toEqual(1.4);
  });
  it("Se muestra el impuesto segun categoria del producto expresado en dolares", () => {
    expect(impuesto_categoria("electronicos")*calcular_precio(10,2)/100).toEqual(0.8);
  });
  it("Se muestra el impuesto segun categoria del producto expresado en dolares", () => {
    expect(impuesto_categoria("muebles")*calcular_precio(10,2)/100).toEqual(0.6);
  });
  it("Se muestra el impuesto segun categoria del producto expresado en dolares", () => {
    expect(impuesto_categoria("vestimenta")*calcular_precio(10,2)/100).toEqual(0.4);
  });
  it("Se muestra el impuesto segun categoria del producto expresado en dolares", () => {
    expect(impuesto_categoria("alimentos")*calcular_precio(10,2)/100).toEqual(0);
  });
  it("Se muestra el impuesto segun categoria del producto expresado en dolares", () => {
    expect(impuesto_categoria("material")*calcular_precio(10,2)/100).toEqual(0);
  });
  it("Se muestra el impuesto segun categoria del producto expresado en dolares", () => {
    expect(impuesto_categoria("varios")*calcular_precio(10,2)/100).toEqual(0);
  });

  it("Devolver descuento por categoria(bebidas)", () => {
    expect(descuento_categoria("bebidas")).toEqual(0);
  });

  it("Devolver descuento por categoria(muebles)", () => {
    expect(descuento_categoria("muebles")).toEqual(0);
  });
});

