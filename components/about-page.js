import { LitElement, html } from "./lit-core.js";

class AboutPage extends LitElement {
    render() {
        return html`
                <h2>About</h2>
                <section>
                    <div class="container-fluid">
                        <p>
                            My name is Andrew but my friends call me Willoughby. Former Air Force brat, now a <a
                                href="https://en.wikipedia.org/wiki/Chicago-style_hot_dog" target="_blank"
                                rel="noopener noreferrer">dragged-through-the-garden</a>
                            Chicagoan. You'll find me dabbling in web dev, politics,
                            cycling, attempting to skateboard, astronomy, video games, architecture, history, photography, instruments &
                            vinyl, bird watching...I'm
                            only bored when I choose to be. I'm passionate about civic tech and tools to help folks digest data and
                            make informed decisions. Let's <a href="https://meangirls.fandom.com/wiki/Fetch" target="_blank"
                                rel="noopener noreferrer">channel your inner Gretchen</a> and make fetch happen.
                            <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe
                                    src="https://giphy.com/embed/l2YWgOm7cak7P4Cly" width="100%" height="100%" style="position:absolute"
                                    frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                            </div>
                        </p>
                    </div>
                </section>
        `;
    }
}

customElements.define('about-page', AboutPage);
