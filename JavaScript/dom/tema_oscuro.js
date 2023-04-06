const ls= localStorage 

export default function darkTheme(btn, classDark) {

    const $themeBtn = document.querySelector(btn),
     $selectors = document.querySelectorAll("[data-dark]")
    


     let luna="🌙",
     sol="☀️"


     const lightMode=()=>{
        $selectors.forEach(e => e.classList.remove(classDark));
        $themeBtn.textContent=luna;
        ls.setItem("theme","light");
    }

     const darkMode=()=>{
        $selectors.forEach(e => e.classList.add(classDark));
        $themeBtn.textContent=sol;
        ls.setItem("theme","dark");
     }

     

     document.addEventListener("click",e=>{
        if (e.target.matches(btn)) {
            if ($themeBtn.textContent=== luna) {
                darkMode()
            } else{ 
                lightMode()
            }
        }
     })

     document.addEventListener("DOMContentLoaded",()=>{
        if (ls.getItem("theme")=== null) ls.setItem("theme","light");
        if (ls.getItem("theme")=== "light") lightMode();
        if (ls.getItem("theme")=== "dark") darkMode();
     })
}