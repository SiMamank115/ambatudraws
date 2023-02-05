const navLinks = $(".nav-link");
$(document).ready(() => {
    navLinks.on("click", (e) => {
        navLinks.removeClass("nav-active");
        $(e.target).addClass("nav-active");
    });
});
