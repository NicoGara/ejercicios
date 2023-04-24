// const d=document,
//     w=window,
//     n=w.navigator

// export default function slider(divSliders,divBotones) {
    
//     const $sliders=d.querySelectorAll(`${divSliders}`),
//         $botones=d.querySelectorAll(`${divBotones} a`)

//     let i = 0;
    
//     d.addEventListener("click",e=>{
//         if (e.target.matches(`${divBotones} a`)) {
//             e.preventDefault()
//             if (e.target.textContent== "«") {
//                 $sliders[i].classList.remove("active")
//                 i--;
//                 if (i<0) i=$sliders.length-1;

//                 $sliders[i] .classList.add("active")

//             }else{
//                 $sliders[i].classList.remove("active")
//                 i++;
//                 if (i>= $sliders.length) i=0;

//                 $sliders[i] .classList.add("active")
//             }
            
//         }
//     })

// }
// el de arriba lo hice yo



const d=document,
    w=window,
    n=w.navigator

export default function slider() {
    
    const $sliders=d.querySelectorAll(`.slider-slide`),
        $botonNext=d.querySelector(`.slider-btns .next`),
        $botonPrev=d.querySelector(`.slider-btns .prev`)

    let i = 0;
    
    d.addEventListener("click",e=>{
        if (e.target===$botonPrev){
            e.preventDefault()
            $sliders[i].classList.remove("active")
            i--;
            if (i<0) i=$sliders.length-1;
            $sliders[i] .classList.add("active")
        }
        if (e.target===$botonNext){
            e.preventDefault()
            $sliders[i].classList.remove("active")
            i--;
            if (i<0) i=$sliders.length-1;
            $sliders[i] .classList.add("active")
        }
    })

}


