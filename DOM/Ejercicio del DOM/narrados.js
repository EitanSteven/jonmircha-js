const D = document, w = window

export default function speachReader() {
    const $speachSelect = D.getElementById('speach-select')
    const $speachTxtArea = D.getElementById('speach-text')
    const $speachBtn = D.getElementById('speach-btn')
    const speachMsg = new SpeechSynthesisUtterance()

    let voices = []

    D.addEventListener('DOMContentLoaded', e=> {
        w.speechSynthesis.addEventListener('voiceschanged', e=> {
            voices = w.speechSynthesis.getVoices()
        
            voices.forEach(voice => {
                const $option = D.createElement('option')
                $option.value = voice.name
                $option.textContent = `${voice.name} - ${voice.lang}`

                $speachSelect.appendChild($option)
            })
        })
    })
    D.addEventListener('change', e => {
        if (e.target === $speachSelect) {
            speachMsg.voice = voices.find(voice => voice.name === e.target.value)

            console.log(speachMsg)
        }
    })
    D.addEventListener('click', e => {
        if (e.target === $speachBtn) {
            speachMsg.text = $speachTxtArea.value
            w.speechSynthesis.speak(speachMsg)
        }
    })
}