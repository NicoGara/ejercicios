const d=document,
 w=window,
 n=w.navigator


export default function conection() {
    
    const isOnline= ()=>{
        const $divConection= d.createElement("div")
        if (n.onLine) {
            $divConection.textContent="Conexion Reestablecida"
            $divConection.classList.add("online");
            $divConection.classList.remove("offline")

        }else{
            $divConection.textContent="Conexion Perdida"
            $divConection.classList.add("offline");
            $divConection.classList.remove("online")
        }

        d.body.insertAdjacentElement("afterbegin",$divConection)
        setTimeout(() => d.body.removeChild($divConection), 2000);
     }


    w.addEventListener("online",()=> isOnline())
    w.addEventListener("offline",()=>isOnline())

}