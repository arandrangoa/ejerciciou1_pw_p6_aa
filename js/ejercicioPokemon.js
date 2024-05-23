let intentos = 1;
let puntaje = 0;
function validar(idboton) {

    if (idboton === "correcto") {
        
        if (intentos === 1) {
            puntaje += 5;
            document.getElementById("idRespuesta").innerText = "Felicitaciones, has seleccionado la opcion correcta";
            document.getElementById("idImagenInicial").src = "../img/pcolor.jpg"
            var numInt = parseInt(document.getElementById("idIntentos").innerText);
            var nueNumInt = numInt + 1;
            document.getElementById("idIntentos").innerText = nueNumInt
            document.getElementById("idPuntaje").innerText = puntaje;
            intentos=2;
            
            
        } else if (intentos === 2) {
            puntaje += 3;
            document.getElementById("idRespuesta").innerText = "Felicitaciones, has seleccionado la opcion correcta";
            document.getElementById("idImagenInicial").src = "../img/pcolor.jpg"
            var numInt = parseInt(document.getElementById("idIntentos").innerText);
            var nueNumInt = numInt + 1;
            document.getElementById("idIntentos").innerText = nueNumInt
            document.getElementById("idPuntaje").innerText = puntaje;
            intentos=3;

        } else if (intentos === 3) {
            puntaje += 1;
            document.getElementById("idRespuesta").innerText = "Felicitaciones, has seleccionado la opcion correcta";
            document.getElementById("idImagenInicial").src = "../img/pcolor.jpg"
            var numInt = parseInt(document.getElementById("idIntentos").innerText);
            var nueNumInt = numInt + 1;
            document.getElementById("idIntentos").innerText = nueNumInt
            document.getElementById("idPuntaje").innerText = puntaje;
            intentos=4;
            
        } else {
            document.getElementById("idRespuesta").innerText = "";
            document.getElementById("idImagenInicial").src = "../img/pnegro.jpg"
            document.getElementById("idIntentos").innerText = ""
            document.getElementById("idPuntaje").innerText = "";
        }

    } else if(idboton==="incorrecto"){
        document.getElementById("idRespuesta").innerText = "Pokemon incorrecto, intentalo nuevamente";
        var numInt = parseInt(document.getElementById("idIntentos").innerText);
        var nueNumInt = numInt + 1;
        document.getElementById("idIntentos").innerText = nueNumInt
        intentos=nueNumInt;
    } 

}

