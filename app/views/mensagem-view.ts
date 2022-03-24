import { View } from "./view.js";

export class MensagemView extends View<string> {

    // escondendo o método do implementador, não deverá invocar esse método
    protected template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }

}