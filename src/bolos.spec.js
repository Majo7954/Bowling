import { lanzar, calcularPuntaje } from "./bolos.js";

describe("Juego de bolos", () => {
  let tiradas;

  beforeEach(() => {
    tiradas = [];
  });

  function lanzarVarios(n, bolos, tiradas) {
    for (let i = 0; i < n; i++) {
      lanzar(bolos, tiradas);
    }
  }

  it("debería calcular correctamente el puntaje para un juego de cero", () => {
    lanzarVarios(20, 0, tiradas);
    expect(calcularPuntaje(tiradas)).toEqual(0);
  });

});
