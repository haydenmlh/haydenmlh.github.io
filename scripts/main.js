/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("buttons");
    if (x.className === "") {
      x.className += "responsive";
    } else {
      x.className = "";
    }
}

document.getElementById("body").onscroll = function myFunction() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("slideshow");
    var width = target.offsetWidth;
    var xvalue = - 0.04 * scrolltotop;
    var factor = 0.2;
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + "px " + yvalue + "px";
}

