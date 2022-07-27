const D = document, w = window, n = navigator

export default function networkStatus() {

    const isOnLine = () =>{
        const $div = D.createElement("div")
        if (n.onLine) {
            $div.textContent = 'Conexion Re Establecida'
            $div.classList.add('online')
            $div.classList.remove('offline')
            //console.log('Online')
        } else {
            $div.textContent = 'Conexion Perdida'
            $div.classList.add('offline')
            $div.classList.remove('online')
            //console.log('Offline')
        }
        D.body.insertAdjacentElement('afterbegin', $div)
        setTimeout(() => {D.body.removeChild($div)}, 2000);
    }
    w.addEventListener('online', (e)=> isOnLine())
    w.addEventListener('offline', (e)=> isOnLine())
    
}