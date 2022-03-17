import { LitElement, html } from "./lit-core.js";

class HomePage extends LitElement {
    render() {
        return html`
        <h1>Willoughby Labs</h1>
        <p>Make fetch happen.</p>
        `;
    }
}

customElements.define('home-page', HomePage);
