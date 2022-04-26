const nav = document.getElementById("nav");

window.addEventListener("scroll", function() {
    scrollposition = window.scrollY;

    if (scrollposition >= 10) {
        nav.classList.add("nav-dark");
    } else if (scrollposition <= 10) {
        nav.classList.remove("nav-dark");
    }
});