var submitted = false;

var form = document.getElementById("gform");

if (form) {
    form.addEventListener("submit", function () {
        var nodes = form.querySelectorAll("*");
        nodes.forEach(function (node) {
            node.style.transition = "opacity 0.6s ease";
            node.style.opacity = "0";
        });

        window.setTimeout(function () {
            form.innerHTML = "<p>Your response has been processed.</p>";
        }, 700);
    });
}
