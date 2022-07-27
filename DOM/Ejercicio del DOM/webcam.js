const D = document, n = navigator

export default function webCam(id) {
    const $video = D.getElementById(id)

    //getUserMedia es una API promesa, a si que cuenta con un then y un catch
    //Previamente a utilizarla, comprovamos que el navegador cuente con dicha api
    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices
        .getUserMedia({video:true, audio:false})
        .then((stream) => {
                $video.srcObject = stream
                $video.play()
            })
        .catch((err) => {
            $video.insertAdjacentHTML('beforebegin', `<p>Sucedio el siguiente error: <mark>${err}</mark</p>`)
           // console.log(`Sucedio el siguiente error: ${err}`)
        })
    }
}