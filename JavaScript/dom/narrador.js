const d=document,
    w=window,
    n=w.navigator


    // export default function narrador() {

    //     const $textarea=d.querySelector("textarea[data-area-narrador]")


    //     d.addEventListener("click",(e)=>{
            
    //         if (e.target.matches("button[data-boton-narrador]")) {
    //             e.preventDefault()

    //             speechSynthesis.speak(new SpeechSynthesisUtterance($textarea.value))
                
    //         }
           
    //     })
    // }
    
    // el de arriba lo hice yo pero no podia cambiar las voces 



    export default function speechReader(){


        const $speechSelect = d.querySelector("select[data-select-speech]"),
        $speechTextarea=d.querySelector("textarea[data-area-narrador]"),
        $speechBtn=d.querySelector("button[data-boton-narrador]"),
        speachMessage= new SpeechSynthesisUtterance();

        let voices=[];

        d.addEventListener("DOMContentLoaded",(e)=>{

            w.speechSynthesis.addEventListener("voiceschanged", (e2)=>{
                voices= w.speechSynthesis.getVoices()
                voices.forEach(voice=>{
                    const $option=d.createElement("option")
                    $option.value=voice.name;
                    $option.textContent=`${voice.name}-${voice.lang}`;
                    $speechSelect.appendChild($option)
                })
            })

            
        })

        d.addEventListener("change",(e)=>{
            if (e.target===$speechSelect) {
                speachMessage.voice=voices.find(voice => voice.name===e.target.value);
                
            }
        })
        d.addEventListener("click",(e)=>{


            if (e.target === $speechBtn) {
                speachMessage.text=$speechTextarea.value;
                w.speechSynthesis.speak(speachMessage)
            }
        })

    }