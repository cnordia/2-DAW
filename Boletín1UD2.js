/*1. Dado el formulario con los datos de tres actores seleccionables mediante un radiobutton, añadir un manejador 
de eventos al botón para que al pulsar sobre él muestre por consola los datos del actor seleccionado.*/


/*document.getElementById("consultar").addEventListener("click", () =>{
    console.log(formulario.actores.value)
})*/

/*2. Dado el formulario con los datos de cuatro provincias gallegas seleccionables mediante un select, añadir 
un manejador de eventos al botón para que al pulsar sobre él muestre por consola los datos de la provincia seleccionada.*/

/*document.querySelector("input[name = boton]").addEventListener("click", () =>{
    console.log(formulario.provincias.value)
})*/


/*3.Igual que el ejercicio anterior pero esta vez con un select múltiple.*/

/*document.querySelector("input[name = boton]").addEventListener("click", () =>{
    console.log(formulario.provincias.value)
})*/


/*4. Dado el formulario que permite la entrada de una provincia con su código correspondiente, 
y dos listas múltiples que inicialmente estarán vacías. Una vez pulsado el botón “agregar provincia” 
deberá introducirse la provincia en la lista múltiple de la izquierda. Los botones con las flechas deberán 
pasar de izquierda a derecha o viceversa las provincias seleccionadas de una de las listas múltiple de origen 
a la de destino. Habrá que controlar que si la provincia ya existe en alguna de las dos listas múltiples, no se 
permitirá que se agregue de nuevo.*/

/*
document.querySelector("input[name = btnAgregar]").addEventListener("click", () =>{
    cod_provincia = frmEntrada.txtCodigo.value.trim();
    provincia = frmEntrada.txtProvincia.value.trim();
    if (cod_provincia === "" || provincia === "") {
        alert("Introduce código y provincia");
        return;
    }
    option = document.createElement("option");
    option.value = cod_provincia;
    option.text = provincia;
    for(let opt of lstProvincias.options){
        if(opt.value == option.value || opt.text == option.text)
            return alert("Valor ya introducido");
    }
    lstProvincias.add(new Option(provincia, cod_provincia));
    
});

function pasarDerecha(){
    let index = lstProvincias.selectedIndex;
    if (index === -1) // Si no hay selección, salimos
        return; 

    let option = lstProvincias.options[index];

    let nuevaOpcion = new Option(option.text, option.value);

    lstDestino.add(nuevaOpcion);
    lstProvincias.remove(index);

};

function pasarIzquierda(){
    let index = lstDestino.selectedIndex;
    if (index === -1) // Si no hay selección, salimos
        return; 

    let option = lstDestino.options[index];

    let nuevaOpcion = new Option(option.text, option.value);

    lstProvincias.add(nuevaOpcion);
    lstDestino.remove(index);

};*/


/*5. Dado el formulario con un checkbox que puede ser marcado o desmarcado pulsando el botón correspondiente. 
Inicialmente dicho botón no hace nada, hay que añadirle el manejador de eventos correspondiente usando uno de 
los dos botones que están debajo. El otro es para eliminar dicho manejador de eventos. Si el botón tiene el 
manejador de eventos permitirá marcar o desmarcar el checkbox, en caso contrario no hará nada.*/
/*
function marcar(){
    let checkbox = document.getElementById('verano');
    checkbox.checked = !checkbox.checked
    checkbox.value = checkbox.checked ? 'Si': 'No'
    console.log(checkbox.checked , checkbox.value )
};

function addManejador(){
document.getElementById('botonMarcar').addEventListener('click', marcar)
    
};

function deleteManejador(){
document.getElementById('botonMarcar').removeEventListener('click', marcar)
};

*/

/*6.Dado el documento HTML facilitado con este ejercicio, añadir los manejadores de eventos necesarios para:
-El cuadrado se ponga de color amarillo cuando el cursor del ratón se coloque encima del mismo, para ello usa el atributo 
classList añadiendo la clase amarillo preparada de antemano. Además deberá informar en la capa de salida de texto 
del tipo de evento, el objeto en el que se produce, así como las coordenadas del cursor en el momento que se desencadena. 
Cuando el cursor salga del cuadrado deberá volver todo a la situación original, cuadrado blanco y salida de texto vacía.
-Cuando el cursor se coloque en el input de texto, cada vez que se pulse una tecla se informará en la capa de salida de texto de la tecla pulsada.
*/
/*
let cuadrado = document.getElementById('cuadrado');
let salida = document.getElementById('salida');

function pintarDatos(event){
    salida.innerHTML = "x "+event.clientX+ " y "+event.clientY
    cuadrado.classList.add('amarillo')

};

function restablecerCuadrado(event){
    console.log(event)
    cuadrado.classList.remove('amarillo');

}

cuadrado.addEventListener('mousemove', pintarDatos);
cuadrado.addEventListener('mouseleave', restablecerCuadrado);

*/

/*7. Dado el documento HTML facilitado con este ejercicio, añadir un único manejador de 
eventos que gestione la pulsación de las teclas de los diferentes dígitos mostrándolos en el input de solo lectura*/

/*
document.getElementById('teclado').addEventListener('click', pintarValores);

function pintarValores(event){
    let numero = event.target.value;
    let salida = document.getElementById('salida');
    salida.value += numero;
    console.log(event.target)
};
*/


/*8. Dado el documento HTML facilitado con este ejercicio, añadir un manejador de eventos que 
impida que se introduzcan dígitos en el input.*/
/*
let input = document.getElementById('txtEntrada');

function nodigitos(event){
    let datos = event.key;
    console.log(datos)
    if(/[^0-9]/.test(datos)){
        input.value +=datos
    }
    event.preventDefault();
        
};

input.addEventListener('keydown', nodigitos)

*/


/*9. Dado el documento HTML facilitado con este ejercicio, añadir un manejador de eventos 
que impida copiar el texto que haya en el input.*/

/*
let input = document.getElementById('txtEntrada');

function noclickDerecho(event){
    event.preventDefault()  
    console.log(event)
}

input.addEventListener('copy', noclickDerecho);
*/

/*10. Dado el documento HTML facilitado con este ejercicio, añadir los manejadores de eventos necesarios 
para mostrar un mensaje informativo en la capa de salida acerca de cuál de los dos botones del ratón se ha pulsado.*/
/*
let body = document.querySelector("body");

body.addEventListener('mousedown',(event) => {
    let mensaje
    if (event.button === 0) {
        mensaje = "Has pulsado el botón IZQUIERDO.";
    } else if (event.button === 2) {
        mensaje = "Has pulsado el botón DERECHO.";
    } else if (event.button === 1) {
        mensaje = "Has pulsado la RUEDA del ratón.";
    }
    document.querySelector('p').innerHTML = mensaje;
});

body.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});
*/
/*11. Dado el documento HTML facilitado con este ejercicio, añadir un manejador de eventos al formulario que muestre 
por consola el atributo tagName de las propiedades target y currentTarget del objeto evento, además incluye también 
la referencia al objeto this, para que quede claro a qué objeto se referencia al hacer click sobre el documento.
Hacer pruebas haciendo click en el párrafo, la capa o el formulario.*/
/*
let formulario = document.querySelector("form");

formulario.addEventListener('click',(event) => {
    console.log(event.currentTarget.tagName);
    console.log(event.target.tagName);
    console.log(this.tagName);

});
*/

/*12.Dado el documento HTML facilitado con este ejercicio, añadir un manejador de eventos que permita validar si el input 
del formulario está vacío. En ese caso no se procesa el formulario y se mostrará un mensaje de alerta informando de tal circunstancia.*/


