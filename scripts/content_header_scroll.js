window.addEventListener("scroll", resizeContentHeader, { passive: true });
window.addEventListener("resize", resizeContentHeader);

// Resizes the content header image to give a parralax effect
// use content-header-img id to specify the image.


function resizeContentHeader() {  
    var target = document.getElementById("content-header-img");
    if (!target) {
        return;
    }

    var scrolltotop = document.scrollingElement ? document.scrollingElement.scrollTop : window.scrollY;

    var elt_width = target.offsetWidth;
    var elt_height = target.offsetHeight;
    var xvalue = - (1368 - elt_width) /2 - 0.04 * scrolltotop;
    var factor = 0.04;
    var yvalue = - (912 - elt_height) / 2 - scrolltotop * factor;
    
    target.style.backgroundPosition = xvalue + "px " + yvalue + "px";
}


resizeContentHeader();