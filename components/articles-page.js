import { LitElement, html } from "./lit-core.js";

class ArticlesPage extends LitElement {
    render() {
        return html`
        <div class="container-fluid">
            <h2>Article Generator</h2>
            <section>
                <div class="page-intro">
                    <p>Sometimes I'm in the mood to write (
                        <a href="https://blog.willoughbylabs.com/" target="_blank" rel="noopener noreferrer">blog</a> |
                        <a href="https://twitter.com/willowbeehive" target="_blank" rel="noopener noreferrer">Twitter</a>).
                        Shoutout to my favorite writing tool,
                        <a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer">Notion</a>; it's pretty
                        fetch.
                    </p>
                </div>
            </section>
            <section>
                <div style="width:100%;height:0;padding-bottom:56%;position:relative;">
                    <iframe src="https://giphy.com/embed/3otPoUjeyRisIDxPhK" width="100%" height="100%"
                        style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div> <!-- end iframe -->
            </section>
        </div> <!-- end container-fluid -->
        `;
    }
    createRenderRoot() {
        return this;
    }
}

customElements.define('articles-page', ArticlesPage);
