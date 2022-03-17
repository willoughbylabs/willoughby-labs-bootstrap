const navbar = document.getElementById('navbar');
const pageContent = document.getElementById('page-content');

navbar.addEventListener("click", (event) => {
    let selectedLink = event.target.id;
    displayPageContent(selectedLink);
})

function displayPageContent(selectedLink) {
    let content;

    switch (selectedLink) {
        case "home-link":
            content = "<home-page></home-page>";
            break;
        case "projects-link":
            content = "<projects-page></projects-page>";
            break;
        case "about-link":
            content = "<about-page></about-page>";
            break;
        default:
            return;
    }
    pageContent.innerHTML = content;
}
