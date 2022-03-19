import { LitElement, html } from "./lit-core.js";

class HomePage extends LitElement {
    render() {
        return html`
        <h1>Willoughby Labs</h1>
        <h2>Make fetch happen</h2>
        `;
    }
    createRenderRoot() {
        return this;
    }
}


customElements.define('home-page', HomePage);
