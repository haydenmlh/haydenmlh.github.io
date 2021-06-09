var i = 0;
var txt = 'Hey there, I\'m Hayden!Welcome to my website.';
var cur_h1 = document.getElementById("welcome-msg");

function typeWriter() {
    if (i < txt.length) {
        char_i = txt.charAt(i);
        cur_h1.innerHTML += char_i;
        i++;
        if (char_i == '!') {
            welc_2 = document.getElementById("welcome-msg-2");
            cur_h1.className = "noselect";
            welc_2.className = "current noselect";
            cur_h1 = welc_2;
        }
        setTimeout(typeWriter, Math.floor(Math.random() * 40) + 60);
    }
}

window.onload = typeWriter;