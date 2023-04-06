const d = document,
 w= window;


export function scrollTopButton(btn) {
    const $scrollBtn = d.querySelector(btn)

    w.addEventListener("scroll", e=>{
    let scrollArriba =w.pageYOffset || d.documentElement.scrollTop || w.scrollY
     if (scrollArriba>600) {
        $scrollBtn.classList.remove("hidden")
     }else{
        $scrollBtn.classList.add("hidden")
     }
    })

    d.addEventListener("click", e=>{
        if (e.target.matches(btn)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0
            })
        }
    })
}