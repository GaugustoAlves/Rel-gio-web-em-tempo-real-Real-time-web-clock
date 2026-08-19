const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');


const relogio = setInterval(
    function tempo(){
        let dataDeAgora = new Date();

        let hr = dataDeAgora.getHours();
        let min = dataDeAgora.getMinutes();
        let seg = dataDeAgora.getSeconds();


        if(hr < 10){
            hr = "0" + hr;
        }

        if(min < 10){
            min = "0" + min;
        }

        if(seg < 10){
            seg = "0" + seg;
        }

        horas.textContent = hr;
        minutos.textContent = min;
        segundos.textContent = seg;
    }, 1000
)