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