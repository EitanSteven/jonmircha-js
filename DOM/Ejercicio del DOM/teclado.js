const D = document
let x = 0
let y = 0
export function shortcuts(e) {

    if (e.key === "a" && e.altKey) {
        alert('Haz lanzado una alerta con el teclado    ')
    }
    if (e.key === "p" && e.altKey) {
        prompt('Haz lanzado un prompt con el teclado    ')
    }
    if (e.key === "c" && e.altKey) {
        confirm('Haz lanzado una confirmacion con el teclado    ')
    }

}


export function ballControler(e, ball, stage) {
    const $ball = D.querySelector(ball)
    const $stage = D.querySelector(stage)
    const limitBall = $ball.getBoundingClientRect()
    const limitStage = $stage.getBoundingClientRect()

    switch (e.keyCode) {
        case 37:
            // Izq
            e.preventDefault()
            if (limitBall.left > limitStage.left) x--;
            break;
        case 38:
            // Arr
            e.preventDefault()
            if (limitBall.top > limitStage.top) y--;
            break;
        case 39:
            // Der
            e.preventDefault()
            if (limitBall.right < limitStage.right) x++;
            break;
        case 40:
            // Aba
            e.preventDefault()
            if (limitBall.bottom < limitStage.bottom) y++;
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`
}
