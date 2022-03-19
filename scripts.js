const mainLinks = document.getElementById('main-links');
const brandLinks = document.getElementById('brand-links');
const pageContent = document.getElementById('page-content');

brandLinks.addEventListener("click", (event) => {
    content = "<home-page></home-page>";
    pageContent.innerHTML = content;
})

mainLinks.addEventListener("click", (event) => {
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
