export default function hamburgerMenu(panelBtn, panel, menuLink) {
    const D = document

    D.addEventListener('click', e => {
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            D.querySelector(panel).classList.toggle("is-active")
            D.querySelector(panelBtn).classList.toggle("is-active")
        }

        if (e.target.matches(menuLink)) {
            D.querySelector(panel).classList.remove("is-active")
            D.querySelector(panelBtn).classList.remove("is-active")
        }

    })
}