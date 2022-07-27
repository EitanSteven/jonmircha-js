import hamburgerMenu from "./menu_hamburgresa.js";
import { digitalClock, alarm } from "./reloj.js/reloj.js";
import { shortcuts } from "./teclado.js";
import { ballControler } from "./teclado.js";
import countdown from "./cuentaregresiva.js";
import scrollTopBtn from "./btn_scroll.js";
import darkTheme from "./temaoscuro.js";
import responsiveMedia from "./responsive.js";
import responsiveTester from "./responsiveTester.js";
import usserDevice from "./deteccionDispositivos.js";
import networkStatus from "./deteccionRed.js";
import webCam from "./webcam.js";
import getGeoLocation from "./geolocalizacion.js";
import searchFilter from "./filtrobusquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import spyScroll from "./scrollEspia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formulario.js";
import speachReader from "./narrados.js";

const D = document

D.addEventListener('DOMContentLoaded', e => {
    hamburgerMenu(".panel-btn", ".panel", "a")
    digitalClock("#reloj", "#activar-reloj", "#detener-reloj")
    alarm('./assets/Alarma.wav','#iniciar-alarma', '#detener-alarma')
    countdown("countdown", "Aug 30, 2022-00:00:00", "Feliz Cumple")
    scrollTopBtn('.scroll-top-btn')
    responsiveMedia('youtube', '(min-width: 870px)', `<a href="https://youtu.be/5qap5aO4i9A" target="_blank">Ver Video</a>`, '<iframe src="https://www.youtube.com/embed/5qap5aO4i9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    responsiveMedia('gmaps', '(min-width: 870px)', '<a href="https://goo.gl/maps/nPc4t2WM76miSVdf9" target="_blank">Ver Mapa</a>', `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8875.32638948329!2d-60.340350325109085!3d-36.89255939077989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959445a2a33747f9%3A0x8d2278b02f865a14!2sPiedras%202049%2C%20Olavarr%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1654651457668!5m2!1ses!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
    responsiveTester('.responsive-tester')
    usserDevice('user-device')
    webCam('webcam')
    getGeoLocation('geolocation')
    searchFilter('.card-filter', '.card')
    draw('.winner-btn', '.player')
    slider()
    spyScroll()
    smartVideo()
    contactFormValidations()
}
)

D.addEventListener('keydown', e=> {
    shortcuts(e)
    ballControler(e, ".ball", ".stage")
})

darkTheme('.dark-theme-btn', 'dark-mode')
networkStatus() // Se ejecuta cuando se cae la conexion

speachReader()