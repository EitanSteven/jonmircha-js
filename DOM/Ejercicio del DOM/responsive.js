const D = document, W = window

export default function responsiveMedia(id, mq, mobileCOntent, desktopContent) {
    let breakPoint = W.matchMedia(mq)
    const responsive = (e) => {
        if (e.matches) {
            D.getElementById(id).innerHTML = desktopContent
        } else {
            D.getElementById(id).innerHTML = mobileCOntent
        }
    }

    breakPoint.addEventListener('change', responsive)
    responsive(breakPoint)
}