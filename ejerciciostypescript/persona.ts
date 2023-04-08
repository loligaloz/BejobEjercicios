class Persona {
    //Propiedades
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumpleaños: Date;
    private _colorFavorito: string;
    private _sexo: 'Masculino' | 'Femenino' | 'Otro';
    private _direcciones: string[];
    private _mails: string[];
    private _telefonos: string[];
    private _notas: string;
    
    //Constructor
    constructor (nombre:string, apellidos:string, edad:number, dni:string, cumpleaños:Date, colorFavorito:string, sexo:'Masculino' | 'Femenino' | 'Otro', direcciones:string[], mails:string[], telefonos:string[], notas:string){
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumpleaños;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }

    //Accesos a las propiedas
    public get nombre() {
        return this._nombre;
    }

    public set nombre(nombre){
        this._nombre = nombre;
    }

    public get apellidos() {
        return this._apellidos;
    }

    public set apellidos(apellidos) {
        this._apellidos = apellidos;
    }

    public get edad() {
        return this._edad;
    }

    public set edad(edad) {
        this._edad = edad;
    }

    public get dni() {
        return this._dni;
    }

    public set dni(dni){
        this._dni = dni;
    }

    public get cumpleaños() {
        return this._cumpleaños;
    }

    public set cumpleaños(cumpleaños){
        this._cumpleaños = cumpleaños;
    }

    public get colorFavorito() {
        return this._colorFavorito;
    }

    public set colorFavorito(colorFavorito) {
        this._colorFavorito = colorFavorito;
    }

    public get sexo() {
        return this._sexo;
    }

    public set sexo(sexo) {
        this._sexo = sexo;
    }

    public get direcciones() {
        return this._direcciones;
    }

    public set direcciones(direcciones) {
        this._direcciones = direcciones;
    }

    public get mails() {
        return this._mails;
    }

    public set mails(mails) {
        this._mails = mails;
    }

    public get telefonos() {
       return this._telefonos;
    }

    public set telefonos(telefonos) {
        this._telefonos = telefonos;
    }

    public get notas() {
        return this._notas;
    }

    public set notas(notas) {
        this._notas = notas;
    }

    //Metodos


}
