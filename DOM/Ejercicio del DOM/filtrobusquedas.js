const D = document

export default function searchFilter(input, selector) {
    D.addEventListener('keyup', e => { 
    if (e.target.matches(input)) {

        if (e.key === 'Escape') e.target.value = ""
        

        D.querySelectorAll(selector).forEach(el =>
            el.textContent.toLowerCase().includes(e.target.value)
            ? el.classList.remove("filter")    // True
            : el.classList.add("filter"))   // False
    }})
}