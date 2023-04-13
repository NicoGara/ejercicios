const d=document,
 n=navigator;


export default function getGeolocation(id) {
    
    const $id = d.getElementById(id),
    options={
        enableHighAccuacy: true,
        timeout:5000,
        maximumAge:0
    }

    const success= (position)=>{
        let coords = position.coords;

        $id.innerHTML= `
        <p>tu posicion actual es:</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Precision: <b>${Math.round(coords.accuracy)} metros</b></li>
        </ul> 
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blanck" rel="noopener">Ver en google maps</a>`
        // console.log(position);
    },

    error = (err)=>{
        $id.innerHTML=` <p><mark>${err.code} ${err.message} </mark></p>`
        console.log(err);
    }



    n.geolocation.getCurrentPosition(success,error,options)

}