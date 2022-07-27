const D = document

export default function slider() {
    const $nextBtn = D.querySelector('.slider-btns .next')
    const $prevBtn = D.querySelector('.slider-btns .prev')
    const $slides  = D.querySelectorAll('.slider-slide')
    let i = 0

    D.addEventListener('click', e => {
        if (e.target === $prevBtn) {
            e.preventDefault()
            $slides[i].classList.remove('first-slide')
            i--

            if (i < 0) {
                i = $slides.length -1
            }

            $slides[i].classList.add('first-slide')
        }
        
        if (e.target === $nextBtn) {
            e.preventDefault()
            $slides[i].classList.remove('first-slide')
            i++

            if (i >= $slides.length) {
                i = 0
            }

            $slides[i].classList.add('first-slide')
        }
    })
}