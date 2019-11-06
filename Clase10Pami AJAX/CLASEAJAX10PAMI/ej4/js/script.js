window.addEventListener('load', function(){

    let form = this.document.forms[0];

    form.addEventListener('submit', function(e){
        e.preventDefault(); //saca los valores del get en la url

        enviarDatos();
    });



});

function enviarDatos(){

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){  // seteo de funcion que va a procesar la respuesta
        if(xhr.readyState == 4){

            if (xhr.status == 200){

                let Personas = JSON.parse(xhr.responseText);
                info.appendChild(createTabla(Personas));
                
            }
            else{

                info.innerTest = xhr.status + ' : '+xhr.statusText;
            }
        }
        else{

            info.appendChild(creaSpinner());

        }
    }

    let url = 'pagina1.php';
    xhr.open('GET', url );
    xhr.send;

}


function crearSpinner(){
    let spinner = document.createElement('img');
    spinner.setAttribute('src','./imagem/805.gif');
    return spinner;
}