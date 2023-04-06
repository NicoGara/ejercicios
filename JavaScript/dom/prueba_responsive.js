
export default function responsiveTester(idForm) {
    const $form = document.getElementById(idForm)

    let tester;

    document.addEventListener("submit", (e)=>{

        if (e.target.matches(`#${idForm}`)) {
            e.preventDefault()


            tester=window.open(
                $form.direccion.value,
                "tester",
                `innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`
                );
        }
    })
    // aca probe otra manera de encontrar la targeta que dispara el evento sin usar el .matches()
    // no funciona con el link de google no se porque
    document.addEventListener("click", (e)=>{
        if (e.target===$form[4]) {
            e.preventDefault()
            tester.close()
            
        }
    })
}