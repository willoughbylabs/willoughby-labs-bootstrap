import { LitElement, html } from "./lit-core.js";

class ProjectsPage extends LitElement {

    cardComponent(cardData) {
        return html`
        <div class="card mb-3 mx-2">
            <h5 class="card-title my-3">
                <a href="${cardData.siteLink}" target="_blank" rel="noopener noreferrer">${cardData.title}</a>    
            </h5>
            <img src="${cardData.imgSrc}" class="card-img-top" alt="${cardData.imgAlt}">
            <div class="card-body">
                <p class="card-text">
                    ${cardData.cardText}
                </p>
            </div>
        </div>
        `
    }

    cardTags(tagName) {
        return html`
            <li class="list-inline-item">
                <span class="badge bg-warning text-dark">${tagName}</span>
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
                ${this.cardComponent({ 
                    title: "CSscrub",
                    siteLink: "https://github.com/willoughbylabs/cscrub",
                    imgSrc: "../img/cscrub.png" ,
                    imgAlt: "Views of Terminal windows showing SQL queries to retrieve alderpersons, meetings, legislation, and votes from a database.",
                    cardText: "A bot to extract meetings, council members, legislation, and votes from the Chicago City Clerk's site."
                    })}
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
                            ${this.cardTags("Feedparser")}
                            ${this.cardTags("PostgreSQL")}
                            ${this.cardTags("Selenium")}
                            ${this.cardTags("SQLAlchemy")}
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
                            ${this.cardTags("API")}
                            ${this.cardTags("Express")}
                            ${this.cardTags("JSON")}
                            ${this.cardTags("Node.js")}
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
                            ${this.cardTags("Bootstrap 3")}
                            ${this.cardTags("CSS")}
                            ${this.cardTags("GitHub Pages")}
                            ${this.cardTags("HTML")}
                            ${this.cardTags("JavaScript")}
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
                            ${this.cardTags("API")}
                            ${this.cardTags("Boostrap 5")}
                            ${this.cardTags("CSS")}
                            ${this.cardTags("Flask-SQLALchemy")}
                            ${this.cardTags("Heroku")}
                            ${this.cardTags("HTML")}
                            ${this.cardTags("Jasmine")}
                            ${this.cardTags("JSON")}
                            ${this.cardTags("JavaScript")}
                            ${this.cardTags("Python")}
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
                            ${this.cardTags("Pixel 6 Pro")}
                            ${this.cardTags("Pixel 3a XL")}
                            ${this.cardTags("Samsung Galaxy S II")}
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
                            ${this.cardTags("Bootstrap 5")}
                            ${this.cardTags("CSS")}
                            ${this.cardTags("HTML")}
                            ${this.cardTags("JavaScript")}
                            ${this.cardTags("LitElement")}
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
