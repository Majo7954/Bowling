function lanzar(bolos, tiradas) {
    tiradas.push(bolos);
}

function calcularPuntaje(tiradas) {
    let puntaje = 0;
    let indiceTirada = 0;

    for (let cuadro = 0; cuadro < 10; cuadro++) {
        if (esSpare(tiradas, indiceTirada)) {
            puntaje += 10 + tiradas[indiceTirada + 2];
            indiceTirada += 2;
        } else {
            puntaje += sumaTiradasEnCuadro(tiradas, indiceTirada);
            indiceTirada += 2;
        }
    }

    return puntaje;
}

function esSpare(tiradas, indiceTirada) {
    return sumaTiradasEnCuadro(tiradas, indiceTirada) === 10;
}

function sumaTiradasEnCuadro(tiradas, indiceTirada) {
    return tiradas[indiceTirada] + tiradas[indiceTirada + 1];
}

export {lanzar, calcularPuntaje };
