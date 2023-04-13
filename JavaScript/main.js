
const boton= document.querySelector(".hamburger--collapse")

const seleccion= document.querySelector(".container_nav")

const root=document

boton.addEventListener("click", ()=>{
    if (boton.className == "panel-btn hamburger hamburger--collapse is-active") {


        seleccion.style.translate="-100%"
        
        seleccion.style.transition="1s"

        boton.className="panel-btn hamburger hamburger--collapse"
    } else{
        boton.className="panel-btn hamburger hamburger--collapse is-active"

        seleccion.style.translate="0"
        seleccion.style.transition="1s"
    }
    
})

const navegadores=document.querySelectorAll(".container_nav a")


navegadores.forEach(e => {
    e.addEventListener("click" , ()=>{
        seleccion.style.translate="-100%"
        boton.className="panel-btn hamburger hamburger--collapse"
    })
});

















const pReloj = document.getElementById("reloj")


import { reloj, alarm } from "./dom/reloj_alarma.js"
import {moveBall, shortcuts} from "./dom/teclado.js"
import { cuentaRegresiva } from "./dom/cuenta_regresiva.js";
import { scrollTopButton } from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js"
import { responsiveMedia } from "./dom/objeto_responisve.js"
import responsiveTester from "./dom/prueba_responsive.js"
import usserDeviceInfo from "./dom/deteccion_dispositivos.js"
import conection from "./dom/conexion.js"
import webCam from "./dom/deteccion_webcam.js"
import getGeolocation from "./dom/geolocalizacion.js"
import filter from "./dom/filtro.js"
import raffle from "./dom/sorteo.js"

document.addEventListener("DOMContentLoaded", ()=>{
    reloj(pReloj,".iniciar_reloj",".detener_reloj")
    alarm("assets/audio/grabacion.m4a",".iniciar_alarma",".detener_alarma" )
    cuentaRegresiva("countdown","apr 26, 2023 00:00:00","feliz cumpleaños")
    scrollTopButton(".scroll-top-button")

    responsiveMedia("youtube","(min-width: 1024px)",
     `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PPSV&ab_channel=jonmircha"> Ver Video</a>`,
      `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)
    
    responsiveMedia("gmaps","(min-width: 1024px)",
    ` <a href="https://goo.gl/maps/2y8HUjkniNwroo4h7"> Ver mapa</a>`,
     `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42272.94542498485!2d-57.58687042217525!3d-38.04812399014191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584ddf29129483b%3A0x4d4bf245aff78945!2sPuerto%20de%20Mar%20del%20Plata!5e0!3m2!1ses!2sar!4v1680549589814!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)

     responsiveTester("respinsive-tester")

     usserDeviceInfo("user-device")

     webCam("webcam")

     getGeolocation("geolocation")

     filter(".etiqueta","filtro")

     raffle("button_raffle",".lista")

    })
    
    
    document.addEventListener("keydown",(e)=>{
        shortcuts(e)
        moveBall(e,".ball",".container_game")
        
    })
    
    
    
    darkTheme(".dark-theme-btn","dark-mode" )
    
    conection()







// import hamburguerMenu from "./dom/menu_hamburguer.js";
// const d =document
// d.addEventListener("DOMContentLoaded",(e)=>{
//     hamburguerMenu(".panel-btn", ".container_nav")
// })
