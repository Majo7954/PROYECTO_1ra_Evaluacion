import {calcular_precio, impuesto_estado, aplicar_impuesto} from "./totalizador.js";

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

  it("Mostrar el impuesto en dolares", () => {
    expect(aplicar_impuesto(impuesto_estado("TX"),calcular_precio(20,3))).toEqual(3.75);
  });

});
