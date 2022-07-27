const D = document

export default function draw(btn, selector) {
    const getWiner = (selector) => {
        const $players = D.querySelectorAll(selector)
        const random = Math.floor(Math.random() * $players.length)
        const winner = $players[random]
        return `El ganador es: ${winner.textContent}`
    }

    D.addEventListener('click', e => {
        if (e.target.matches(btn)) {
            let result = getWiner(selector)
            alert(result)
            
        }
    })
}
