const D = document
export default function spyScroll() {
    const $sections = D.querySelectorAll("section[data-scroll-spy]")
    const cb = (entries) => {
        //console.log('entries: ', entries)
        entries.forEach((entry) => {
            const id = entry.target.getAttribute('id')
            //console.log(id)
            //console.log('Entry', entry)
            if (entry.isIntersecting) {
               D.querySelector(`a[data-scroll-spy][href="#${id}"]`).
               classList.add('active')
            } else {
                D.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.remove('active')  
            }
        })
    }

    const observer = new IntersectionObserver(cb, {
        //root  // El root del cual medir el scroll, en este caso, el body (Para eso se omite)
        //rootMargin: "-250px"    // Controla la precision de deteccion
        threshold: [0.5, 0.75]      // Va de o a 1 y los decimales son porcentajes 
    })

    $sections.forEach((el) => observer.observe(el))
}