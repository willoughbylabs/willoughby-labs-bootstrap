const navbar = document.getElementById('navbar');
const pageContent = document.getElementById('page-content');


navbar.addEventListener("click", (event) => {
    let selectedLink = event.target.id;
    console.log(selectedLink);
    displayPageContent(selectedLink);
})

function displayPageContent(selectedLink) {
    let content;

    switch (selectedLink) {
        case "brand-link":
            content = "<home-page></home-page>";
            break;
        case "title-link":
            content = "<home-page></home-page>";
            break;
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
