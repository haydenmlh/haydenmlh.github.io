document.getElementById("body").onscroll = function myFunction() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var targets = document.getElementsByClassName("image-scroll");
    var xvalue = -0.04 * scrolltotop;
    var factor = 0.2;
    var yvalue = scrolltotop * factor;
    for (var i = 0; i < targets.length; i++) {
        targets[i].style.backgroundPosition = xvalue + "px " + yvalue + "px";
    }
    
}