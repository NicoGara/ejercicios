const d =document,
w=window

export function responsiveMedia(id,mq,mobileContent,desktopContent) {
    
    let breakPoint = w.matchMedia(mq)

    const responsive = ()=>{
        if (breakPoint.matches) {
            d.getElementById(id).innerHTML= desktopContent
        } else{
            d.getElementById(id).innerHTML= mobileContent
        }
    }

    w.addEventListener("resize",()=> responsive())
    responsive()
}

// en el video lo hace de otra manera pero lo hace con un metodo que ya esta obsoleto