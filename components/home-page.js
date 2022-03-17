import { LitElement, html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

class HomePage extends LitElement {
    render() {
        return html`
        <h1>Willoughby Labs</h1>
        `;
    }
}

customElements.define('home-page', HomePage);
