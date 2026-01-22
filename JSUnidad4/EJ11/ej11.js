
const iniciarPromesa = document.getElementById('iniciaPromesa');
const procesarPromesa = document.getElementById('procesarPromesa');

let pulsado = false;

const msjExito = document.getElementById('msjExito').value;
const msjError = document.getElementById('msjError').value;
const salida = document.getElementById('salida');


async function procesar() {
    pulsado = false;
    let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
            // Todo esto se ejecutará CUANDO PASEN los 2 segundos
            if (pulsado) {
                resolve('Hecho: Pulsaste a tiempo ✅');
            } else {
                reject('Error: No pulsaste a tiempo ❌');
            }
        }, 2000);
    });

    try{
        let resultado = await promise; //El await espera a que la promesa sea recivida, si da reject lo enviará al catch
        console.log(resultado)
        salida.innerHTML = msjExito;
    }catch (error){
        console.log(error)
        salida.innerHTML = msjError;
        
    }


};

iniciarPromesa.addEventListener('click', procesar);

procesarPromesa.onclick = () => {
    pulsado = true;
    console.log("¡Botón procesar pulsado!");
};
