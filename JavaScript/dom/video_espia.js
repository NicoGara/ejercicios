const d=document,
    w=window,
    n=w.navigator

export function scrollEspia() {
    
    const $videos=d.querySelectorAll("[data-video-espia]")
    
    const observados=(entries)=>{
        entries.forEach(entry => {
            
            if (entry.isIntersecting)entry.target.play()
            else entry.target.pause()

            d.addEventListener("visibilitychange",e=>{
                d.visibilityState==="visible" 
                ? entry.target.play() 
                : entry.target.pause()
            })
        });
        

        
    }

    const observer=new IntersectionObserver(observados,{
        threshold: 0.8
    })
    

    $videos.forEach(e=>observer.observe(e))



}


// lo de arriba esta hecho por mi y es igual al que haca jonmircha#100