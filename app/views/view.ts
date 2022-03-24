/* GENERICS NA CLASSE PAI E FILHAS:
 1. quando digo View<T> significa que o tipo é "T", porém nas classes filhas
    no momento que extendem a pai, podem definir o que querem receber nesse parâmetro.
    Por exemplo: 
      export class NegociacoesView extends View<Negociacoes> ou 
      export class MensagemView extends View<string>
*/

export abstract class View<T> {

    // classes filhas acessam uma propriedade protected (public somente a classe pai)
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;

    }

    // método template será visível somente internamente a classe não sendo 
    // possível chamar esse método na negociacao-controler por exemplo... 
    // só aparecerá o método update disponível
    protected abstract template(model: T): string;

}    