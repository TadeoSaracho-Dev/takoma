window.addEventListener("scroll", function() {
    const header = document.querySelector(".fixed-header");
    const navbar = document.querySelector(".fixed-navbar");

    if (window.scrollY > 0) {
        header.style.top = "-80px";
        navbar.style.top = "0";
    } else {
        header.style.top = "0";
        navbar.style.top = "80px";
    }
});