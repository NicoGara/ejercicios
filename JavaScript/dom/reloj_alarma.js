const d = document

export  const  reloj= async (pReloj,iniReloj,detReloj) => {
    let clockTiempo

    d.addEventListener("click", (e)=>{

        if (e.target.matches(iniReloj)) {
            
            const pasarMinutos = ()=>{
                let hora= new Date().toLocaleTimeString()
                pReloj.textContent= hora
            }
            clockTiempo = setInterval(pasarMinutos, 1000);
             e.target.disabled=true;
        }

        if (e.target.matches(detReloj)) {

            clearInterval(clockTiempo)

            pReloj.textContent= ``;
            
            d.querySelector(iniReloj).disabled=false;

        }
    })
}


export function alarm(ubiAudio,iniAlarm, detAlarm ) {
    let alarmaTempo; 

    const $alarm=document.createElement("audio")
    $alarm.src= ubiAudio

    d.addEventListener("click", (e)=>{
        if (e.target.matches(iniAlarm)) {
            alarmaTempo= setTimeout(() => {
                $alarm.play()
            }, 1000);
            e.target.disabled=true
        }

        if (e.target.matches(detAlarm)) {
            clearTimeout(alarmaTempo)
            $alarm.pause()
            $alarm.currentTime = 0;
            d.querySelector(iniAlarm).disabled=false
        }
    })

}