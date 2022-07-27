const D = document, N = navigator, UA = N.userAgent
export default function usserDevice(id) {
    const $id = D.getElementById(id)
    const isMobile = {
        // Recordemos que el UA devuelve una funcion en forma de string con toda esta informacion, lo que hacemos es que, con ayuda de las exp reg, buscamos las palabras claves dentro de esa informacion, y si la encuentra, la asignamos a un tipo de variable. 
        // Recordar, i = No discrimina entre mayus y minus
        android: () => UA.match(/android/i),
        ios: () => UA.match(/iphone|ipad|ipod/i),
        windows: () => UA.match(/windows phone/i),
        // Si no detecta ninguno, devuelve cualquiera de estos
        any: function() {
            return this.android() || this.ios() || this.windows()
        }
    },
    isDesktop = {
        linux: () => UA.match(/linux/i),
        mac: () => UA.match(/mac os/i),
        windows: () => UA.match(/Windows NT/i),
        any: function () {
            return this.linux() || this.mac() || this.windows()
        }
    },
    isBrowser = {
        chrome: () => UA.match(/chrome/i),
        safari: () => UA.match(/safari/i),
        firefox: () => UA.match(/firefox/i),
        opera: () => UA.match(/opera | opera mini/i),
        ie: () => UA.match(/msie | iemobile/i),
        edge: () => UA.match(/edge/i),
        any: function () {
            return (
                this.ie() ||
                this.edge() ||
                this.chrome() ||
                this.opera() ||
                this.firefox() ||
                this.safari()
            )
        }
    }

    // Para acceder y verificar el dispositivo, podemos hacer esto:

   // console.log(isMobile.android())

    // Luego, en otra parte del codigo si queremos que una funcionalidad se ejecute solo en dispositivos android, podriamos hacer algo como:
    // if ((isMobile.android()) == true) {console.log("Texto solo para Android's")}

    $id.innerHTML = `
    <ul>
    <li>User Agent: <b>${UA}</b></li><br>
    <li>Plataforma: <b>${isMobile.any()? isMobile.any(): isDesktop.any()}</b></li><br>
    <li>Navegador: ${isBrowser.any()}</li>
    </ul>`

    // Contenido Exclusivo

    if (isBrowser.chrome()) {
        $id.innerHTML += `<ul><li><b>Solo visible en navegadores base Chromium</b></li></ul>`
    }

    // Redirecciones

    if (isMobile.ios()) {
        window.location.href = "https://google.com"
    }


}


