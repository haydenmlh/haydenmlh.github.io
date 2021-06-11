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

var cur1_txt = 'Hey there, welcome!';

var cur2_txt = "I am a ";
var cur2_edit_txt_1 = "Computer Scientist";
var cur2_edit_txt_2 = "graphics designer";
var cur2_edit_txt_3 = "photography enthusiast";
var cur2_edit_txt_4 = "Hayden Mak.";


var cur2_edit_txts = [cur2_edit_txt_1, cur2_edit_txt_2, cur2_edit_txt_3, cur2_edit_txt_4];
var cur2_edit_txts_lens = [];
var total_cur2_edit_txt_len = 0;

for (var i = 0; i < cur2_edit_txts.length; i++){
    cur2_edit_txt_len = cur2_edit_txts[i].length;
    cur2_edit_txts_lens.push(cur2_edit_txt_len);
    total_cur2_edit_txt_len += cur2_edit_txt_len;
}


var delete_delay = 14;
var type_delay = 7;

editor_delays = [];
editor_delays.push(type_delay)
for (var i = 0; i < (cur2_edit_txts.length - 2) ; i++) {
    editor_delays.push(editor_delays[editor_delays.length - 1] + cur2_edit_txts_lens[i]);
    editor_delays.push(editor_delays[editor_delays.length - 1] + delete_delay);
    editor_delays.push(editor_delays[editor_delays.length - 1] + cur2_edit_txts_lens[i]);
    editor_delays.push(editor_delays[editor_delays.length - 1] + type_delay);
}
editor_delays.push(editor_delays[editor_delays.length - 1] + cur2_edit_txts_lens[cur2_edit_txts_lens.length - 2]);
editor_delays.push(editor_delays[editor_delays.length - 1] + delete_delay);
// delete the "a " to allow for final element of Hayden Mak
editor_delays.push(editor_delays[editor_delays.length - 1] + cur2_edit_txts_lens[cur2_edit_txts_lens.length - 2] + 2);
editor_delays.push(editor_delays[editor_delays.length - 1] + type_delay);
// write final element ("Hayden Mak.")
editor_delays.push(editor_delays[editor_delays.length - 1] + cur2_edit_txts_lens[cur2_edit_txts_lens.length - 1]);
editor_delays.push(editor_delays[editor_delays.length - 1] + delete_delay);

console.log(editor_delays);



var cur_1 = document.getElementById("welcome-1");
var cur_2 = document.getElementById("welcome-2");

function typeWriter() {
    if (i_type_1 < cur1_txt.length) {
        char_i = cur1_txt.charAt(i_type_1);
        cur_1.innerHTML += char_i;
        i_type_1++;
        setTimeout(typeWriter, Math.floor(Math.random() * 40) + 60);
    } else if (i_type_2 < cur2_txt.length) {
        if (cur_1.className == "current noselect") {
            cur_1.className = "noselect";
            cur_2.className = "current noselect";
        }
        char_i = cur2_txt.charAt(i_type_2);
        cur_2.innerHTML += char_i;
        i_type_2++;
        setTimeout(typeWriter, Math.floor(Math.random() * 40) + 60);
    } else if (i_type_editor < editor_delays[editor_delays.length - 1]) {

        if (i_type_editor < editor_delays[0]) {  // wait  delay

        }
        else if (i_type_editor < editor_delays[1]) {  // print 1st cur_2_edit_txts
            
            cur_2.innerHTML += cur2_edit_txts[0].charAt(i_edit_txt)
            i_edit_txt += 1;

        } else if (i_type_editor < editor_delays[2]) {  // wait delay

        } else if (i_type_editor < editor_delays[3]) {  // delete 1st cur_2_edit_txts
        
            cur_2.innerHTML = cur_2.innerHTML.slice(0, -1);

        } else if (i_type_editor < editor_delays[4]) {  // wait delay

            i_edit_txt = 0;

        } else if (i_type_editor < editor_delays[5]) {  // print 2nd cur_2_edit_txts
        
            cur_2.innerHTML += cur2_edit_txts[1].charAt(i_edit_txt)
            i_edit_txt++;

        } else if (i_type_editor < editor_delays[6]) {  // wait delay

        } else if (i_type_editor < editor_delays[7]) {  // delete 2nd cur_2_edit_txts
            
            cur_2.innerHTML = cur_2.innerHTML.slice(0, -1);
            i_edit_txt++;

        } else if (i_type_editor < editor_delays[8]) {  // wait delay
        
            i_edit_txt = 0;

        } else if (i_type_editor < editor_delays[9]) {  // print 3rd cur_2_edit_txts
        
            cur_2.innerHTML += cur2_edit_txts[2].charAt(i_edit_txt);
            i_edit_txt++;

        } else if (i_type_editor < editor_delays[10]) {  // wait delay
        
        } else if (i_type_editor < editor_delays[11]) {  // delete 3nd cur_2_edit_txts
            
            cur_2.innerHTML = cur_2.innerHTML.slice(0, -1);
            i_edit_txt++;

        } else if (i_type_editor < editor_delays[12]) {  // wait delay
        
            i_edit_txt = 0;

        } else if (i_type_editor < editor_delays[13]) {  // print 3rd cur_2_edit_txts
        
            cur_2.innerHTML += cur2_edit_txts[3].charAt(i_edit_txt);
            i_edit_txt++;
        }


        i_type_editor++;
        setTimeout(typeWriter, Math.floor(Math.random() * random_delay) + base_delay);
    }
}

typeWriter();