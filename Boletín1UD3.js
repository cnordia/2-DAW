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

let celdas = document.querySelectorAll('td');

celdas.forEach(celda => {
    celda.addEventListener('click', ()=>{
        let fila = celda.parentElement;
        let filaSuperior = fila.previousElementSibling;
        console.log(fila)
        console.log(filaSuperior)

        fila.parentElement.insertBefore(fila, filaSuperior) //padre.insertBefore(nodoAMover, nodoDeReferencia);
    });
});