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

  it("debería calcular correctamente el puntaje para todos los unos", () => {
    lanzarVarios(20, 1, tiradas);
    expect(calcularPuntaje(tiradas)).toEqual(20);
  });

  it("debería calcular correctamente el puntaje sin spare ni strike", () => {
    lanzarVarios(20, 3, tiradas);
    expect(calcularPuntaje(tiradas)).toEqual(60);
  });

  it("debería calcular correctamente el puntaje para un spare", () => {
    lanzarVarios(2, 5, tiradas);
    lanzar(3, tiradas);
    lanzarVarios(17, 0, tiradas);
    expect(calcularPuntaje(tiradas)).toEqual(16);
  });

  it("debería calcular correctamente el puntaje para un strike", () => {
    lanzar(10, tiradas);
    lanzar(3, tiradas);
    lanzar(4, tiradas);
    lanzarVarios(16, 0, tiradas);
    expect(calcularPuntaje(tiradas)).toEqual(24);
  });
});
