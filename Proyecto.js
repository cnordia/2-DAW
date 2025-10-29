class Cliente{
    _dniCliente;   
    _nombre;
    _apellidos;
    _usuario;

    constructor(dni, nombre, apellidos, usuario){
        this.dniCliente = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.usuario = usuario;
    }

    get dniCliente() {
        return this._dniCliente;
    }
    set dniCliente(value) {
        this._dniCliente = value;
    }

     get usuario() {
        return this._usuario;
    }
    set usuario(value) {
        this._usuario = value;
    }

    get apellidos() {
        return this._apellidos;
    }
    set apellidos(value) {
        this._apellidos = value;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }

    toHTMLRow(){
        resultado = `<table><tr><th>DNI</th><th>Nombre</th><th>Apellidos</th><th>Usuario</th></tr><tr>`;
        for(let atributo of Object.values(this)){
            resultado+= `<td>${atributo}</td>`;
        }
        return resultado += `</tr></table>`
    }

}


class Alojamiento{
    _idAlojamiento;
    _numPersonas;

    constructor(idAlojamiento, numPersonas){
        this._idAlojamiento = idAlojamiento;
        this._numPersonas = numPersonas;
    }

    get idAlojamiento() {
        return this._idAlojamiento;
    }
    set idAlojamiento(value) {
        this._idAlojamiento = value;
    }

    get numPersonas() {
        return this._numPersonas;
    }
    set numPersonas(value) {
        this._numPersonas = value;
    }

    toHTMLRow(){
        let resultado = `<table><tr><th>ID Alojamiento</th><th>Nº Personas</th><tr>`;
        for(let atributo of Object.values(this)){
            resultado+= `<td>${atributo}</td>`;
        }
        return resultado += `</tr></table>`
    }
    
}


class Habitacion extends Alojamiento{
    _desayuno;

    constructor(idAlojamiento, numPersonas, desayuno){
        super(idAlojamiento, numPersonas);
        this._desayuno = desayuno;
    }


    get desayuno() {
        return this._desayuno;
    }
    set desayuno(value) {
        this._desayuno = value;
    }

    toHTMLRow(){
        let resultado = super.toHTMLRow();
        let posicion = resultado.lastIndexOf("</th>");
        resultado = resultado.slice(0, posicion+5)+ `<th>Desayuno</th>`+resultado.slice(posicion+5);
        return resultado;

    }

    
}

class Apartamento extends Alojamiento{
    _parking;
    _dormitorios;

    constructor(idAlojamiento, numPersonas, parking, dormitorios) {
        super(idAlojamiento, numPersonas);
        this._parking = parking;
        this._dormitorios = dormitorios;
    }


    get parking() {
        return this._parking;
    }
    set parking(value) {
        this._parking = value;
    }

    get dormitorios() {
        return this._dormitorios;
    }
    set dormitorios(value) {
        this._dormitorios = value;
    }
    
    toHTMLRow(){
        let resultado = super.toHTMLRow();
        let posicion = resultado.lastIndexOf("</th>");
        resultado = resultado.slice(0, posicion+5)+ `<th>Parking</th><th>Dormitorios</th>`+resultado.slice(posicion+5);
        return resultado;
    }

}


class Reserva{
    _id_Reserva;
    get id_Reserva() {
        return this._id_Reserva;
    }
    set id_Reserva(value) {
        this._id_Reserva = value;
    }
    _cliente;
    get cliente() {
        return this._cliente;
    }
    set cliente(value) {
        this._cliente = value;
    }
    _alojamientos;
    get alojamientos() {
        return this._alojamientos;
    }
    set alojamientos(value) {
        this._alojamientos = value;
    }
    _fechaInicio;
    get fechaInicio() {
        return this._fechaInicio;
    }
    set fechaInicio(value) {
        this._fechaInicio = value;
    }
    _feRhaFin;
    get feRhaFin() {
        return this._feRhaFin;
    }
    set feRhaFin(value) {
        this._feRhaFin = value;
    }

    constructor(id_Reserva, cliente, fechaInicio, feRhaFin){
        this._id_Reserva = id_Reserva;
        this._cliente = cliente;
        this._alojamientos = [];
        this._fechaInicio = fechaInicio;
        this._feRhaFin = feRhaFin;
    }

    toHTMLRow(){
        resultado = `<table><tr><th>IDReserva</th><th>Cliente</th><th>Alojamientos</th><th>FIni</th><th>FFin</th></tr><tr>`;
        for(let atributo of Object.values(this)){
            resultado+= `<td>${atributo}</td>`;
        }
        return resultado += `</tr></table>`
    }

    
}


class Agencia{
    _clientes;
    get clientes() {
        return this._clientes;
    }
    set clientes(value) {
        this._clientes = value;
    }
    _reservas;
    get reservas() {
        return this._reservas;
    }
    set reservas(value) {
        this._reservas = value;
    }
    _alojamientos;
    get alojamientos() {
        return this._alojamientos;
    }
    set alojamientos(value) {
        this._alojamientos = value;
    }

    constructor(){
        this._clientes = [];
        this._reservas = [];
        this._alojamientos = [];
    }
    

    altaCliente(oCliente){
        let nusuario = oCliente.nombre.trim().charAt(0).toLowerCase();
        let lApellidos = oCliente.apellidos.trim().split(" ");
        nusuario += lApellidos[0].slice(0,3).toLowerCase() + lApellidos[1].slice(0,3).toLowerCase();
        nusuario += String(oCliente.dniCliente).slice(-3);
        oCliente.usuario = nusuario;
        this._clientes.push(oCliente);

    }

    altaAlojamiento(oAlojamiento){
        let idAloj = oAlojamiento.id;
        
        if(this.alojamientos.some(elem => elem.idAlojamiento == idAloj)){
            return alert("Alojamiento ya ocupado")
        }else{
            if(oAlojamiento instanceof Habitacion){
                if(oAlojamiento.desayuno){
                    console.log("Desayuno incluido");
                }else{
                    console.log("Desayuno NO incluido");
                }
            }else{
                if(oAlojamiento.parking){
                    console.log("Hay parking");
                }
                console.log(oAlojamiento.dormitorios);
            }

            this.alojamientos.push(oAlojamiento);
            alert("Alojamiento añadido")
        }
    }

    altaReserva(oReserva){
        if(this.reservas.some(elem => elem.id_Reserva = oReserva.id_Reserva)){
            alert("Ya hay una reserva con este id");
        }else{
            this.reservas.push(oReserva);
            alert("Reserva añadida");
        }
    }



    listadoClientes(){
        for(let c of this.clientes.values()){
            console.log(c.nombre)
        }
    }

    listadoAlojamientos(){
        for(let a of this.alojamientos){
            console.log(a.idAlojamiento);
        }
    }


}


h1 = new Apartamento(1,2,true, 3);
h1.toHTMLRow();
c1 = new Cliente(77943255, "Carlos", "Norte Díaz", "hj")
a = new Agencia();
a.altaCliente(c1);
aloj =  new Habitacion(2, 23,true);
apart = new Apartamento(4, 34, true, 2);
res1 = new Reserva(1,c1,"20-10", "25-10")
res2 = new Reserva(1,c1,"20-10", "25-10")

a.altaAlojamiento(aloj);
a.altaAlojamiento(apart);
a.listadoClientes();
a.listadoAlojamientos();

a.altaReserva(res1);
a.altaReserva(res2);