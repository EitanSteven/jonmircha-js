//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// Solucion Corta:

/*
let SCorta = prompt("Ingrese su Cadena de Texto: ")
console.log(`Su cadena de Texto es: ${SCorta}`)
console.log(`La longitud de su cadena es ${SCorta.length}`)
*/

// Solucion Extendida:
/*
function stringCounter (Cadena) {
    if (Cadena === null) {
        console.warn('No ingresaste un texto')
    } else {
        console.log(`la cadena es "${Cadena}", tiene ${Cadena.length} Caracteres`)
    }
}

let getString = prompt("Ingrese su texto: ")
stringCounter(getString)
*/




// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
/*
function cutString (Cadena, CCutter) {
    if (Cadena === "") {
        console.warn('Te falto un dato')
    } else if (CCutter === "") {
        console.warn('Te falta un Parametro')
    } else {
        console.log(`El texto ingresado es "${Cadena}", y los primeros ${CCutter} caracteres son: ${Cadena.slice(0, CCutter)}`)
    }
}

// El metodo slice(p1, p2) recibe dos parametros, los cuales indican desde donde hasta donde leer el String

let getString = prompt('Ingrese su Texto: ')
let getCutter = prompt('¿Cuantos caracteres quiere?: ')
cutString(getString, getCutter)
*/





// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']
/*
function stringToArray (Cadena, Caracter) {

    console.log(`El texto Ingresado es: ${Cadena}`)
    console.log(`Desea separarlo por ${Caracter}`)
    console.log(Cadena.split(Caracter))

}

let getCadena = prompt('Ingrese su Texto: ')
let getCaracter = prompt('¿Por que Caracter desea dividir?')

stringToArray(getCadena, getCaracter)
*/




// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
/*
let repeatString = function (Cadena = "", Repetidor = undefined) {
    
    if (!Cadena) return console.warn('Debes ingresar un Texto')
    
    if (!Repetidor) return console.warn('Ingresa un Repetidor')

    if (Repetidor === 0) return console.warn('Ingresa un entero mayor a 0')

    if(Math.sign(Repetidor) === -1) return console.error('Ingresa un entero mayor a 0')

    console.log(`El texto ingresado es ${Cadena}, y se va a repetir ${Repetidor} veces`)

    for (i = 1; i <= Repetidor; i = i+1) {
        console.log(Cadena, i)
    }
}

let getCadena = prompt('Ingrese el Texto: ')
let getRepetidor = prompt('Ingrese Repetidor ')

repeatString(getCadena, getRepetidor)
*/




// 6) Programa una funcion para contar el numero de veces que se repite una palabra en un texto largo. Ej: "Hola Mundo, adios Mundo" Palabra "Mundo", devuelve 2.
// Para este ej, usaremos el metodo indefOf(String, Posicion) que busca un texto dentro de otro. Y se detiene cuando encuentra una coincidencia. Cuando indexOf no encuentra coincidencias, devuelve -1
/*
const wordTracker = (Cadena ="", Palabra="") => {
    if (!Cadena) return console.warn('No ingresaste un Texto')
    if (!Palabra) return console.warn("No ingresaste una palabra")

    let i = 0, Contador = 0

    while (i !== -1) {
        i = Cadena.indexOf(Palabra, i)  
        if (i !== -1) {
            i++,
            Contador++
        }
    }
    return console.info(`La palabra "${Palabra}", se repite ${Contador} veces`)
}

// i funciona de la siguiente manera, le indica a indefOf, cuales de las coincidencias te devuelve. Como lo que queremos es contar la cantidad de coincidencias y no obtener sus posiciones, hacemos que i vaya aumentando.
// i = 0 Busca la primera coincidencia.
// i = 1 Busca la segunda, etc, etc...

let getCadena = prompt('Ingrese su Texto')
let getPalabra = prompt('Ingrese la Palabra a Contar')
wordTracker(getCadena, getPalabra)
*/




// 7) Programa una funcion que valide si una palarba o frase dada es un palindromo. Ej: funcion(Salas) devuelve True
/*
const validaPalindromo = (Texto = "") => {

    if (!Texto) return console.warn('No ingresaste un Texto')
    Texto = Texto.toLowerCase() // Evitar el Key Sensitive

    let alReves = Texto.split("").reverse().join("")
    // alReves = Texto. Convierte cada caracter del Texto en una posicion de un array, lo da vuelta, y lo vuelve a transformar en un texto.  

    if (Texto === alReves) {
        console.info(`El Texto "${Texto}", es palindromo`)
    } else {console.info(`El Texto "${Texto}", no es palindromo`)}
}

let getTexto = prompt('Ingrese Texto')
validaPalindromo(getTexto)
*/




// 8) Programa una funcion que elimine un patron repetitivo de un texto, ej: funcion("xy1, xy2, xy3, xy4", xy) devuelve "1, 2, 3, 4"
/*
const eliminaPtron = (Texto="", Patron="") => {
    if (!Texto && !Patron) return console.warn('Ingrese parametros') 
    if (!Texto) return console.warn('No ah ingresado un Texto')
    if (!Patron) return console.warn('No ah ingresado un Patron a eliminar')

    console.info(Texto.replace(new RegExp(Patron, "ig"), ""))

    // la exp regular busca el patron y lo identifica (i no discrimina entre mayus y minus, y g no se detiene en la primera coincidencia), luego, el replace remplaza estos caracteres eliminados por nada (Los elimina). Por ultimo, se imprime el resultado final.

}

let getTexto = prompt('Ingrese el Texto')
let getPatron = prompt('Ingrese Patron a Eliminar')

eliminaPtron(getTexto, getPatron)
*/

// 9( Programa una funcion que devuelva un numero random entre dos margenes.
// Ej random(10, 20) return 15

// console.log(Math.random() *10)
/*
const randomizador = (margenA = 0, margenB = 0) => {

    if (!margenA && !margenB) return console.warn('Por favor, ingrese parametros')
    if (!margenA) return console.warn('Falto el Primer Parametro')
    if (!margenB) return console.warn('Falto el Segundo Parametro')

    let inTo = margenB - margenA
    let rta = 0
    
    rta = Math.round(Math.random() * inTo)
    rta = rta + margenA

    console.log(rta)
}

randomizador(10, 15)
*/

// 10) Programa una funcion que verifique si un numero es capicua o no
/*
const validaCapicua = (numero = 0) => {

    if (!numero) return console.warn('Ingrese un numero')
    if (typeof numero !== "number") return console.error('El dato ingresado, no es un numero!')

    numero = numero.toString()
    let alReves = numero.split("").reverse().join("")

    if (numero === alReves) {
        console.info(`El numero ingresado ${numero}, es Capicua`)
    } else {
        console.info(`El numero ingresado ${numero}, no es Capicua`)
    }
}

validaCapicua("2000")
validaCapicua()
validaCapicua(2000)
validaCapicua(2002)
*/




// 11) Programa una funcion, que calcule el factorial de un numero Ej, factor de 5:
// 5 x 4 = 20
// 20 x 3 = 60
// 60 x 2 = 120
// 120 x 1 = 120
// Restriccion: No se puede de -n ni de 0
/*
const getFactorial = (numero = undefined) => {

    if (!numero) return console.warn('Por favor, ingrese un numero')
    if (typeof numero !== "number") return console.error('El dato ingresado, no es un numero!')
    if (numero === 0) return console.warn('No se puede calcular el factorial de 0')
    if (Math.sign(numero) === -1 ) return console.warn('el numero no puede ser negativo')

    let factorial = 1

    for (let i = numero; i > 1; i-- ) {
        factorial *= i
    }

    return console.info(`El factorial de ${numero} es ${factorial}`)
}

getFactorial(5)
*/


// 12) Programa una funcion que verifique si un numero es primo o no
/*
const verificaPrimo = (numero = undefined) => {

    if (!numero) return console.warn('Por favor, ingrese un numero')
    if (typeof numero !== "number") return console.error('El dato ingresado, no es un numero!')
    if (numero === 0) return console.warn('No se puede calcular el factorial de 0')
    if (numero === 1) return console.warn('No se puede calcular el factorial de 1')
    if (Math.sign(numero) === -1 ) return console.warn('el numero no puede ser negativo')

    if ((numero % 2) === 0) {
        console.info('El numero no es primo')
    } else {console.log('El numero es Primo')}
} 

verificaPrimo(7)
*/

// 13) Programa una funcion que verifique si un numero es par o impar.
/*
const verificaPar = (numero = undefined) => {

    if (!numero) return console.warn('Por favor, ingrese un numero')
    if (typeof numero !== "number") return console.error('El dato ingresado, no es un numero!')
    if (numero === 0) return console.warn('No se puede calcular el factorial de 0')
    if (numero === 1) return console.warn('No se puede calcular el factorial de 1')
    if (Math.sign(numero) === -1 ) return console.warn('el numero no puede ser negativo')

    if ((numero % 2) === 0) {
        console.info('El numero es par')
    } else {console.log('El numero no es par')}
} 

verificaPar(12)
*/

// 14) Programa una funcion que transforme grados celcius a farenheim
/*
const tempConversor = (temp) => {
    if (!temp) return console.warn('Por favor, ingrese un numero')
    if (typeof temp !== "number") return console.error('El dato ingresado, no es un numero!')

    F = (temp * 9/5) + 32
    return console.info(`La temperatura ${temp}°C en Fahrenheit es ${F}°F`)
}

tempConversor(0)

*/




// 15) Programa una funcion que convierta numeros de base binaria a decimal y vicebersa
/*
const conversorBinarioDesimal = (numero= undefined, base= undefined) => {
    if (numero === undefined) return console.warn('No ingresaste un dato')
    if (typeof(numero) !== "number") return console.error('No valido')
    if (base === undefined) return console.warn('No ingresaste un dato')
    if (typeof(base) !== "number") return console.error('No valido')

    if (base === 2) {
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`)
    } else if (base === 10) {
        return console.info(`${numero} base ${base} = ${numero.toString(base)} base 2`)
    } else {
        return console.error('El tipo de base NO es valida')
    }
}

conversorBinarioDesimal(4, 3)
*/




// 16) Programa una f que devuelva el monto final despues de aplicar un descuento
// Ej: f(1000, 20) = 800
/*
const aplicaDescuento = (numero, descuento) => {

    let X = undefined

    X = (descuento * numero) / 100

    return console.info(`El descuento de ${descuento}% en ${numero} es de ${numero - X}`)
}

aplicaDescuento(1000, 20)
*/




// 17 NO TERMINADO) Programa una f que dada una fecha, cuente cuantos años han pasado hasta hoy.
/*
const yearCounter = (fecha = undefined) => {
    if (fecha === undefined) return console.warn('Ingrese una fecha')
    if (fecha instanceof Date) console.warn('El valor ingresado no es una fecha valida') 

    // Obtenemos los milisegundos de la fecha especial
    let hoyMenosFecha = new Date().getTime() - fecha.getTime()
    // Convertimos en fecha
    
}
*/




// 18) Programa una f que dada una cadena de texto cuente el numero de vocales y consonantes.
/*
const contarLetras = (cadena = "") => {
    if (!cadena) return console.warn('Ingresa una cadena de texto')
    if (typeof cadena !== "string") return console.error('No ingresaste un texto')
    cadena = cadena.toLowerCase()

    let vocales = 0,
    consonantes = 0

    for (const letra of cadena) {
        if (/[aeiouáéíóú]/.test(letra)) {vocales++}
        if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) {consonantes++}
    }
    return console.info(`La cantidad de vocales es: ${vocales}, y de consonantes es: ${consonantes}`)
}

contarLetras('Hola Mundo')
*/




// 19) Programa una f que valide que un txt sea un nombre valido ej: fun(Eitan) devuelve verdadero
/*
const validaNombre = (nombre = "") => {
    if (!nombre) return console.warn('Ingresa un nombre')
    if (typeof nombre !== "string") return console.error('Dato no valido')
    nombre = nombre.toLowerCase()

    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóüú\s]+$/g.test(nombre)
    // ^ No puede haber nada antes de la exp
    // $ No puede haber nada despues de la exp
    // [] Agrupadores
    // + Para que evalue por cada caracter de la cadena 
    // s Valida espacios   

    return (expReg)
    ? console.info(`El nombre ingresado "${nombre}" es valido`)
    : console.info('El nombre no es valido')
}

validaNombre("Nashe Ashe")
*/




// 20) Crea una f que valide un correo
/*
const validaCorreo = (correo = "") => {
    if (!correo) return console.warn('Ingresa un correo')
    if (typeof correo !== "string") return console.error('Dato no valido')
    correo = correo.toLowerCase()

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo) 

    return (expReg)
    ? console.info(`El correo ingresado "${correo}" es valido`)
    : console.info('El correo no es valido')
}

validaCorreo("")
*/




// 21) crea una f que dada un Arr num, devuelva otro con los num elevados al cuadrado, ej: fun([1, 2, 3]) devuelve otro: [1, 4, 9]
/*
const elevaNum = (arr = undefined) => {
    if (arr === undefined) return console.warn('Ingresa un arreglo de enumeros')
    if (!(arr instanceof Array)) return console.error('El valor ingreado no es un Arreglo')
    if (arr.length === 0) return console.error('El Arreglo esta vacio')

    for (let num of arr) {
        if (typeof num !== 'number') return console.error(`el valor ${num}, NO es un numero`)
    }

    const nweArr = arr.map(element => element * element)
    return console.info(`Arreglo original "${arr}", y elevado al cuadrado "${nweArr}"`)
}

elevaNum([2,4,8])
*/




// 22) Programa una f que dada un array devuelva el numeros mas alto y el mas bajo
/*
const minMax = (arr = undefined) => {
    if (arr === undefined) return console.warn('Ingrese un array de numeros')
    if (!(arr instanceof Array)) return console.error('El valor ingreado no es un Arreglo')
    if (arr.length === 0) return console.error('El Arreglo esta vacio')
    for (let num of arr) {
        if (typeof num !== 'number') return console.error(`el valor ${num}, NO es un numero`)
    }

    let min = 0,
    max = 0

    for (let i=0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i]
        if (max < arr[i]) max = arr[i]
    }

    return console.info(`El menor num del Arr es ${min}, y el mayor es ${max}`)
}

minMax([0, 1, 2, 3, 4])
*/




// 23) programa una f que dada un array, devuelva dos, uno con los num pares y otro con los inpares.
/*
const separaNum = (arr = undefined) => {
    if (arr === undefined) return console.warn('Ingrese un array de numeros')
    if (!(arr instanceof Array)) return console.error('El valor ingreado no es un Arreglo')
    if (arr.length === 0) return console.error('El Arreglo esta vacio')
    for (let num of arr) {
        if (typeof num !== 'number') return console.error(`el valor ${num}, NO es un numero`)
    }

    const Pares = []
    let x = 0
    const Inpares = []
    let k = 0

    for (let i=0; i < arr.length; i++) {
        if ((arr[i] % 2) === 0) {
            Pares[x] = arr[i]
            x++
        } else if ((arr[i] !== 0)) {
            Inpares[k] = arr[i]
            k++
        }
    }
    return console.info(`Pares: ${Pares}, inpares: ${Inpares}`)
}

separaNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
*/

// 24) Crea una f que dado un Array de num devuelve un obj con dos Array, elprimero tendra los numeros ordenados de forma ascendente y el otro al reves
/*
const ordenaArray = (arr = undefined) => {
    if (arr === undefined) return console.warn('Ingrese un array de numeros')
    if (!(arr instanceof Array)) return console.error('El valor ingreado no es un Arreglo')
    if (arr.length === 0) return console.error('El Arreglo esta vacio')
    for (let num of arr) {
        if (typeof num !== 'number') return console.error(`el valor ${num}, NO es un numero`)
    }

    return console.info({
        arr,
        asc: arr.map(el => el).sort(),
        desc: arr.map(el => el).sort().reverse()
    } )
}

ordenaArray()
*/





// 25) Crea una f que dado un array, elimina los elementos duplicados
/*
const quitaDobles = (arr = undefined) => {
    if (arr === undefined) return console.warn('Ingrese un array de numeros')
    if (!(arr instanceof Array)) return console.error('El valor ingreado no es un Arreglo')
    if (arr.length === 0) return console.error('El Arreglo esta vacio')
    for (let num of arr) {
        if (typeof num !== 'number') return console.error(`el valor ${num}, NO es un numero`)
    }
    if (arr.length < 1) return console.warn('El arr debe ser de al menos 2 elementos')

    return console.info({
        original: arr,
        sinDuplas: [... new Set(arr)]
    })
}
    // Set forma un obj sin duplicados
quitaDobles([1,2,2,3,1])
*/



// 26) Crea una f que dado un Array, obtenga el promedio de los numeros
/*
const sacaPromedio = (arr = undefined) => {
    if (arr === undefined) return console.warn('Ingrese un array de numeros')
    if (!(arr instanceof Array)) return console.error('El valor ingreado no es un Arreglo')
    if (arr.length === 0) return console.error('El Arreglo esta vacio')
    for (let num of arr) {
        if (typeof num !== 'number') return console.error(`el valor ${num}, NO es un numero`)
    }
  
    let promedio = 0

    for (let i=0; i<arr.length; i++) {
        promedio += arr[i]
    }

    promedio /= arr.length

    return console.info(`El promedio es: ${promedio}`)
}

sacaPromedio([9,8,7,6,5,4,3,2,1,0])
*/
