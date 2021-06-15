document.getElementById("body").onscroll = resizeSlideshow;
window.onresize = resizeSlideshow;

function resizeSlideshow() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementsByClassName("image-scroll")[0];
    var width = target.offsetWidth;
    var height = target.offsetHeight;
    var xvalue = - (1368 - width) /2 - 0.04 * scrolltotop;
    var factor = 0.04;
    var yvalue = - (912 - height) / 2 - scrolltotop * factor;
    
    target.style.backgroundPosition = xvalue + "px " + yvalue + "px";
}

resizeSlideshow();
