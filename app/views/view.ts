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
    private escapar = false;

    // escapar?: boolean -> typescript deixa opcional a passagem de parâmetro
    // o opcional "?" só pode ser no último parâmetro
    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM`);            
        }
         
         // caso não seja passado(opcional) ele será undefined, ou seja, falso
        if (escapar) { 
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template
                .replace(/<script>[\s\S]*?<\/script>/, '');                                        
        }
        this.elemento.innerHTML = template;

    }

    // método template será visível somente internamente a classe não sendo 
    // possível chamar esse método na negociacao-controler por exemplo... 
    // só aparecerá o método update disponível
    protected abstract template(model: T): string;

}    