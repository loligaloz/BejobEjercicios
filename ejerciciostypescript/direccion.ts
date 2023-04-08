class direccion {
    //propiedades

    private _calle:string;
    private _numero:number;
    private _piso:number;
    private _letra:string;
    private _codigoPostal:number;
    private _poblacion:string;
    private _provincia:string;

    //constructor
    constructor (calle:string, numero:number, piso:number, letra:string, codigoPostal:number,poblacion:string, provincia:string) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }

    //accesos

    public get calle() {
        return this._calle;
    }

    public set calle(calle) {
        this._calle = calle;
    }

    public get numero() {
        return this._numero;
    }

    public set numero(numero) {
        this._numero = numero;
    }

    public get piso() {
        return this._piso;
    }

    public set piso(piso) {
        this._piso = piso;
    }

    public get letra () {
        return this._letra;
    }

    public set letra(letra) {
        this._letra = letra;
    }

    public get codigoPostal() {
        return this._codigoPostal;
    }

    public set codigoPostal(codigoPostal) {
        this._codigoPostal = codigoPostal;
    }

    public get poblacion() {
        return this._poblacion;
    }

    public set poblcion(poblacion) {
        this._poblacion = poblacion;
    }

    public get provincia() {
        return this._provincia;
    }

    public set provincia(provincia) {
        this._provincia = provincia;
    }

    //metodos
}