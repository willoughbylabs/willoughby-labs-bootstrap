import { LitElement, html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

class PageTitle extends LitElement {
    static properties = {
        name: {}
    };

    constructor() {
        super();
        this.name = 'PageTitle';
    }

    render() {
        return html`
            <h1>Hello ${this.name}</h1>
        `;
    }
}

customElements.define('page-title', PageTitle);
