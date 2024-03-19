function lanzar(bolos, tiradas) {
    tiradas.push(bolos);
}

function calcularPuntaje(tiradas) {
    let puntaje = 0;
    for (let tirada of tiradas) {
        puntaje += tirada;
    }
    return puntaje;
}

export {lanzar, calcularPuntaje };
