import { direccion } from './direccion';
import { mails } from './mail';
import { telefonos } from './telefonos';

export class Persona {
    //Propiedades
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumpleanos: Date;
    private _colorFavorito: string;
    private _sexo: string;
    private _direcciones: Array<direccion>;
    private _mails: Array<mails>;
    private _telefonos: Array<telefonos>;
    private _notas: string;
    
    //Constructor
    constructor (nombre:string, apellidos:string, edad:number, dni:string, cumpleaños:Date, colorFavorito:string, sexo:string, direcciones:Array<direccion>, mails:Array<mails>, telefonos:Array<telefonos>, notas:string){
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleaños;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }

    public get nombre():string {
        return this._nombre;
    }

    public set nombre(nombre:string){
        this._nombre = nombre;
    }

    public get apellidos():string {
        return this._apellidos;
    }

    public set apellidos(apellidos:string) {
        this._apellidos = apellidos;
    }

    public get edad():number {
        return this._edad;
    }

    public set edad(edad:number) {
        this._edad = edad;
    }

    public get dni():string {
        return this._dni;
    }

    public set dni(dni:string){
        this._dni = dni;
    }

    public get cumpleanos():Date {
        return this._cumpleanos;
    }

    public set cumpleanos(cumpleanos:Date){
        this._cumpleanos = cumpleanos;
    }

    public get colorFavorito():string {
        return this._colorFavorito;
    }

    public set colorFavorito(colorFavorito:string) {
        this._colorFavorito = colorFavorito;
    }

    public get sexo():string {
        return this._sexo;
    }

    public set sexo(sexo:string) {
        this._sexo = sexo;
    }

    public get direcciones():Array<direccion> {
        return this._direcciones;
    }

    public set direcciones(direcciones:Array<direccion>) {
        this._direcciones = direcciones;
    }

    public get mails():Array<mails> {
        return this._mails;
    }

    public set mails(mails:Array<mails>) {
        this._mails = mails;
    }

    public get telefonos():Array<telefonos> {
       return this._telefonos;
    }

    public set telefonos(telefonos:Array<telefonos>) {
        this._telefonos = telefonos;
    }

    public get notas():string {
        return this._notas;
    }

    public set notas(notas:string) {
        this._notas = notas;
    }


   // nuevoTelefono()
}
