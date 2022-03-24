import { View } from "./view.js";
export class MensagemView extends View {
    // escondendo o método do implementador, não deverá invocar esse método
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
