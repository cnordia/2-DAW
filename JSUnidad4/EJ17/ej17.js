
url = 'https://ejercicios-carlos-n-default-rtdb.europe-west1.firebasedatabase.app/.json';


let datos

fetch(url)
.then((resultado) => resultado.json())
.then((resultado) => datos = Object.values(resultado.alumnos))
.then(() =>{
    for( obj  of datos){
        document.getElementById('salida').innerHTML += Object.values(obj) + '<br>';
    }
})
.catch((error) => console.log(error))


const formulario = document.getElementsByName('formNuevoAlumno');


formulario.addEventListener('submit', enviarFormulario);



async function enviarFormulario(){
    formulario.preventDefault();

    const nuevoAlumno={
        id:document.getElementByName('id').value,
        apellidos: document.getElementsByName('apellidos').value,
        nombre:document.getElementsByName('nombre').value,
        edad:document.getElementsByName('edad').value,
    }
    
    console.log(nuevoAlumno)
    try{
        const respuesta = await fetch(url,{
            method:'POST',
            body:JSON.stringify(nuevoAlumno),
            headers:{
                'Content-Type': 'appliactiomn/json:charset=utf-8'
            }
        });

        if(respuesta.ok){
            alert('Datos enviados correctamente');
            const datosRespuesta = await respuesta.json();
            alert("El ID generado es:", datosRespuesta.name);

            formulario.reset();
        }

        else{
            alert('Error al enviar datos')
        }

    }
    catch(error){
        alert(error)

    }
}