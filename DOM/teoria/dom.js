/* 

    // Podemos acceder a cualquier parte del DOM, por ejemplo al Body, que nos muestra todo lo qu ehicimos:

    console.log(document.body)

    // Y para acceder al documento html:

    console.log(document.documentElement)

    // Luego, a las partes de ese documento:

    console.log(document.title)

*/


//   Nodos, Elementos y Selectores:
// Podemos seleccionar elementos html con los sigueintes 3 metodos:


/*
console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementById("menu"))

// Pero estos fueron remplazados por el query selector, el cual acepta un selector valido de css y el nombre:

console.log(document.querySelector('#menu'))
console.log(document.querySelector('.card'))

// Al tener que validar el tipo de dato, es mas lento que getElementById, por lo cual este se sigue usando.
// Query selector, solo devuelve el primer selector de ese tipo que haya encontrado.

console.log(document.querySelectorAll('.card'))

// Y este, trae todos, solucionando el problema.

// Tambien podemos seleccionar un child en especifico:

console.log(document.querySelectorAll('.card')[2])

// O varios:

console.log(document.querySelectorAll('#menu li'))
*/



//Atributos y Data-Attributes #63



/*
// Vamos a intentar acceder al atributo lang que tiene el HTML, una forma, es utilizar la notacion del . + Nombre del atributo:

console.log(document.documentElement.lang)

// Otra forma de hacerlo es con el atributo que recibe el nombre del mismo:

console.log(document.documentElement.getAttribute("lang"))

// Este ultimo suele ser mejor ya que es mas especifico y no trae elementos internos de un atributo, por ejemplo, toda la url del atributo href

// Para establecer un nuevo vaslor a los atributos:

document.documentElement.setAttribute("lang", "es-ARG")

// Si ahora exploramos los elementos de la pagina en el server, vemos como el atributo lang ah cambiado.

const $linkDOM = document.querySelector(".link-dom")

// Muchos desarrolladores suelen guardar sus variables que hacen referencia a un elemento del DOM, con un $ en su nombre. Esto para poder diferenciarlo en el inspeccionador de elementos de la web.

$linkDOM.setAttribute("target", "_blank")
$linkDOM.setAttribute("rel", "noopener")
$linkDOM.setAttribute("href", "https://google.com")

// Tambien podemos comprobar si un elemento tine o no un atributo:

console.log($linkDOM.hasAttribute("rel"))

// Para eliminarlo:

$linkDOM.removeAttribute("rel")
console.log($linkDOM.hasAttribute("rel"))


// Data-Atributes

// Vamos a acceder al atributo de descripcion que creamos en el link:

console.log($linkDOM.getAttribute("data-Descripcion"))

// Ahora vamos a ver todos los data atributes del elemento con:

console.log($linkDOM.dataset)

// Y para acceder a cada uno:

console.log($linkDOM.dataset.atr)

// Asi mismo, tambien podemos setear, remover, etc:

$linkDOM.setAttribute("data-atr", "Modelo del Obj Documento")
console.log($linkDOM.dataset.atr)

// Y con la notacion del punto:

$linkDOM.dataset.Descripcion = "Refresca la Pagina"
console.log($linkDOM.dataset.Descripcion)

*/



// DOM: Estilos y Variables CSS
/*
const $linkDOM = document.querySelector(".link-dom")

console.log($linkDOM.style)

// Como podemos ver, la sentencia anterior nos devuelve un mapa que nos muestra todas las propiedades css valdias para ese elemento. Lo importante, es notar que estan escritas con lowerCamelcase, por ejemplo: backgroundColor

console.log($linkDOM.style.backgroundColor) 

// Ahora vamos a agregar algunos estilos css:

$linkDOM.style.setProperty("text-decoration", "none")
$linkDOM.style.setProperty("padding", "5px")

// Y con la notacion del punto:

$linkDOM.style.marginLeft = "5px"
$linkDOM.style.borderRadius = "20%"
*/



// Clases CSS $65

// Ahora, como hacemos para acceder a una Clase?

// Para este ejercisio, vamos a aplicar algo de estilo a als tarjetas
/*
const $card = document.querySelector(".card")

//console.log($card)

// Para evaluar si un El tiene una clase:

//console.log($card.classList.contains("rotate45"))   // False
$card.classList.add("rotate45")
//console.log($card.classList.contains("rotate45"))   // True

$card.classList.remove("rotate45")

// Toggle: Si tiene una clase, la elimina, si no la tiene, la agrega.

$card.classList.toggle("rotate45")
$card.classList.toggle("rotate45")

// Si tengo un caso en el que una clase en particular la tengo que remplazar por otra:

$card.classList.toggle("rotate45")
$card.classList.replace("rotate45", "rotate135")

// Para agregar varias clases:

$card.classList.add("opacity80", "sepia")
$card.classList.remove("opacity80", "sepia", "rotate135")
$card.classList.toggle("opacity80", "sepia")



// Texto y HTML


const $queEs = document.getElementById("que-es")

let text = `
<p> El Modelo de Objetos del Documento (<b><i>-DOM - Document Object Model </i></b>) es una API para documentos HTML y XML </p>
<p> Este provee una representacion estructural del documento permitiendo modificar su contenido y presentacion visual mediante codigo JS. </p>
<p> <mark> El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores </mark></p>
`

// Para intercambiar los textos, tenemos dos metodos, uno para internet explorer, el cual no es un estandar:

//$queEs.innerText = text

// La manera estandar de modificar solo el texto es con:

$queEs.textContent = text

// Este, modifica el texto dentro de las etiquetas del elemento, para que la pagina no muestre las etiquetas del nuevo texto, y las aplique, tenemos que usar:

$queEs.innerHTML = text

// La mejor manera de cambiar el contenido del elemento html, es con outerHTML, que remplaza directamente las etiquetas 

$queEs.outerHTML = text



//  Traversing: Recorriendo el DOM 
/*

const $cards = document.querySelector(".cards")

// Accederemos a toda la seccion de tarjetas:

console.log($cards)

// Ahora solo a un hijo

console.log($cards.children[3])

// Ahora vamos a acceder al padre

console.log($cards.parentElement)   // Devuelve Body

// Ahora para detectar el primer hijo:

console.log($cards.firstElementChild) // != firstchild

// El comando anterior devuelve que el primer hijo es una etiqueta html, el firstchild devuelve el primer nodo hijo, que en el documento, por la identacion, es un espacio(txt)

console.log($cards.lastElementChild)

// Asi mismo, se puede acceder a los hermanos, el anterior y el posterior. Como en la regla de los childs, los metodos sin el "Element", hacen referencia a los nodos

console.log($cards.previousElementSibling)
console.log($cards.previousSibling)

console.log($cards.nextElementSibling)

// Ahora, el metodo closest, busca el ancestro, el padre mas sercano, del tipo de selector que se le de:

console.log($cards.closest("div"))  // Null bcs no hay ningun div antes
console.log($cards.closest("body")) // body

// Ahora probemos con una card hija

console.log($cards.children[3].closest("section"))
*/





// Creando Elementos y Fragmentos

// Ya hemos aprendido a manipular las etiquetas html, ahora vamos a crearlas de forma dinamica:. Creemos una 6ta Tarjeta
/*
const $figure = document.createElement("figure"),
      $img = document.createElement("img"),
      $figcaption = document.createElement("figcaption"),
      $figTxt = document.createTextNode("Animals"),
      $cards = document.querySelector(".cards")

// Ahora que creamos todas las etiquetas necesarias para crear una nueva tarjeta, devemos integrarlas al arbol del DOM, y luego, añadirle sus atributos.

$cards.appendChild($figure)

// Bien, ya agregamos la etiqueta figure al arbol del DOM, ahora hagamos lo mismo con el resto:

$figure.appendChild($img)
$figure.appendChild($figcaption)

// Ahora, agreguemos el txt del figcaption

$figcaption.appendChild($figTxt)

// Ahora vamos con los atributos:

$img.setAttribute("src", "https://placeimg.com/200/200/animals")
$img.setAttribute("alt", "Animals")

// Ya tenemos la tarjeta agregada, ahora tenemos que darle los mismos estilos, para eso, a la figura hay que agregarle la clase card

$figure.classList.add("card")

// AHora, ¿Que pasa cuando tenemos que crear varios nodos? Para eso, utilizamos fragmentos del dom:

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]

$ul = document.createElement("ul")  // Creamos una Lista
$fragment = document.createDocumentFragment()   // Creamos un DOM Fragment

// Ahora, por cada el del mes, creamos un elemento de lista, con su mes en cuestion, y este elemento de lista, lo asignamos al fragmento.

meses.forEach(el => {
    const $li = document.createElement("li")
    $li.textContent = el    // Se agrega el elemento (EL mes)

    $fragment.appendChild($li)
})

// Creamos el titulo de la nueva seccion, y luego a la lista, le asignamos como hijo el fragmento.

document.write("<h3>Meses del Año</h3>")
$ul.appendChild($fragment)
document.body.appendChild($ul)

*/


// TEMPLATES HTML

// Para usar los Templates, debemos crear en el html, la estructura con etiquetas vacias, en este caso, el de una nueva card, es decir: figure, img, figcaption, etc

// Ya con la plantilla creada, creamos las variables y la asignamos al queryselector, como ya estan creadas no lo hago, pero si con el template
/*
const $template = document.getElementById("template-card").content,
    $fragment2 = document.createDocumentFragment()
const cardContent = [
    {
        title: "TECNOLOGIA",
        img: "https://placeimg.com/200/200/tech"
    },
    {
        title: "ANIMALES",
        img: "https://placeimg.com/200/200/animals"
    },
    {
        title: "ARQUITECTURA",
        img: "https://placeimg.com/200/200/arch"
    },
    {
        title: "GENTE",
        img: "https://placeimg.com/200/200/pepole"
    },
    {
        title: "NATURALEZA",
        img: "https://placeimg.com/200/200/nature"
    },
]
*/
// /1/ Ahora, por cada elemento del cardContent, buscamos dentro del template del DOM una img, y a esta, le agregamos el atributo src y alt. Como adicional, al contenido del figcaption le agregamos su titulo

// /2/ Como solo tenemos 1 template, si queremos re utilziarlo para otra tarjeta, tenemos que clonar dicho nodo, el bolean indica si quiere copiar la etiqueta interna
/*
cardContent.forEach(el => {
    //1
    $template.querySelector("img").setAttribute("src", el.img)
    $template.querySelector("img").setAttribute("alt", el.title)
    $template.querySelector("figcaption").textContent = el.title

    //2
    let $clone = document.importNode($template, true)
    $fragment2.appendChild($clone)
})

$cards.appendChild($fragment2)

// Listo, trabajar con Templates es como trabajar con una clase o modelo.
*/


//  Modificando Elementos (Cool Style)

// Existen tres metodos:
// .insertADjacentElement(posicion, el)
// .insertADjacentHTML(posicion, HTML)
// .insertADjacentText(posicion, txt)

// Y cuatro posiciones:

// beforebegin(hermano anterior)
// afterbegin(primer hijo)
// beforeend(ultimo hijo)
// afterend(hermano siguiente)
/*
const $newCard = document.createElement("figure")
const $cards = document.querySelector(".cards")

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="any">
<figcaption>SEXOOOOOO</figcaption>
`
$newCard.classList.add("card")

$cards.insertAdjacentElement("afterend", $newCard)
*/
/*
const $cards = document.querySelector(".cards")
const $newCard = document.createElement("figure")

let $contentCard = `
<img src="https://placeimg.com/200/200/any" alt="any">
<figcaption></figcaption>
`
$newCard.classList.add("card")

$newCard.insertAdjacentHTML("beforeend", $contentCard)
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any")
$cards.insertAdjacentElement("afterbegin", $newCard)
*/




// Manejadores de Eventos

function holaMundo() {
    alert("Hola Mundo")
    console.log(event)
}

const $btnSemantico = document.getElementById("manejador-semantico")

$btnSemantico.onclick = holaMundo

// No agregamos los parentesis al holaMundo para que no se ejecute la funcion al recargar la pagina y espere al evento

$btnSemantico.onclick = function() {
    alert("Hola Mundo con f ANonima")
    console.info("Por cada evento solo podemos tener una funcion, si hay varias, se tomara en cuenta la ultima")
}

// Que pasa si nececitamos diferentes f a un mismo elemento? Para estan los manejadores multiples

const $btnMMultiple = document.getElementById("manejador-multiple")

$btnMMultiple.addEventListener('click', holaMundo)
$btnMMultiple.addEventListener('click', (e) => {    // e = event
    alert("Hola Mundo con Manejador Multiple")
    console.log(e)  
    console.log(e.type)
    console.log(e.target)
})




// Eventos con Parametros y Remover Eventos


const $btnSaludo = document.getElementById("btn-saludo")

function saludar(nombre = 'Desconocido/a') {
    alert(`Hola ${nombre}`)
}

// $btnSaludo.addEventListener('click', () => saludar())

// Como los manejadores solo pueden recibir como parametro el objeto evento(e), creamos una arrow function, con la funcion + () 

// Tambien podemos abrir la funcion flecha y pasarle parametros:

$btnSaludo.addEventListener('click', () => {
    saludar('Jon')
})

// Ahora vamos a crear un evento y despues lo vamos a remover:


const $removerEvent = document.getElementById("event-remover")

const deleteDblClick = (e) => {
    alert("Removiendo el evento")
    console.log(e)
    $removerEvent.removeEventListener('dblclick', deleteDblClick)
}

$removerEvent.addEventListener('dblclick', deleteDblClick)

// Como el removeeventlistener espera dos parametros, la funcion debe estar declarada o expresada para pdoer llamar a su referencia





// FLujo de Eventos (Burbuja y Captura)



// Como es que js interpreta y trabaja con los eventos

// El addeventlistener tiene un tercer parametro

// El flujo de eventos es como este se va propagando. Una vez el evento se origina tiene una propagacion a lo largo del arbol del Dom, la cual va desde el elemento mas interno, hasta el mas externo (El document), a esto se lo denomina fase de burbuja

// Vamos a traernos todos los divs del evento flujo

//const $divsEventos = document.querySelectorAll(".eventos-flujo div")

//console.log($divsEventos)

// Bien, con eso confirmamos que los seleccionamos correctamente.
/*
function flujoEventos(e) {
    console.log(`Hola, te saluda ${this.className}, el click lo origino ${e.target.className}`)
}
*/
/*
$divsEventos.forEach(div => {
    div.addEventListener('click', flujoEventos)
})
*/

// Con esto, si clickeamos uno de los divs, la funcion se ejecuta para los tres elementos.
// Como podemos ver en la consola, los eventos se van ejecutando de adentro hacia fuera, si clickeamos el div dos, se ejecuta ese y el uno. Si ejecutamos el div tres, se ejecutan 3, 2, 1, y si ejecutamos 1, solo 1.

// Ahora, el tercer parametro del event listener es un bulean.
// false: Fase de burbuja activa
// true: Fase de captura, tiene el funcionamiento contrario

/*
$divsEventos.forEach(div => {
    div.addEventListener('click', flujoEventos, true)
})
*/

// Ademas, en este tercer parametro podemos pasar un objeto, con mas opciones para el event listener, por ejemplo, que solo se ejecute una sola vez:
/*
$divsEventos.forEach(div => {
    div.addEventListener('click', flujoEventos, {
        capture: false,
        once: true
    })
})

*/




// stopPropagation & preventDefault



// Vamos a detener la propagacion de las fases de burbuja y captura, para eso, re creamos todo lo anterior:
/*
const $divsEventos = document.querySelectorAll(".eventos-flujo div")

// Crearemos una variable que haga referencia al enlace para alterar su funcionamiento por defecto:

const $linkEvento = document.querySelector(".eventos-flujo a")

function flujoEventos(e) {
    console.log(`Hola, te saluda ${this.className}, el click lo origino ${e.target.className}`)
    e.stopPropagation() // Detiene la propagacion en cualquier fase
}

$divsEventos.forEach(div => {
    div.addEventListener('click', flujoEventos, {
        capture: false,
    })
})

// Vamos a alterar el comprotamiento del enlace:

$linkEvento.addEventListener('click', (e) => {
    alert('Hola, el enlace te re dirigira a mi instagram')
    //e.preventDefault()  // Detiene el funcionamiento por defecto del enlace (Abrirse)
    e.stopPropagation() // Para que solo se ejecute el enlace
})

*/


// Delegacion de eventos




// La delegacion de eventos mejora mucho el rendimiento, esta consiste en lo siguiente:
// Imaginemos que tenemos mil divs, no podemos asignar el event Listener a cada uno, incluso con un for Each es inefisciente. Esto, podriamos hacerlo mejor asignando el evento a un elemento padre superior, y a partir de ahi detectar el nodo que interesa que active el evento y desencadenar la programacion de el.
// Otra caracteristica de la delegacion, es que nos salvamos de la propagacion

/*
document.addEventListener('click', (e) => {
    console.log(`Click en`, e.target)
})
*/

// Con este codigo, hicimos que todo el documento sea clickeable y descriptivo. Y de el, vamos a desencadenar el resto de eventos:

function flujoEventos(e) {
    console.log(`Hola, te saluda ${this}, el click lo origino ${e.target.className}`)
}

document.addEventListener('click', (e) => {
    console.log(`Click en`, e.target)

    if (e.target.matches(".eventos-flujo a")) {
        alert('Evento desencadenado desde el documento')
        e.preventDefault()
    }

    if (e.target.matches(".eventos-flujo div")) {
        flujoEventos(e)
    }
})

// Aqui perdemos el this.className, por que ahora el contexto hace referencia al contexto global doc/win





//  BOM: Propiedades y eventos

// Evento resize:
/*
window.addEventListener('resize', () => {
    console.clear()

    console.log('Tamaño VP')
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    // Hace ref al tamaño del ancho/altura del viewport
    
    console.log('Tamaño Ventana')
    console.log(window.outerWidth)
    console.log(window.outerHeight)
    // Hace ref al tamaño de ancho/altura del tamaño de la ventana
})

// Evento scroll:

window.addEventListener('scroll', () => {
    console.clear()
    console.log('Scrolleando X')
    console.log(window.scrollX)
    console.log('Scrolleando Y')
    console.log(window.scrollY)
})

// Evento Load


window.addEventListener('load', () => {
    console.log('Load')
})

// Evento DOM Content Load

document.addEventListener('DOMContentLoad', () => {
    console.log('DOM Content Load')
})

*/




// BOM: METODOS




//windows.alert("Alerta")

//windows.confirm("Confirmacion") --> Devuelve un Bulean si confirmas o no

//windows.prompt("Aviso") --> Guarda el input que ignreses

const $btnAbrir = document.getElementById("Abr-Ventana")
const $btnCerrar = document.getElementById("Cerr-Ventana")
const $btnPrint = document.getElementById("Impr-Ventana")

let Ventana

$btnAbrir.addEventListener('click', e=> {
    Ventana = window.open("https://jonmircha.com")
})
$btnCerrar.addEventListener('click', e=> {
    Ventana.close()
})
$btnPrint.addEventListener('click', e=> {
    window.print()
})





// BOM: Objetos URL, Historial y Navegacion


/*


console.log("~~~~~~~ Objeto URL ~~~~~~~")

console.log(location)
console.log(location.origin)
console.log(location.protocol)
console.log(location.host)
console.log(location.hostname)
console.log(location.port)
console.log(location.href)
console.log(location.hash)
console.log(location.pathname)
//location.reload()

console.log("~~~~~~~ Objeto History ~~~~~~~")

console.log(history)
console.log(history.length)
//history.back(2) --> Ir n paginas hacia atras
//history.forward(2) --> Ir n paginas hacia adelante
//history.go() --> Lo mismo pero recibe num positivos o negativos para navegar

console.log("~~~~~~~ Objeto Navegator ~~~~~~~")

//console.log(navigator)
console.log(navigator.connection)
console.log(navigator.geolocation)
console.log(navigator.mediaDevices)     // Microfonos, camara etc
console.log(navigator.mimeTypes)    // Tipos de formato que acepta (Pdf, word, etc)
console.log(navigator.onLine)       
console.log(navigator.serviceWorker)    //Convertir una pagina en app instalable        
console.log(navigator.storage)      // API de almacenamiento
console.log(navigator.usb)      // Detecta usb
console.log(navigator.userAgent)    // Da info sobre el nav del usuario


*/


// DOM: Ejercicios Practicos