function changeWrapperHW() {
    var tiles=document.getElementsByClassName('tile');
    for (i = 0; i < tiles.length; i++) {
        var target = tiles[i].offsetWidth + 60;
        tiles[i].style.height = target + "px";
    }    
    
    var wrappers=document.getElementsByClassName('img-wrapper');
    for (i = 0; i < wrappers.length; i++) {
        var target = wrappers[i].parentElement.offsetWidth - 22;
        wrappers[i].style.width = target + "px";
        wrappers[i].style.height = target + "px";
    }
    
    
}

window.onload = changeWrapperHW;
window.onresize = changeWrapperHW;