const body = document.querySelector('body');
const brandLink = document.getElementById('brand-link');
const mainLinks = document.getElementById('main-links');
const pageContent = document.getElementById('page-content');

brandLink.addEventListener("click", (event) => {
    if (body.classList.contains("bkg-western")) {
        body.classList.toggle("bkg-western");
        body.classList.toggle("bkg-tribune");
    }
    content = "<home-page></home-page>";
    pageContent.innerHTML = content;
})

mainLinks.addEventListener("click", (event) => {
    if (body.classList.contains("bkg-tribune")) {
        body.classList.toggle("bkg-tribune");
        body.classList.toggle("bkg-western");
    }
    let selectedLink = event.target.id;
    displayPageContent(selectedLink);
})

function displayPageContent(selectedLink) {
    let content;

    switch (selectedLink) {
        case "projects-link":
            content = "<projects-page></projects-page>";
            break;
        case "articles-link":
            content = "<articles-page></articles-page>";
            break;
        case "about-link":
            content = "<about-page></about-page>";
            break;
        default:
            return;
    }
    pageContent.innerHTML = content;
}
