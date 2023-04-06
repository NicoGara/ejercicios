export default function hamburguerMenu(panelBtn, panel) {

    const d=document

    d.addEventListener("click", (e)=>{

        console.log("hola");
        if (e.target.matches(panelBtn || e.target.matches(`${panelBtn} *`))) {
            d.querySelector(panelBtn).classList.toggle("is-active")
            d.querySelector(panel).classList.toggle("is-active")
        }
    })

}


