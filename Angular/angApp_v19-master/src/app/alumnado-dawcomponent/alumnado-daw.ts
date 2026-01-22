export class AlumnadoDAW{
    constructor(
        public nombre:string,
        public apellidos:string,
        public dni:string,
        public fechaNac:Date,
        public poblacion:string,
        public telefono:number,
        public curso:string,
        public modulos:Array<string>
    ){}
}