import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // private negociacoes: Array<Negociacao> = [];
    // Maneira facilitada do typescript substitui a linha de cima!
    private negociacoes: Negociacao[];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    // ReadonlyArray não permite que a lista seja alterada
    // não conseguirão fazer um push por exemplo pois não vai aceitar
    // o comando e nenhum método que modifique será invocado!

    //lista(): ReadonlyArray<Negociacao> {
    // Maneira facilitada do typescript substitui a de cima!
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}