class telefonos {
    //propiedades

    private _tipo: 'fijo' | 'movil';
    private _numero: number;

    //constructor
    constructor(tipo:'fijo' | 'movil', numero:number) {
        this._tipo = tipo;
        this._numero = numero;
    }

    //acceso
    private get tipo() {
        return this._tipo;
    }
    
    private set tipo(tipo) {
        this._tipo = tipo;
    }
    
    private get numero() {
        return this._numero;
    }
    
    private set numero(numero) {
        this._numero = numero;
    }

    //Metodos
}


