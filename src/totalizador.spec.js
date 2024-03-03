import calcular_precio from "./totalizador.js";

describe("Calcular precio", () => {
  it("Devolver la cantidad ingresada", () => {
    expect(calcular_precio(1,2)).toEqual(2);
  });

  it("Devolver el precio ingresado", () => {
    expect(calcular_precio(1,2)).toEqual(2);
  });
});
