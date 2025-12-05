/*3. A partir del documento HTML proporcionado para este ejercicio, asignar los manejadores 
de eventos necesarios a los botones para que al pulsar el izquierdo se coloreen de azul 
las celdas de la diagonal principal de la tabla, al pulsar el del centro se coloreen de 
rojo las de la diagonal secundaria y al pulsar el tercero se devuelve la tabla a su estado inicial.*/
/*
let tabla = document.querySelector('table')
let filas = tabla.rows

document.getElementById('principal').addEventListener('click', () => {
    for(let i=0; i < filas.length ;i++){
        let celda = filas[i].cells[i]
        celda.style.backgroundColor = 'blue'
    }
});

document.getElementById('resetear').addEventListener('click', () => {
    for(let i = 0; i<filas.length;i++){
        for(let x = 0; x < filas.length; x++){
            filas[i].cells[x].style.backgroundColor = 'white'
        }
    }
});

document.getElementById('secundaria').addEventListener('click', ()=>{
    let contador = 5
    for(let i= 0; i < filas.length ;i++){
        contador-- 
        let celda = filas[i].cells[contador]
        celda.style.backgroundColor = 'red'
    }
});

*/
/*4. A partir del documento HTML proporcionado para este ejercicio, generar el script necesario para que 
al pulsar en el botón “Crear Tabla” se genere automáticamente una tabla HTML con tantas filas y columnas 
como se ha especificado en el formulario. Dicha tabla deberá ubicarse en la capa con identificador “tabla” 
y cada celda deberá estar numerada tal y como se puede ver en la siguiente ilustración.*/

/*
document.getElementById('boton').addEventListener('click', ()=>{

    if(document.querySelectorAll('table')[0]){
        document.querySelectorAll('table')[0].remove();
    }

    let filas = document.querySelector('input[name="filas"]').value;
    let columnas = document.querySelector('input[name="columnas"]').value;
    let tabla = document.createElement('table')
    let contador=0;
    document.getElementById('tabla').append(tabla)
    for(let c= 0; c<columnas;c++){
        let fila = document.createElement('tr')

        document.getElementsByTagName('table')[0].append(fila)
        for(let f=0; f < filas;f++ ){
            contador++;
            let celda = document.createElement('td')
            celda.innerText=contador
            document.getElementsByTagName('tr')[c].append(celda)
        }
    }
});

*/

/*5. A partir del documento HTML proporcionado para este ejercicio, generar el script necesario para que al pulsar 
en el botón “Generar Tablero” se genere automáticamente un tablero de ajedrez. Cada casilla deberá estar numerada 
por su columna y fila tal y como se puede ver en la siguiente ilustración. El tablero deberá ubicarse en la capa 
con identificador “tablero”*/
/*
document.querySelector('#boton').addEventListener('click', () => {

    if(document.getElementsByTagName('table')[0]){
        document.getElementsByTagName('table')[0].remove();
    }
    let tablero = document.querySelector('#tablero');
    let tabla = document.createElement('table')
    tablero.append(tabla)
    let valorFila=9
    let letras = ['A','B','C','D','E','F','G','H']

    for(let f=0; f< 8; f++){
        let fila = document.createElement('tr')
        tabla.append(fila)
        valorFila--;

        for(let c=0; c<8;c++){
            let celda = document.createElement('td')
            celda.innerText = letras[c]+valorFila
            if((valorFila%2)==0 && (c%2)!=0){
                celda.style.backgroundColor = 'black'
                celda.style.color = 'white'
            }
            else if((valorFila%2)!=0 && (c%2)==0){
                celda.style.backgroundColor = 'black'
                celda.style.color = 'white'

            }

            fila.append(celda)
        }
        
    }
});
*/
// Interrupotor valor1 = !valor1

//Colecciones muertas = los querys selectors
//Colecciones vivas = los ElementSS

/*6. A partir del documento HTML proporcionado para este ejercicio, generar el script necesario para que al pulsar 
dentro de la tabla, la fila donde se haya hecho click con el cursor se marcará de amarrillo. Para ello puedes usar 
la clase “seleccionada”. Al pulsar en otra fila, la fila marcada anterior recuperará su color original.*/
/*
let celda = document.querySelectorAll('td');
celda.forEach(celda =>{
    celda.addEventListener('click', ()=>{
        
        let filas = document.querySelectorAll('tr');
        filas.forEach(f => f.classList.remove('seleccionada'));
        celda.parentElement.classList.add('seleccionada');

    });
});
*/

/*7.A partir del documento HTML proporcionado para este ejercicio, generar el script necesario para que al pulsar dentro 
de la tabla, la fila donde se haya hecho click con el cursor se desplazará un lugar hacia arriba dentro de la tabla.*/
/*
let celdas = document.querySelectorAll('td');

celdas.forEach(celda => {
    celda.addEventListener('click', ()=>{
        let fila = celda.parentElement;
        let filaSuperior = fila.previousElementSibling;
        console.log(fila)
        console.log(filaSuperior)

        if(fila.Superior != null)
            fila.parentElement.insertBefore(fila, filaSuperior) //padre.insertBefore(nodoAMover, nodoDeReferencia);
    });
});
*/

/*8. A partir del documento HTML proporcionado para este ejercicio, generar el script necesario para que al cambiar la opción 
seleccionada en la lista desplegable se apliquen estilos sobre la capa “texto” de diferentes formas:
 -Eliminar todos los estilos aplicados: elimina todos los estilos aplicados al texto dejándolo con el formato original que tiene al cargar inicialmente la página.
 -Cambiando atributo style: usando funciones del DOM cambiar el atributo style para que el texto tenga color azul, un tamaño de 20 píxeles y fuente helvética.
 -Asignando clases a objetos: usando funciones DOM asignar la clase “claseEstilo” predefinida en el documento html facilitado.
 -Asignado estilos externos al documento: asignar el fichero ej08.css facilitado al atributo href del enlace a las hojas de estilo del documento html.*/
/*
select = document.querySelector('form').opciones;
console.log(select)
texto = document.getElementById('texto');
enlaceCSS = document.getElementById('estilo')

select.addEventListener('change', () => {
    let opcion = select.value

    if(opcion == 'quitarEstilos'){
        texto.removeAttribute("style"); // elimina estilos inline
        texto.className = "";           // elimina clases
        enlaceCSS.href = "";            // quita CSS externo
    };

    if(opcion == 'atributoStyle'){
        texto.removeAttribute("class");
        enlaceCSS.href = "";

        texto.style.color = "blue";
        texto.style.fontSize = "20px";
        texto.style.fontFamily = "Helvetica";
    };

    if(opcion == 'asignandoClases'){
        texto.removeAttribute("style");
        enlaceCSS.href = "";

        texto.classList.add("claseEstilo");
    ;}

    if(opcion == 'estilosPagina'){
        texto.removeAttribute("style");
        texto.className = "";

        enlaceCSS.href = "ej8.css"; // enlaza el CSS externo
    };
});
*/

/*9. A partir del documento HTML proporcionado para este ejercicio, implemente un script que genere un código un captcha para el procesamiento 
de un formulario. Para ello, al pasar el ratón sobre un texto “Pase el ratón por aquí para ver el código”, se modificará dicho texto para 
mostrar un número aleatorio de cuatro cifras. Cuando el ratón deje de estar sobre el texto volverá al texto original. Por otro lado, habrá 
un campo de texto donde se introducirá el último número mostrado. Al enviar el formulario se comprobará que el número introducido y el último 
mostrado coinciden, si coinciden se enviará el formulario, en caso contrario saltará un alert con un mensaje de error y no se enviará el formulario.*/

/*
let pasaCod = document.getElementById('captcha');
let cod = document.getElementById('code');
let inputVerificar = document.getElementById('verify');
let boton = document.querySelector('btnLogin');
let formulario = document.querySelector('formulario');
let codCAPTCHA = 0;
let codAnt= "";

pasaCod.addEventListener('mouseenter', () => {
    codAnt = codCAPTCHA
    codCAPTCHA = Math.floor(Math.random()*9000)+1000 //.floor redondea un número hacia abajo
    cod.style.visibility = "visible"
    cod.textContent = codCAPTCHA
    pasaCod.textContent = codAnt


});

pasaCod.addEventListener('mouseleave', () => {
    cod.style.visibility = 'hidden'
    pasaCod.textContent = 'Pase el ratón por aquí para  el código captcha'

});

function botonPulsado(boton){
    boton.addEventListener('click', ()=>{
        if(boton && inputVerificar.value == codCAPTCHA){
            return formulario.submit()
        }
        else
            return alert("Error")
    })
};
*/

/*10. A partir del documento HTML facilitado crea una aplicación para gestionar tareas. Se mostrará un campo de texto para incluir 
la tarea a realizar, un campo select con la prioridad, Muy Alta, Alta, Media, Baja y Muy Baja y un botón para agregar una nueva tarea. 
Las tareas se mostrarán en una tabla que tendrá el orden, la tarea, la prioridad y una papelera para eliminar la tarea de la lista. 
Las tareas están ordenadas según la prioridad. Al agregar una nueva tarea se incluirá la tarea y se reordenará la tabla de tareas pendientes. 
Para el icono de la papelera podéis usar la librería css que se encuentra en: https://www.w3schools.com/w3css/w3css_icons.asp*/


let boton = document.getElementById('boton');
let tabla = document.querySelector('tbody');

boton.addEventListener('click', ()=>{

    //Índice
    
    let celdaInd = crearCelda();
    celdaInd.textContent = '';

    // Texto
    let input = document.querySelector('[name = tarea]').value;

    let celdaValor = crearCelda();
    celdaValor.textContent = input;
    
    // Prioridad
    let prioridad = document.querySelector('[name = prioridad]').value;

    let celdaPrioridad = crearCelda();
    celdaPrioridad.textContent = prioridad;

    // Botón
    let bEliminar = document.createElement('button')
    bEliminar.textContent = 'e';
    bEliminar.onclick = function(){
        let fila = this.parentElement.parentElement;
        fila.remove();
        reordenarIndice(tabla);
    };
    let celdaButon = crearCelda();
    celdaButon.append(bEliminar);
    
    let fila = crearFila(celdaInd, celdaValor, celdaPrioridad, celdaButon);
    implementarFila(tabla, fila);
});

function crearCelda(){
    celda = document.createElement('td')
    return celda
};

function crearFila(ind, valor, prioridad, boton){
    let fila = document.createElement('tr');
    fila.append(ind);
    fila.append(valor);
    fila.append(prioridad);
    fila.append(boton);

    return fila;
};

function reordenarIndice(tabla){
    for(let f = 0; f < tabla.childNodes.length;f++){
        tabla.childNodes[f].childNodes[0].textContent= f+1;
    };
};

function implementarFila(tabla, fila){
    if(tabla.childNodes.length == 0){
        tabla.append(fila);
    }
    else{
        let insertada = false
        console.log( 'Fila', fila.childNodes[2].textContent)
        for(let f = tabla.childNodes.length -1 ; f >= 0 ;f--){
            console.log(tabla.childNodes[f].childNodes[2].textContent)
            if(tabla.childNodes[f].childNodes[2].textContent == fila.childNodes[2].textContent){
                console.log('entro')
                tabla.childNodes[f].after(fila);
                inseratda = true;
                break;
            };
            console.log('Repeticion de bucle')
        };
        console.log('Salio del bucle')
        if(!insertada){
            tabla.lastElementChild.after(fila)
        };

    };
    reordenarIndice(tabla)
};