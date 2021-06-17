document.getElementById("body").onscroll = resizeSlideshow;
window.onresize = resizeSlideshow;

function resizeSlideshow() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("slideshow");
   
    var elt_width = target.offsetWidth;
    var elt_height = target.offsetHeight;
    var xvalue = - (1368 - elt_width) /2 - 0.04 * scrolltotop;
    var factor = 0.04;
    var yvalue = - (912 - elt_height) / 2 - scrolltotop * factor;
    
    target.style.backgroundPosition = xvalue + "px " + yvalue + "px";
}


resizeSlideshow();