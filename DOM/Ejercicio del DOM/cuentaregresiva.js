
export default function countdown(id, limitDate, finalMsg) {
    const $countdown = D.getElementById(id),
        countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(() => {
        let dateNow = new Date().getTime(),
            limitTime = countdownDate - dateNow,
            days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
            hours = Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
            minutes = Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60)),
            seconds = Math.floor(limitTime % (1000 * 60) / (1000));

        $countdown.innerHTML = `<h3>Faltan: ${days} dias, ${hours} horas, ${minutes} minutos y ${seconds} segundos </h3>`
        if (limitTime < 0) {
            clearInterval(countdownTempo)
            $countdown.innerHTML = `<h3>${finalMsg}</h3>`
        }
    }, 1000);
}
const D = document




