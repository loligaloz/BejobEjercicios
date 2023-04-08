class mails {
    //propiedades

    private _tipo: string;
    private _direccion: string;

    //constructor
    constructor (tipo:string, direccion:string) {
        this._tipo = tipo;
        this._direccion = direccion;
    }

    //acesso
    public get tipo() {
        return this._tipo;
    }
    
    public set tipo(tipo) {
        this._tipo = tipo;
    }
    
    public get direccion() {
        return this._direccion;
    }

    public set direccion(direccion) {
        this._direccion = direccion;
    }

    //metodos
}