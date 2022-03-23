import { LitElement, html } from "./lit-core.js";

class ProjectsPage extends LitElement {

    cardComponent(cardData) {
        return html`
        <div class="card mb-3 mx-2">
            <h5 class="card-title mt-4 mb-3">
                <a href="${cardData.siteHref}" target="_blank" rel="noopener noreferrer">${cardData.title}</a>    
            </h5>
            ${cardData.gitHref ? 
                html`<a href=${cardData.gitHref} class="git-icon pt-2 pb-3"><i class="bi bi-github"></i></a>` : html``  
            }
            <img src="${cardData.imgSrc}" class="card-img-top" alt="${cardData.imgAlt}">
            <div class="card-body">
                <p class="card-text">
                    ${cardData.cardText}
                </p>      
            </div>
            <div class="card-footer">
                ${this.cardTags(cardData.tags)}  
            </div>
        </div>
        `;
    }

    cardTags(cardTagsArr) {
        return html`
            <ul class="d-flex flex-wrap justify-content-center list-inline">
                ${cardTagsArr.map((tag) => 
                    html`
                        <li class="list-inline-item">
                            <span class="badge bg-warning text-dark">${tag}</span>
                        </li>
                    `
                )}
            </ul>
        `;
    }

    render() {
        return html`
            <div class="page-body text-center">
                <h1 class="page-title">PROJECTS</h1>
                <p>Brought to you by the teacher in everyone. I hope you'll discover something fetch.</p>
                <section class="d-flex flex-wrap justify-content-center page-text">
                    <!-- CScrub -->
                    ${this.cardComponent(
                        {
                            title: "CScrub",
                            siteHref: "https://github.com/willoughbylabs/cscrub",
                            imgSrc: "../img/cscrub.png",
                            imgAlt: "Views of a computer program showing text queries to retrieve alderpersons, meetings, legislation, and votes from a database.",
                            gitHref: "https://github.com/willoughbylabs/cscrub",
                            cardText: "A bot to extract meetings, council members, legislation, and votes from the Chicago City Clerk's site.",
                            tags: ["Feedparser", "PostgreSQL", "Selenium", "SQLAlchemy", "Python"]
                        }
                    )}
                    <!-- CScrub API -->
                    ${this.cardComponent(
                        {
                            title: "CScrub API",
                            siteHref: "https://github.com/willoughbylabs/cscrub-api",
                            imgSrc: "../img/cscrub-api.png",
                            imgAlt: "An example of returned JSON from a query requesting a city council member and their votes on legislation.",
                            gitHref: "https://github.com/willoughbylabs/tribute_Milton-Lee-Olive",
                            cardText: "A JSON API that shares council members, legislation, and votes from Chicago City Council meetings.",
                            tags: ["API", "Express", "JSON", "Node.js"]
                        }
                    )}
                    <!-- Milton Lee Olive III -->
                    ${this.cardComponent(
                        {
                            title: "Milton Lee Olive III Tribute",
                            siteHref: "https://willoughbylabs.github.io/tribute_Milton-Lee-Olive/",
                            imgSrc: "../img/milton.png",
                            imgAlt: "A photo of Milton Lee Olive III in his military uniform.",
                            gitHref: "https://github.com/willoughbylabs/cscrub-api",
                            cardText: "A tribute to the Black, Medal of Honor veteran from Chicago who sacrificed his life for others.",
                            tags: ["Bootstrap 3", "CSS", "GitHub Pages", "HTML", "JavaScript"]
                        }
                    )}
                    <!-- myChi -->
                    ${this.cardComponent(
                        {
                            title: "myChi",
                            siteHref: "http://mychi.willoughbylabs.com/",
                            imgSrc: "../img/mychi.png",
                            imgAlt: "A dashboard with cards showing train-arrival predictions from the Chicago Transit Authority.",
                            gitHref: "https://github.com/willoughbylabs/mychi",
                            cardText: "A template for a dashboard to display Chicago open data in an at-a-glance, concise format. Built with the Train Tracker API.",
                            tags: ["Bootstrap 5", "CSS", "Flask-SQLAlchemy", "Heroku", "HTML", "Jasmine", "JSON", "JavaScript", "Python"]
                        }
                    )}
                    <!-- Photography -->
                    ${this.cardComponent(
                        {
                            title: "Photography",
                            siteHref: "https://unsplash.com/@willoughbylabs",
                            imgSrc: "../img/tribune-thumb.jpg",
                            imgAlt: "Three people looking at the gothic architecture of Chicago's Tribune Tower from a large balcony.",
                            cardText: "Snapshots from here and there.",
                            tags: ["Pixel 6 Pro", "Pixel 3a XL", "Samsung Galaxy S II"]
                        }
                    )}
                    <!-- Willoughby Labs -->
                    ${this.cardComponent(
                        {
                            title: "Willoughby Labs",
                            siteHref: "http://www.willoughbylabs.com",
                            imgSrc: "../img/wlabs.png",
                            imgAlt: "Screenshot of a website with a full-cover background of the Chicago syline and a dark bottom navigation bar.",
                            gitHref: "https://github.com/willoughbylabs/willoughby-labs",
                            cardText: "Personal site and playground for learning.",
                            tags: ["Bootstrap 5", "CSS", "HTML", "JavaScript", "LitElement"]
                        }
                    )}
                </section>
            </div>
        `
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define('projects-page', ProjectsPage);
