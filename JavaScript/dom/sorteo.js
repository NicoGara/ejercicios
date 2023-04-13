const d=document,
w=window,
n=w.navigator

// export default function raffle(idButton,classGeneral) {

//     const $boton=d.getElementById(idButton),
//     $lista=d.querySelectorAll(classGeneral)
//     d.addEventListener("click",(e)=>{
//         if (e.target.matches(`#${idButton}`)) {
//             let random=Math.round(Math.random()*10)

//             let x= 0
//             let encontro = null

//             const funcionBuscar= ()=>{
                
//                 $lista.forEach(e2 => {
//                     x++
//                     if (random===x) {
//                         console.log(e2); 
//                         encontro=e2
//                         alert(`fleicitaciones ${e2.textContent}`)
//                     } 

//                 });
//             }

//             funcionBuscar()

//             if (!encontro) {
//                 console.log("no lo encontro");
//                 x=0
//                 random=Math.round(Math.random()*10)
//                 funcionBuscar()
//             }
//         }
//     })
    
// }

// el de arriba lo hice yo











export default function raffle(btn,selector){

    const getWinner=(selector)=>{
        const $player=document.querySelectorAll(selector),
        random= Math.floor(Math.random()*$player.length),
        winner= $player[random]

        return `el ganador es: ${winner.textContent}`
    }
    
    d.addEventListener("click",(e)=>{
        if (e.target.matches(`#${btn}`)) {
            let result=getWinner(selector)
            alert(result)
            console.log(result);

        }
    })

}

// pude buscar entre los comentarios de youtube creando la funciion en la consola y ejecutandola de la siguiente manera:
// getWinner("ytd-comment-thread-renderer #author-text span")

// para instagram use el siguiente:
// getWinner(".x1i10hfl ._aacl .x9f619")