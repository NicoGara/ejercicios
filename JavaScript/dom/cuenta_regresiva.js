export function cuentaRegresiva(idCueta, limitDate, finalMessage) {
    
    const divCuenta= document.getElementById(idCueta),
     fecha = new Date(limitDate).getTime()


    

    let countdownTempo=setInterval(() => {
        let now=new Date().getTime(),
        limitTime= fecha-now,
        days= Math.floor(limitTime / (1000*60*60*24)),
        hours =  ("0" + Math.floor((limitTime % (1000*60*60*24)) / (1000*60*60))).slice(-2),
        minutes = ("0" + Math.floor((limitTime % (1000*60*60)) / (1000*60))).slice(-2),
        seconds = ("0" + Math.floor((limitTime % (1000*60)) / (1000))).slice(-2);

        divCuenta.innerHTML= `<h3>faltan: ${days} dias ${hours} horas  minutos ${minutes} segundos ${seconds} 🤸 </h3>`
        
        if (limitTime<0) {
            clearInterval(countdownTempo)
            divCuenta.innerHTML= `<h3> ${finalMessage} </h3>`
            
        }
    }, 1000);

}