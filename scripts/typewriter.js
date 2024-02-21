/*
Typewriter program made specifically for Hayden's website
*/

var i_type_1 = 0;
var i_type_2 = 0;
var i_type_editor = 0;
var i_edit_txt = 0;
var char_i;
var base_delay = 40;
var random_delay = 40;

var cur1_txt = 'Have a very nice day!';

var cur2_txt = "Hayden Mak";
var cur2_edit_txt_1 = "";


var cur2_edit_txts = [cur2_edit_txt_1];
var cur2_edit_txts_lens = [10];
var total_cur2_edit_txt_len = 10;

var delete_delay = 14;  /* Delay to wait before deleting */
var type_delay = 7;  /* Delay to wait for before typing */

var cur_2 = document.getElementById("header-name");

function typeWriter() {
     if (i_type_2 < cur2_txt.length) {
        char_i = cur2_txt.charAt(i_type_2);
        cur_2.innerHTML += char_i;
        i_type_2++;
        setTimeout(typeWriter, Math.floor(Math.random() * random_delay) + base_delay);
    }
}

typeWriter();