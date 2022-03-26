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
        private _data: Date, 
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

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
    get data(): Date {
        // passando nova referência para a mesma data (programação defensiva)
        const data = new Date(this._data.getTime()); 
        return data;
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    // static: torna o método de classe, não precisa de instância para acessar o método
    // Negociacao.criaDe(...)
    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
         // expressão reguar: pega todos os caracteres "-"
         const exp = /-/g; 
         // Date precisa de data no formato yyyy,mm,dd para fazer new Date
         // como inputData.value traz a data no formato yyyy-mm-dd temos
         // que substituir por "," através do replace
         const date = new Date(dataString.replace(exp, ','));
         const quantidade = parseInt(quantidadeString);
         const valor = parseInt(valorString);
         return new Negociacao(date, quantidade, valor);
 
    }
}