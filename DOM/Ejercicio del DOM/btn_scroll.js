const D = document,
      W = window;

export default function scrollTopBtn(btn) {
    const $scrollBtn = D.querySelector(btn)

    W.addEventListener('scroll', e => {
    let scrollTop = W.pageOffset || D.documentElement.scrollTop
    if (scrollTop > 300) {
        $scrollBtn.classList.remove("hidden")
    } else {
        $scrollBtn.classList.add("hidden")
    } })

    D.addEventListener('click', e =>{
        if (e.target.matches(btn)) {
            W.scrollTo({
                behavior: "smooth",
                top: 0
            })
        }
    })
}