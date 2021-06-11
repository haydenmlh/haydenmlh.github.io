document.getElementById("body").onscroll = resizeSlideshow;
window.onresize = resizeSlideshow;

function resizeSlideshow() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("slideshow");
    var width = target.offsetWidth;
    var height = target.offsetHeight;
    var xvalue = - (1368 - width) /2 - 0.04 * scrolltotop;
    var factor = 0.04;
    var yvalue = - (912 - height) / 2 - scrolltotop * factor;
    
    target.style.backgroundPosition = xvalue + "px " + yvalue + "px";
    
}

function preLoader() {
    document.getElementById("preload-01").style.background = 'url("/images/me_1.jpg") no-repeat -9999px -9999px';
    document.getElementById("preload-02").style.background = 'url("/images/me_2.jpg") no-repeat -9999px -9999px';
    document.getElementById("preload-03").style.background = 'url("/images/me_3.jpg") no-repeat -9999px -9999px';
}

resizeSlideshow();
preLoader();