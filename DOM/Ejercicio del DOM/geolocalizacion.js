const D = document, n = navigator

export default function getGeoLocation(id) {
    const $id = D.getElementById(id)
    const options = {
        enableHighAcuracy:  true,   // Permite que la localizacion sea lo mas precisa posible
        setTimeout: 5000,
        maximunAge: 0
    }

    const success = (position) => {
        let coords = position.coords

        $id.innerHTML = `
        <p>Tu posicion actual es: </p>
        <Ul>
        <Li>Latitud:<b>${coords.latitude}</b></li>
        <Li>Longitud<b>${coords.longitude}</b></li>
        <Li>Precision: <b>${coords.accuracy}</b> metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},18z" target="_blank" rel="noopener">Ver en Google Maps</a>
        `
    }

    const error = (err) => {
        $id.innerHTML = `<p><mark>Error: ${err.code}: ${err.message}</mark></p>`
        console.log(`Error: ${err.code}: ${err.message}`)
    }

    n.geolocation.getCurrentPosition(success, error, options)
}