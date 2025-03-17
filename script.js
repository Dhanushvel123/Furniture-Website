function toggleNavbar() {
    var navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains("show")) {
        navbar.classList.remove("show");
    } else {
        navbar.classList.add("show");
    }
}
