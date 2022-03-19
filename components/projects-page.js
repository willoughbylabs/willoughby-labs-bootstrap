import { LitElement, html } from "./lit-core.js";

class ProjectsPage extends LitElement {
    render() {
        return html`
            <h2>Projects</h2>
            <p>Brought to you by the teacher in everyone. I hope you'll discover something fetch.</p>
            
            <!-- TODO: make cards into components  -->
            <!-- CScrub -->
            <div class="card" style="width: 18rem;">
                <img src="../img/cscrub.png" class="card-img-top"
                    alt="Views of Terminal windows showing SQL queries to retrieve alderpersons, meetings, legislation, and votes from a database.">
                <div class="card-body">
                    <h5 class="card-title">
                        <a href="https://github.com/willoughbylabs/cscrub" target="_blank" rel="noopener noreferrer">CScrub
                            <i class="bi bi-github"></i>
                        </a>
                    </h5>
                    <p class="card-text">A bot to extract meetings, council members, legislation, and votes from the
                        Chicago City Clerk's site.</p>
                    <span class="badge bg-warning text-dark">Feedparser</span>
                    <span class="badge bg-warning text-dark">PostregreSQL</span>
                    <span class="badge bg-warning text-dark">Python</span>
                    <span class="badge bg-warning text-dark">Selenium</span>
                    <span class="badge bg-warning text-dark">SQLAlchemy</span>
                </div>
            </div>
            
            <!-- CScrub API -->
            <div class="card" style="width: 18rem;">
                <img src="../img/cscrub-api.png" class="card-img-top"
                    alt="An example of returned JSON from a query requesting a city council member and their votes on legislation.">
                <div class="card-body">
                    <h5 class="card-title">
                        <a href="https://github.com/willoughbylabs/cscrub-api" target="_blank" rel="noopener noreferrer">CScrub API
                            <i class="bi bi-github"></i>
                        </a>
                    </h5>
            
                    <p class="card-text">A JSON API that shares council members, legislation, and votes from Chicago City Council
                        meetings.</p>
                    <span class="badge bg-warning text-dark">Express</span>
                    <span class="badge bg-warning text-dark">JSON</span>
                    <span class="badge bg-warning text-dark">Node.js</span>
                </div>
            </div>
            
            <!-- Milton Olive III -->
            <div class="card" style="width: 18rem;">
                <img src="../img/milton.png" class="card-img-top" alt="A photo of Milton Lee Olive III in his military uniform.">
                <div class="card-body">
                    <h5 class="card-title">
                        <a href="https://github.com/willoughbylabs/tribute_Milton-Lee-Olive" target="_blank"
                            rel="noopener noreferrer">Milton Lee Olive III Tribute
                        </a>
                    </h5>
                    <a href="https://github.com/willoughbylabs/tribute_Milton-Lee-Olive" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-github"></i>
                    </a>
            
                    <p class="card-text">A tribute to the Black, Medal of Honor veteran from Chicago who sacrificed his life for
                        others.</p>
                    <span class="badge bg-warning text-dark">Bootstrap 3</span>
                    <span class="badge bg-warning text-dark">CSS</span>
                    <span class="badge bg-warning text-dark">GitHub Pages</span>
                    <span class="badge bg-warning text-dark">HTML</span>
                    <span class="badge bg-warning text-dark">JavaScript</span>
                </div>
            </div>
            
            <!-- myChi -->
            <div class="card" style="width: 18rem;">
                <img src="../img/mychi.png" class="card-img-top"
                    alt="A dashboard with cards showing predictions for train arrivals from the Chicago Transit Authority.">
                <div class="card-body">
                    <h5 class="card-title">
                        <a href="http://mychi.willoughbylabs.com/" target="_blank" rel="noopener noreferrer">myChi
                        </a>
                    </h5>
                    <a href="https://github.com/willoughbylabs/mychi" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-github"></i>
                    </a>
                    <p class="card-text">A template for a dashboard to display Chicago open data in an at-a-glance, concise
                        format. Built with the Train Tracker API.</p>
                    <span class="badge bg-warning text-dark">Bootstrap 5</span>
                    <span class="badge bg-warning text-dark">CSS</span>
                    <span class="badge bg-warning text-dark">Flask-SQLALchemy</span>
                    <span class="badge bg-warning text-dark">Heroku</span>
                    <span class="badge bg-warning text-dark">HTML</span>
                    <span class="badge bg-warning text-dark">Jasmine</span>
                    <span class="badge bg-warning text-dark">JavaScript</span>
                    <span class="badge bg-warning text-dark">Python</span>
                </div>
            </div>
            
            <!-- Photography -->
            <div class="card" style="width: 18rem;">
                <img src="../img/tribune-thumb.jpg" class="card-img-top"
                    alt="Three people looking at the gothic architecture of Chicago's Tribune Tower from a large balcony.">
                <div class="card-body">
                    <h5 class="card-title">
                        <a href="https://unsplash.com/@willoughbylabs" target="_blank" rel="noopener noreferrer">Photography
                        </a>
                    </h5>
                    <p class="card-text">Snapshots from here and there.</p>
                    <span class="badge bg-warning text-dark">Pixel 6 Pro</span>
                    <span class="badge bg-warning text-dark">Pixel 3a XL</span>
                    <span class="badge bg-warning text-dark">Samsung Galaxy S II</span>
                </div>
            </div>
            
            <!-- Willoughby Labs -->
            <div class="card" style="width: 18rem;">
                <img src="../img/wlabs.png" class="card-img-top"
                    alt="View of Chicago's Tribune Tower and southern skyline, as seen from the balcony of an apartment building's common-area balcony.">
                <div class="card-body">
                    <h5 class="card-title">
                        <a href="http://www.willoughbylabs.com" target="_blank" rel="noopener noreferrer">Willoughby Labs
                        </a>
                    </h5>
                    <a href="https://github.com/willoughbylabs/willoughby-labs" target="_blank" rel="noopener noreferrer"><i
                            class="bi bi-github"></i></a>
                    <p class="card-text">Personal site and playground for learning.</p>
                    <span class="badge bg-warning text-dark">Bootstrap 5</span>
                    <span class="badge bg-warning text-dark">CSS</span>
                    <span class="badge bg-warning text-dark">HTML</span>
                    <span class="badge bg-warning text-dark">JavaScript</span>
                    <span class="badge bg-warning text-dark">LitElement</span>
                </div>
            </div>
        `;
    }
    createRenderRoot() {
        return this;
    }
}

customElements.define('projects-page', ProjectsPage);
