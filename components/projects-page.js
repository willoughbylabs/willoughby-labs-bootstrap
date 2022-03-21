import { LitElement, html } from "./lit-core.js";

class ProjectsPage extends LitElement {

    cardTagsTempate(title) {
        return html`
            <li class="list-inline-item">
                <span class="badge bg-warning text-dark">${title}</span>
            </li>
        `
    }

    render() {
        return html`
        <div class="page-body text-center">
            <h2>Projects</h2>
            <p>Brought to you by the teacher in everyone. I hope you'll discover something fetch.</p>
        
            <!-- TODO: make cards into components  -->
            <!-- CScrub -->
            <section class="d-flex flex-wrap justify-content-center">
                <div class="card mb-3 mx-2">
                    <h5 class="card-title my-3">
                        <a href="https://github.com/willoughbylabs/cscrub" target="_blank" rel="noopener noreferrer">CScrub
                            <i class="bi bi-github"></i>
                        </a>
                    </h5>
                    <a href="https://github.com/willoughbylabs/cscrub" target="_blank" rel="noopener noreferrer">
                        <img src="../img/cscrub.png" class="card-img-top"
                            alt="Views of Terminal windows showing SQL queries to retrieve alderpersons, meetings, legislation, and votes from a database.">
                    </a>
                    <div class="card-body">
                        <p class="card-text">A bot to extract meetings, council members, legislation, and votes from the
                            Chicago City Clerk's site.</p>
                        <ul class="d-flex flex-wrap justify-content-center list-inline">
                            ${this.cardTagsTempate("Feedparser")}
                            ${this.cardTagsTempate("PostgreSQL")}
                            ${this.cardTagsTempate("Selenium")}
                            ${this.cardTagsTempate("SQLAlchemy")}
                        </ul>
                    </div>
                </div>
        
                <!-- CScrub API -->
                <div class="card mb-3 mx-2">
                    <h5 class="card-title my-3">
                        <a href="https://github.com/willoughbylabs/cscrub-api" target="_blank" rel="noopener noreferrer">CScrub
                            API
                            <i class="bi bi-github"></i>
                        </a>
                    </h5>
                    <a href="https://github.com/willoughbylabs/cscrub-api" target="_blank" rel="noopener noreferrer">
                        <img src="../img/cscrub-api.png" class="card-img-top"
                            alt="An example of returned JSON from a query requesting a city council member and their votes on legislation.">
                    </a>
                    <div class="card-body">
                        <p class="card-text">A JSON API that shares council members, legislation, and votes from Chicago
                            City
                            Council
                            meetings.</p>
                        <ul class="d-flex flex-wrap justify-content-center list-inline">
                            ${this.cardTagsTempate("API")}
                            ${this.cardTagsTempate("Express")}
                            ${this.cardTagsTempate("JSON")}
                            ${this.cardTagsTempate("Node.js")}
                        </ul>
                    </div>
                </div>
        
                <!-- Milton Olive III -->
                <div class="card mb-3 mx-2">
                    <h5 class="card-title my-3">
                        <a href="https://github.com/willoughbylabs/tribute_Milton-Lee-Olive" target="_blank"
                            rel="noopener noreferrer">Milton Lee Olive III Tribute
                        </a>
                    </h5>
                    <a href="https://github.com/willoughbylabs/tribute_Milton-Lee-Olive" target="_blank"
                        rel="noopener noreferrer">
                        <img src="../img/milton.png" class="card-img-top"
                            alt="A photo of Milton Lee Olive III in his military uniform.">
                    </a>
                    <a href="https://github.com/willoughbylabs/tribute_Milton-Lee-Olive" target="_blank"
                        rel="noopener noreferrer">
                        <i class="bi bi-github"></i>
                    </a>
                    <div class="card-body">
                        <p class="card-text">A tribute to the Black, Medal of Honor veteran from Chicago who sacrificed his
                            life
                            for
                            others.</p>
                        <ul class="d-flex flex-wrap justify-content-center list-inline">
                            ${this.cardTagsTempate("Bootstrap 3")}
                            ${this.cardTagsTempate("CSS")}
                            ${this.cardTagsTempate("GitHub Pages")}
                            ${this.cardTagsTempate("HTML")}
                            ${this.cardTagsTempate("JavaScript")}
                        </ul>
                    </div>
                </div>
        
                <!-- myChi -->
                <div class="card mb-3 mx-2">
                    <h5 class="card-title my-3">
                        <a href="http://mychi.willoughbylabs.com/" target="_blank" rel="noopener noreferrer">myChi
                        </a>
                    </h5>
                    <a href="http://mychi.willoughbylabs.com/" target="_blank" rel="noopener noreferrer">
                        <img src="../img/mychi.png" class="card-img-top"
                            alt="A dashboard with cards showing predictions for train arrivals from the Chicago Transit Authority.">
                    </a>
                    <a href="https://github.com/willoughbylabs/mychi" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-github"></i>
                    </a>
                    <div class="card-body">
                        <p class="card-text">A template for a dashboard to display Chicago open data in an at-a-glance,
                            concise
                            format. Built with the Train Tracker API.</p>
                        <ul class="d-flex flex-wrap justify-content-center list-inline">
                            ${this.cardTagsTempate("API")}
                            ${this.cardTagsTempate("Boostrap 5")}
                            ${this.cardTagsTempate("CSS")}
                            ${this.cardTagsTempate("Flask-SQLALchemy")}
                            ${this.cardTagsTempate("Heroku")}
                            ${this.cardTagsTempate("HTML")}
                            ${this.cardTagsTempate("Jasmine")}
                            ${this.cardTagsTempate("JSON")}
                            ${this.cardTagsTempate("JavaScript")}
                            ${this.cardTagsTempate("Python")}
                        </ul>
                    </div>
                </div>
        
                <!-- Photography -->
                <div class="card mb-3 mx-2">
                    <h5 class="card-title my-3">
                        <a href="https://unsplash.com/@willoughbylabs" target="_blank" rel="noopener noreferrer">Photography
                        </a>
                    </h5>
                    <a href="https://unsplash.com/@willoughbylabs" target="_blank" rel="noopener noreferrer">
                        <img src="../img/tribune-thumb.jpg" class="card-img-top"
                            alt="Three people looking at the gothic architecture of Chicago's Tribune Tower from a large balcony.">
                    </a>
                    <div class="card-body">
                        <p class="card-text">Snapshots from here and there.</p>
                        <ul class="d-flex flex-wrap justify-content-center list-inline">
                            ${this.cardTagsTempate("Pixel 6 Pro")}
                            ${this.cardTagsTempate("Pixel 3a XL")}
                            ${this.cardTagsTempate("Samsung Galaxy S II")}
                        </ul>
                    </div>
                </div>
        
                <!-- Willoughby Labs -->
                <div class="card mb-3 mx-2">
                    <h5 class="card-title my-3">
                        <a href="http://www.willoughbylabs.com" target="_blank" rel="noopener noreferrer">Willoughby Labs
                        </a>
                    </h5>
                    <a href="http://www.willoughbylabs.com" target="_blank" rel="noopener noreferrer">
                        <img src="../img/wlabs.png" class="card-img-top"
                            alt="View of Chicago's Tribune Tower and southern skyline, as seen from the balcony of an apartment building's common-area balcony.">
                    </a>
                    <a href="https://github.com/willoughbylabs/willoughby-labs" target="_blank" rel="noopener noreferrer"><i
                            class="bi bi-github"></i></a>
                    <div class="card-body">
                        <p class="card-text">Personal site and playground for learning.</p>
                        <ul class="d-flex flex-wrap justify-content-center list-inline">
                            ${this.cardTagsTempate("Bootstrap 5")}
                            ${this.cardTagsTempate("CSS")}
                            ${this.cardTagsTempate("HTML")}
                            ${this.cardTagsTempate("JavaScript")}
                            ${this.cardTagsTempate("LitElement")}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
        `;
    }
    createRenderRoot() {
        return this;
    }
}

customElements.define('projects-page', ProjectsPage);
