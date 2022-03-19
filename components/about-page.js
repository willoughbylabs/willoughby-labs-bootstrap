import { LitElement, html } from "./lit-core.js";

class AboutPage extends LitElement {
    render() {
        return html`
                <h2>About</h2>
                <div class="container-fluid">
                    <p>
                        My name is Andrew but my friends call me Willoughby. Former Air Force brat, now a
                        dragged-through-the-garden Chicagoan. You'll find me dabbling in web dev, politics,
                        cycling, attempting to skateboard, astronomy, video games, architecture, history, photography, instruments &
                        vinyl, bird watching...I'm
                        only bored when I choose to be. I'm passionate about civic tech and tools to help folks digest data and
                        make informed decisions. Channel your inner Gretchen, and let's make fetch happen.
                        <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe
                                src="https://giphy.com/embed/l2YWgOm7cak7P4Cly" width="100%" height="100%" style="position:absolute"
                                frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                        </div>
                    </p>
                </div>
        `;
    }
}

customElements.define('about-page', AboutPage);
