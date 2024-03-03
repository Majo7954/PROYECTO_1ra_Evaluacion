import calcular_precioneto from "./totalizador.js";

describe("Calcular precio", () => {
  it("Devolver la cantidad ingresada", () => {
    expect(calcular_precioneto(2)).toEqual(2);
  });
});
