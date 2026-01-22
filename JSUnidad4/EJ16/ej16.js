
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
