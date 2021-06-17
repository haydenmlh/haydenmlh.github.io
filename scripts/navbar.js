/* Toggle between adding and removing the "responsive" class to topnav when 
the user clicks on the icon */

function myFunction() {
    var x = document.getElementById("buttons");
    if (x.className === "") {
      x.className += "responsive";
    } else {
      x.className = "";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}