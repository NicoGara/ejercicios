const d=document,
w=window,
n=w.navigator


export default function filter(classEtiqueta,idFiltro) {


    addEventListener("keyup",(e)=>{
        const $etiquetas=d.querySelectorAll(classEtiqueta),
        $input=d.getElementById(idFiltro)


        console.log();
        
        if (e.target.matches(`#${idFiltro}`)) {
            setTimeout(() => {
                $etiquetas.forEach(e => {
                    // console.log(e.textContent);
                    // console.log(e.lastElementChild.textContent);
                    if (!!e.textContent.toLowerCase().includes($input.value.toLowerCase())) {
                    e.style.display=""
                    }else{
                    e.style.display="none"
                    }
                });
        }, 100);  

        }
        

        

    })



// este ejercicio lo hice por mi cuenta, tengo alguinas diferencias pero el resultado es casi el mismo, el tambien le aplica otras cosas por si queremos que las etiquetas tengan una transicion y no desaparezcan de golpe #jonmircha95
    
}