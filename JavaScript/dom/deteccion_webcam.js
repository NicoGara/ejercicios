const n=window.navigator

export default function webCam(id) {
    const $video=document.getElementById(id)

    console.dir(n.mediaDevices.getUserMedia);

    n.mediaDevices.getUserMedia({video:true ,audio:true})
    .then((stream)=>{
        console.log(stream);
        $video.srcObjet=stream;
        $video.play();
    })
    .catch((err)=>{
        $video.insertAdjacentHTML(`afterend`, `<p> <mark> ${err} </mark></p>`);
        console.log(`sucedio el siguiente error ${err}`)

    })
    
}