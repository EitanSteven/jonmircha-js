// Vamos a crear una constante para exportar:

export const PI = Math.PI

export let Usuario = "Eitan"
let Contraseña = "Qwerty"

// Exp Default asigna una exportacion por default y no se puede hacer dos veces.

// Para exportar por defecto una variable, primero hay que declararla:

const DEFECTO = "Defecto"
export default DEFECTO

export class Saludar {
    constructor() {
        console.log("Hola, Modulos +ES6")
    }
}