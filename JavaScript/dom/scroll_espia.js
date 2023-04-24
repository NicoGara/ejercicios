const d=document,
    w=window,
    n=w.navigator

export default function scrollSpy() {

    const $section = d.querySelectorAll("div[data-scroll-spy]")

    const cb = (entries)=>{
        
        entries.forEach(en=>{
            const id = en.target.getAttribute("id")

            if (en.isIntersecting) {
                d.querySelector(`a[data-scroll-spy][href="#${id}"`).classList.add("active")

            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"`).classList.remove("active")

                
            }
            
        })
        
    }

    const observer= new IntersectionObserver(cb,{
        //root
        // rootMargin: "-400px"
        // threshold: [0.4,0.75]
    })

    $section.forEach(e=>{
        observer.observe(e)
    })
}