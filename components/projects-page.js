import { LitElement, html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

class ProjectsPage extends LitElement {
    // static properties = {
    //     name: {}
    // };

    // constructor() {
    //     super();
    //     this.name = 'PageTitle';
    // }

    render() {
        return html`
        <h2>Projects</h2>
        <div class="container-fluid">
            <p>Brought to you by the teacher in everyone. I hope you'll discover something <span
                    class="strikethrough">interesting</span> fetch.</p>
        </div>
        `;
    }
}

customElements.define('projects-page', ProjectsPage);
