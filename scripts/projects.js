function changeWrapperHW() {
    var tiles=document.getElementsByClassName('tile');
    var tile_titles = document.getElementsByClassName('tile-title');
    var tile_langs = document.getElementsByClassName('tile-lang');
    var tile_descs = document.getElementsByClassName('tile-description');
    
    for (let i = 0; i < tiles.length; i++) {
        var title_height = tile_titles[i] ? tile_titles[i].offsetHeight : 0;
        var desc_height = tile_descs[i] ? tile_descs[i].offsetHeight : 0;
        var lang_height = tile_langs[i] ? tile_langs[i].offsetHeight : 0;
        var target = tiles[i].offsetWidth + title_height + desc_height + lang_height - 20;
        tiles[i].style.height = target + "px";
    }    
    
    var wrappers=document.getElementsByClassName('img-wrapper');
    for (let i = 0; i < wrappers.length; i++) {
        var target = wrappers[i].offsetWidth;
        wrappers[i].style.height = target + "px";
    }
}

changeWrapperHW();
window.addEventListener("resize", changeWrapperHW);