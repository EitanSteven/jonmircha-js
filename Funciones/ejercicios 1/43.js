
class Pelicula {
    constructor({id, titulo, director, estreno, pais, generos, calificacion}) {
    this.id = id,
    this.titulo = titulo,
    this.director = director,
    this.estreno = estreno,
    this.pais = pais,
    this.generos = generos,
    this.calificacion = calificacion,
    
    this.validarIMDB(id)
    this.validarTitulo(titulo)
    this.validarDirector(director)
    this.validaEstreno(estreno)
    this.validarPais(pais)
    this.validarGeneros(generos)
    this.validarCalificacion(calificacion)
    }

    

    // VALIDADORES AUXILIARES

    validarCadena(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`)
        if (typeof valor !== "string") return console.warn(`${propiedad} "${valor}" Ingresado NO es una cadena de texto`)
        return true
    }
    validarNumero(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`)
        if (typeof valor !== "number") return console.warn(`${propiedad} "${valor}" Ingresado No es un numero`)
        return true
    }
    validarLongCadena(propiedad, valor, longitud) {
        if (valor.length > longitud) return console.warn(`${propiedad} "${valor}" excede el limite de caracteres: ${longitud}`)
        return true 
    }
    validarArray(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`)
        if (!(valor instanceof Array)) return console.warn(`${propiedad} "${valor}" ingresado NO es un Arreglo`)
        if (valor.length === 0) return console.warn(`${propiedad} "${valor}" no tiene datos`)
        for (let cadena of valor) {
            if (typeof cadena !== "string") return console.warn(`El valor ingresado "${cadena}" NO es un una Cadena de Texto`)
        }
        return true
    }
    static get listaGeneros () {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    }
    static generosAceptados() {
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`)
    }

    // VALIDADORES

    validarIMDB(id) {
        if (this.validarCadena("IMDB Id", id)) {
            if (!(/^([a-z]){2}([0-9]){10}$/.test(id))) return console.warn('IMDB No valido')
        }
    }
    validarTitulo(titulo) {
        if (this.validarCadena("Titulo", titulo)) 
        this.validarLongCadena("Titulo", titulo, 100)
    }
    validarDirector(director) {
        if (this.validarCadena("Director", director)) 
        this.validarLongCadena("Director", director, 50)
    }
    validaEstreno(estreno) {
        if (this.validarNumero("Año de Estreno", estreno)) {
            if (!(/^([0-9]){4}$/.test(estreno))) return console.warn(`Año de Estreno "${estreno}", no es una fecha valida`) 
        }
    }
    validarPais(pais) {
        this.validarArray('Pais', pais)
    }
    validarGeneros(generos) {
        if (this.validarArray('Genero/s', generos)) {
            for (let genero of generos) {
                if (!Pelicula.listaGeneros.includes(genero)) {
                    console.warn(`Genero/s incorrectos. "${generos.join(", ")}"`)
                    Pelicula.generosAceptados()
                }
            }
        }
    }
    validarCalificacion(calificacion) {
        if (this.validarNumero("Calificacion", calificacion)) {
            return (calificacion < 0 || calificacion > 10)
            ? console.warn('La calificacion debe estar comprendida entre 0-10')
            : this.calificacion = calificacion.toFixed(1)
        }
    }
    fichaTecnica() {
        console.info(`
        Ficha tecnica:\n \n
        Titulo: ${this.titulo}\n
        Director: ${this.director} \n
        Estreno: ${this.estreno} \n
        Pais: ${this.pais} \n
        Generos: ${this.generos} \n
        Calificacion: ${this.calificacion} \n
        Id: ${this.id}
        `)
    }
}   

//  Pelicula.generosAceptados()
/*
const Peli = new Pelicula({
    id: "tt9419884",
    titulo: "Dr. Strange in the Multiverse of Madness",
    director: "Sam Raimi",
    estreno: 2022,
    pais: ["EEUU"],
    generos: ["Action", " Adventure", " Fantasy"],
    calificacion: 7.4
})
*/

const tresPelis = [
    {
        id: "tt9419884",
        titulo: "Dr. Strange in the Multiverse of Madness",
        director: "Sam Raimi",
        estreno: 2022,
        pais: ["EEUU"],
        generos: ["Action", "Adventure", "Fantasy"],
        calificacion: 7.4  
    },
    {        
        id: "vi2659435033",
        titulo: "Avatar: The Way of Water",
        director: "James Cameron",
        estreno: 2022,
        pais: ["EEUU"],
        generos: ["Action", "Adventure", "Sci-Fi"],
        calificacion: 10  
    },
    {
        id: "tt11138512",
        titulo: "The Northman",
        director: "Robert Eggers",
        estreno: 2022,
        pais: ["EEUU"],
        generos: ["Action", "Adventure", "Drama"],
        calificacion: 7.4  
    }
]

tresPelis.forEach(el => new Pelicula(el).fichaTecnica())
