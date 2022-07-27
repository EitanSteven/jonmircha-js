const D = document
export default function responsiveTester(form) {
    const $form = D.querySelector(form)
    let tester

    D.addEventListener('submit', e => {
        if (e.target === $form) {
            e.preventDefault()
            tester = window.open($form.direccion.value, 'tester', 
            `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`)
        }
    })

    D.addEventListener('click', e => {
        if (e.target === $form.cerrar) tester.close()
    })
}