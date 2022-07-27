const D = document
// Mi Codigo
export default function darkTheme(btn, classDark) {
    const ls = localStorage;

    const $themeBtn = D.querySelector(btn),
          $selectors = D.querySelectorAll("[data-dark]");
    let moon = "🌙",
        sun = "☀️";
    const ligthMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark))
        $themeBtn.textContent = moon
        ls.setItem("theme", "light")
    }
    const darkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark))
        $themeBtn.textContent = sun
        ls.setItem("theme", "dark")
    }
    D.addEventListener('click', (e) => {
        if (e.target.matches(btn)) {
            if ($themeBtn.textContent === moon) {
                darkMode()
            } else {
                ligthMode()
            }
        }
    })
    D.addEventListener('DOMContentLoaded', e => {
        if (ls.getItem("theme") === null) ls.setItem("theme", "light")
        if (ls.getItem('theme') === 'light') ligthMode()
        if (ls.getItem('theme') === 'dark') darkMode()
    })
}


