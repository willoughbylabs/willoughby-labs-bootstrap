import { LitElement, html } from "./lit-core.js";

class HomePage extends LitElement {
    render() {
        return html`
        <div class="h-100 p-5 text-white bg-dark rounded-3">
            <h1>Make Fetch Happen</h1>
        </div>
        `;
    }
    createRenderRoot() {
        return this;
    }
}


customElements.define('home-page', HomePage);
