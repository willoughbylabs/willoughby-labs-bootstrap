import { LitElement, html } from "./lit-core.js";

class HomePage extends LitElement {
    render() {
        return html`
        <h1>Make Fetch Happen</h1>
        `;
    }
    createRenderRoot() {
        return this;
    }
}


customElements.define('home-page', HomePage);
