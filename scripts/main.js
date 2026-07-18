window.addEventListener("scroll", resizeSlideshow, { passive: true });
window.addEventListener("resize", resizeSlideshow);

function resizeSlideshow() {
    var target = document.getElementById("slideshow");
    if (!target) {
        return;
    }

    var scrolltotop = document.scrollingElement ? document.scrollingElement.scrollTop : window.scrollY;

    var elt_width = target.offsetWidth;
    var elt_height = target.offsetHeight;
    var xvalue = -(1368 - elt_width) / 2 - 0.04 * scrolltotop;
    var factor = 0.04;
    var yvalue = -(912 - elt_height) / 2 - scrolltotop * factor;

    target.style.backgroundPosition = xvalue + "px " + yvalue + "px";
}


resizeSlideshow();