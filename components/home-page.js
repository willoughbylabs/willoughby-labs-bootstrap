import { LitElement, html } from "./lit-core.js";

class HomePage extends LitElement {
    render() {
        return html`
                <div class="page-body">
                    <header id="header">
                        <h1 class="text-center" id="header-title"><strong>Make fetch happen</strong></h1>
                    </header>
                </div>
        `;
    }

    createRenderRoot() {
        return this;
    }
}


customElements.define('home-page', HomePage);
