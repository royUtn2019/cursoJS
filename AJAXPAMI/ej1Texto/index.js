window.addEventListener('load',function(){

    let boton = this.document.getElementById('btn');
    boton.addEventListener('click', traerTexto);  //addEventListener que evento va a hacer

});

function traerTexto(){

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){ ///onreadystatechange cada vez que cambia el estado

        if(xhr.readyState==4){
            document.getElementById('loader').innerHTML = "";
            if(xhr.status ==200){

                let info = document.getElementById('info');
                info.innerText = xhr.responseText
            }
            else{
                //console.warn(xhr.status +" : "+xhr.statusText);
                let span = document.getElementById('loader');
                span.innerHTML="<img src= './images/spin.gif'></img>"
            }

        }
        ///https://icons8.com/preloaders/en/circular/pinwheel/

    }    
    xhr.open('GET','./documento1.txt',true);
    xhr.send();



}