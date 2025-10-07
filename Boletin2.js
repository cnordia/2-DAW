/*7.Realiza un programa que reciba una cadena con el siguiente formato: “nombre:apellidos:telefono:email:codigopostal”. 
Tras recibir la cadena, debe desglosar y mostrar la siguiente información:
Código postal.
Apellidos.
Email.
Suponiendo un formato de email “direccion@servidor” debe mostrar el nombre del servidor asociado.*/

function SubirFormulario(){
    let cadena = document.getElementById("cadena").value;
    cadena.split(":");
    document.getElementById("salida").innerHTML += cadena.split(":")[4] + "<br>";
    document.getElementById("salida").innerHTML += cadena.split(":")[1]+"<br>";
    document.getElementById("salida").innerHTML += (cadena.split(":")[3]).split("@")[1] + "<br>";
    
}


/*8. Crear un script que muestre mediante un mensaje la fecha actual (día, mes en letra y año), la hora actual 
(hora y minutos), el día de la semana (en letra) o los tres anteriores a la vez, según elija el usuario.*/
/*
function obtenerFecha(){
    const fecha = new Date();
    
}
*/

/*9. Crear un script que reciba dos fechas y diga cuál es anterior y el tiempo transcurrido entre ellas (en años, meses y días).*/
function fecha(){
    let fecha1 = new Date(document.getElementById("fecha1").value);
    let fecha2 = new Date(document.getElementById("fecha2").value);

    console.log(fecha1.getTime());
}
