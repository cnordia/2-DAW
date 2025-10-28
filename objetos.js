class Arbol{
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
        let imprimir = "<table><tr><th>Codigo</th><th>Tallaje</th><th>Especie</th></tr><tr>";
        for(let valor of Object.values(this)){
            imprimir += "<td>"+valor+"</td>";
        }

        return imprimir += "</tr></table>";
    }

}

class Perenne extends Arbol{
    _frutal; //boleano
    
    constructor(cod, tallaje, especie, frutal){
        super(cod, tallaje, especie);
        this._frutal = frutal;
    }

    get frutal_1() {
        return this._frutal;
    }
    set frutal_1(value) {
        this._frutal = value;
    }

    toHTMLRow(){
        let imprimir = "<table><tr><th>Codigo</th><th>Tallaje</th><th>Especie</th><th>frutal</th></tr><tr>";
        for(let valor of Object.values(this)){
            imprimir += "<td>"+valor+"</td>";
        }

        return imprimir += "</tr></table>";
    }

}

class Caduco extends Arbol{
    _mesFloracion; //String si es abril, mayo,etc

    constructor(cod, tallaje, especie, mesFloracion){
        super(cod, tallaje, especie);
        this._mesFloracion = mesFloracion;
    }

    get mesFloracion() {
        return this._mesFloracion;
    }

    set mesFloracion(value) {
        this._mesFloracion = value;
    }

    toHTMLRow(){
        let imprimir = "<table><tr><th>Codigo</th><th>Tallaje</th><th>Especie</th><th>Mes Floración</th></tr><tr>";
        for(let valor of Object.values(this)){
            imprimir += "<td>"+valor+"</td>";
        }
        return imprimir += "</tr></table>";
    }

}

class Vivero {
    _arboles; //Lista de árboles

    constructor(){
        this._arboles = [];
    }

    get arboles() {
        return this._arboles;
    }
    set arboles(value) {
        this._arboles = value;
    }

    altaArbol(oArbol){
        if(this.arboles.some(elem => elem.codigo == oArbol.codigo)){
            return false;
        }
        this.arboles.push(oArbol);
        return true;
    }

    
    tallajeArbol(iCodigo, iTallaje){
        let listaArb = this.arboles.filter((elem) => elem.codigo == iCodigo)
        if(listaArb.length == 0){
            return "Árbol no registrado";
        }else{
            if(iTallaje > listaArb[0].tallaje){
                listaArb[0].tallaje = iTallaje;
                if(listaArb[0] instanceof Caduco)
                    return "Correcto, tallaje actualizado Caduco"
                else
                    return "Correcto, tallaje actualizado Perenne"           
            }else{
                return "Tallaje inferior al registrado";
            }
        }
    }


    listadoPerennes(iMinAltura){
        let lArbMayor = this.arboles.filter(elem => (elem.tallaje > iMinAltura && elem instanceof Perenne));
        lArbMayor.sort((a,b) => b.tallaje - a.tallaje);
        return lArbMayor.map((elem)=> elem.toHTMLRow());
    }

    listadoCaducos(sMesFloracion){
        let lMesFloracion = this.arboles.filter(elem => elem.mesFloracion == sMesFloracion && elem instanceof Caduco);
        console.log(lMesFloracion);
        return lMesFloracion.map(elem => elem.toHTMLRow());
    }

    totalArbolesVenta(){
        let lArbVentas = this.arboles.filter(elem => (elem.tallaje > 100 && elem instanceof Caduco) || (elem.frutal == true && elem.tallaje > 80 && elem instanceof Caduco) ||(elem.frutal == false && elem.tallaje > 120 && elem instanceof Caduco));
        return lArbVentas.length;
    }

}


