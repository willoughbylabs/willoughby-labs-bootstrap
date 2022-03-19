import { LitElement, html } from "./lit-core.js";

class HomePage extends LitElement {
    render() {
        return html`
        <h1>Willoughby Labs</h1>
        <h3>Make fetch happen</h3>
        `;
    }
    createRenderRoot() {
        return this;
    }
}


customElements.define('home-page', HomePage);
