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



document.getElementById('boton').addEventListener('click', ()=>{
    console.log('BotonPulsado');
    let filas = document.querySelector('input[name="filas"]').value;
    let columnas = document.querySelector('input[name="columnas"]').value;
    let tabla = document.createElement('table')

    document.getElementById('tabla').appendChild(tabla)
    for(let c= 0; c<columnas;c++){
        let fila = document.createElement('tr')
        let contador = contadorPersistente

        document.getElementsByTagName('table')[0].appendChild(fila)
        for(let f=0; f < filas;f++ ){
            let celda = document.createElement('td')
            celda.textContent = 
            document.getElementsByTagName('tr')[c].appendChild(celda)
        }
    }
});