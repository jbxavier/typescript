export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // Maneira facilitada do typescript substitui a linha de cima!
    //private negociacoes: Negociacao[]; // aqui não funcionou!!! tive que voltar a linha acima...
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // ReadonlyArray não permite que a lista seja alterada
    // não conseguirão fazer um push por exemplo pois não vai aceitar
    // o comando e nenhum método que modifique será invocado!
    //lista(): ReadonlyArray<Negociacao> {
    // Maneira facilitada do typescript substitui a de cima!
    lista() {
        return this.negociacoes;
    }
}
