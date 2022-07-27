

/* export */ function Suma (a, b, ...c) {
    let Resultado = a + b

    c.forEach (function(n) {
        Resultado += n
    }) 

    return Resultado

}

/* export */ function Resta (a, b, ...c) {
    let Resultado = a - b

    c.forEach (function(n) {
        Resultado -= n
    }) 

    return Resultado

}

// Otra forma de exportar nuestras funciones es mediante un obj:

export const SUMARESTA = {
    Suma,
    Resta
}

