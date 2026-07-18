/* Toggle responsive navigation for the mobile menu button. */
function myFunction() {
    var nav = document.getElementById("buttons");
    var toggle = document.getElementById("mobile-menu-toggle");

    if (!nav) {
        return;
    }

    var isOpen = nav.classList.toggle("responsive");
    if (toggle) {
        toggle.setAttribute("aria-expanded", String(isOpen));
    }
}

var mobileToggle = document.getElementById("mobile-menu-toggle");
if (mobileToggle) {
    mobileToggle.addEventListener("click", myFunction);
}