class Arbol {
    _codigo; //id unico
    _tallaje; //cm y tienen altura min para la venta
    _especie; //nombre
  
    constructor(cod, tallaje, especie){
        this._codigo = cod;
        this._tallaje = tallaje;
        this.especie = especie;
    }

     get codigo() {
        return this._codigo;
    }
    set codigo(value) {
        this._codigo = value;
    }

    get tallaje() {
        return this._tallaje;
    }
    set tallaje(value) {
        this._tallaje = value;
    }
    
    get especie() {
        return this._especie;
    }
    set especie(value) {
        this._especie = value;
    }

    toHTMLRow(){
        let imprimir = "<tr>";
        for(let [clave, valor] of Object.entries(this)){
            imprimir += `<td>${valor}</td>`
        }
        return `${imprimir}</tr>`;
    }

}

class Perenne extends Arbol{
    _frutal; //boleano

    constructor(cod, tallaje, especie, frutal){
        super(cod, tallaje, especie);
        this._frutal = frutal;
    }

    toHTMLRow(){
        let imprimir = ""
        for(let [clave, valor] of Object.entries(this)){
            console.log(clave, valor);
            imprimir+=clave+ valor;
        }
        return imprimir;
    }

}

class Caduco extends Arbol{
    _mesFloracion; //String si es abril, mayo,etc

    toHTMLRow(){
        imprimir = ""
        for(let [clave, valor] of Object.entries(this)){
            console.log(clave, valor);
            imprimir+=clave, valor;
        }

    }

}

class Vivero {
    _arboles; //Lista de árboles

    constructor(){
        this._arboles = [] // Esuna lista vacía
    }

    get arboles() {
        return this._arboles;
    }
    set arboles(value) {
        this._arboles = value;
    }

    altaArbol(oArbol){
        let inclusionRealizada = false

        if(this.arboles.some(a => oArbol.codigo == a.codigo)){
            inclusionRealizada = false;

        }else{
            this.arboles.push(oArbol);
            inclusionRealizada = true;
        }
        return inclusionRealizada;
    }

    
}

let a1 = new Arbol(1, 23, "sagrado");
document.getElementById("p").innerHTML = a1.toHTMLRow();

let f1 = new Perenne(3,45,"pro", true);
document.getElementById("o").innerHTML = f1.toHTMLRow();

oVivero = new Vivero();
oVivero.altaArbol(new Perenne(1, 100, "Olivo", true));
oVivero.altaArbol(new Caduco(2, 78, "Melocotonero", "abril"));
oVivero.altaArbol(new Perenne(3, 50, "Ciprés", false));
oVivero.altaArbol(new Perenne(3, 75, "Pino piñonero", true));
oVivero.altaArbol(new Caduco(5, 81, "Melocotonero", "abril"));
oVivero.altaArbol(new Caduco(6, 110, "Manzano", "mayo"));
oVivero.altaArbol(new Perenne(7, 80, "Cedro", false));
oVivero.altaArbol(new Caduco(8, 67, "Naranjo", "marzo"));
oVivero.altaArbol(new Perenne(9, 90, "Alcornoque", true));
oVivero.altaArbol(new Caduco(10, 70, "Peral", "marzo"));

console.log(oVivero.arboles)