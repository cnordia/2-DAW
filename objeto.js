class Arbol {
    _codigo; //id unico
    _tallaje; //cm y tienen altura min para la venta
    _especie; //nombre
  
    constructor(cod, tallaje, especie){
        this._tallaje = tallaje;
        this._codigo = cod;
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
        return `<table>
                    <tr>
                        <th>${this.codigo}</th>
                        <th>${this.tallaje}</th>
                        <th>${this.especie}</th>
                    </tr>
                </table>`;
    }

}

class Perenne extends Arbol{
    _frutal; //boleano

    toHTMLRow(){
        return 
    }

}

class Caduco extends Arbol{
    _mesFloracion; //String si es abril, mayo,etc

    toHTMLRow(){

    }

}

class Vivero {
    _arboles; //Lista de árboles

    get arboles() {
        return this._arboles;
    }
    set arboles(value) {
        this._arboles = value;
    }

    altaArbol(oArbol){

    }

    
}

let a1 = new Arbol(1, 23, "sagrado");
b = a1.toHTMLRow();
document.getElementById("p").innerHTML = b;
