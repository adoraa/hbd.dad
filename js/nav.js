document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");

    if (menuBtn && menu) {
        menuBtn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }

    // highlight active nav link
    const links = document.querySelectorAll("#menu a");
    const currentPage = window.location.pathname.split("/").pop();
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("btn-nav-active");
        } else {
            link.classList.add("btn-nav");
        }
    });
});