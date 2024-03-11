document.getElementById("body").onscroll = resizeContentHeader;
window.onresize = resizeContentHeader;

// Resizes the content header image to give a parralax effect
// use content-header-img id to specify the image.


function resizeContentHeader() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("content-header-img");
    var target_bg_source = target.style.backgroundImage.replace(/url\(['"]?(.*)['"]?\)/gi, '$1');

    var image = new Image();
    image.src = target_bg_source;
    var img_width, img_height;

    image.onload = function () {
        img_width = image.width;
        img_height = image.height;
    };

    var elt_width = target.offsetWidth;
    var elt_height = target.offsetHeight;
    var xvalue = - (1368 - elt_width) /2 - 0.04 * scrolltotop;
    var factor = 0.04;
    var yvalue = - (912 - elt_height) / 2 - scrolltotop * factor;
    
    target.style.backgroundPosition = xvalue + "px " + yvalue + "px";
}


resizeContentHeader();