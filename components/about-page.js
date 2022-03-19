import { LitElement, html } from "./lit-core.js";

class AboutPage extends LitElement {
    render() {
        return html`
                <h2>About</h2>
                <div class="container-fluid">
                    <p>
                        My name is Andrew but my friends call me Willoughby. Former Air Force brat, now a
                        dragged-through-the-garden Chicagoan. You'll find me dabbling in web dev, architecture, politics,
                        skateboarding, astronomy, video games, music, history, photography, vinyl, cycling, bird watching...I'm
                        only bored when I choose to be. I'm passionate about civic tech and tools to help folks digest data and
                        make informed decisions. Let's make fetch happen.
                    </p>
                </div>
        `;
    }
}

customElements.define('about-page', AboutPage);
