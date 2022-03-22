export class Negociacao {
    // # atributo privado
    /*  private _data: Date;
        private _quantidade: number;
        private _valor: number;
     */
    /*
    Recurso do typescript que entende que se for passado por parâmetro por debaixo
    dos panos já é realizado a conversão no javascript. Recurso que reduz o código!
    
    constructor(
        private _data: Date,
        private _quantidade: number,
        private _valor: number
    ) {}

    */
    // a mesma definição que a de cima, eliminamos os getters!
    constructor(
    // possui underline somente para o getter usar no nome "data" visível,
    // pois não pode ter o mesmo nome do atributo
    _data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    /*  -> Não será mais necessário fazer assim, podemos colocar
           a diretiva readonly na propriedade evitando modificá-las
           exatamente como se fossem privadas!!!
         
     get data(): Date {
         return this._data;
     }
     get quantidade(): number {
         return this._quantidade;
     }
     get valor(): number {
         return this._valor;
     } */
    // estratégia para tornar a data imutável através de métodos da própria data
    // criamos outra e quando alguém invocar um médoto dela, estará alterando sua
    // cópia e não a data propriamente dita atribuida no construtor!
    get data() {
        // passando nova referência para a mesma data (programação defensiva)
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
