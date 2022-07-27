const D = document

export function digitalClock (clock, btnPlay, btnStop) {
    let clockTempor;
    D.addEventListener('click', e=> {
        if (e.target.matches(btnPlay) ) {
            clockTempor = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString()
                D.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
            }, 1000);

            e.target.disabled = true
        }
        if (e.target.matches(btnStop) ) {
            clearInterval(clockTempor)
            D.querySelector(clock).innerHTML = null
            D.querySelector(btnPlay).disabled = false
        }
    })
}

export function alarm (sound, btnPlay, btnStop) {
    let alarmaTempor;
    const $alarm = D.createElement("audio")
    $alarm.src = sound

    D.addEventListener('click', e => {
        if (e.target.matches(btnPlay)) {
            alarmaTempor = setTimeout(() => {
                $alarm.play()
            }, setTimeout);
            e.target.disabled = true
        }
        if (e.target.matches(btnStop)) {
            clearTimeout(alarmaTempor)
            $alarm.pause()
            $alarm.currentTime = 0

            D.querySelector(btnPlay).disabled = false
        }
    })
}


