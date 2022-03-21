import { LitElement, html } from "./lit-core.js";

class HomePage extends LitElement {
    render() {
        return html`
        <div class="container">
            <header id="header">
                <div class="p-2 text-white bg-dark rounded-3 opacity-75">
                    <h1 class="text-center" id="header-title"><strong>Make fetch happen</strong></h1>
                </div>
            </header>
        </div>
        `;
    }

    createRenderRoot() {
        return this;
    }
}


customElements.define('home-page', HomePage);
