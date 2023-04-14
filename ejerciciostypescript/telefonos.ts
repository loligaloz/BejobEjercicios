export class telefonos {
    //propiedades

    private _tipo: 'fijo' | 'movil';
    private _numero: number;

    //constructor
    constructor(tipo:'fijo' | 'movil', numero:number) {
        this._tipo = tipo;
        this._numero = numero;
    }

    
    private get tipo():'fijo' | 'movil'{
        return this._tipo;
    }
    
    private set tipo(tipo:'fijo' | 'movil') {
        this._tipo = tipo;
    }
    
    private get numero():number {
        return this._numero;
    }
    
    private set numero(numero:number) {
        this._numero = numero;
    }

}


