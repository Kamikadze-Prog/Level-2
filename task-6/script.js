let red_box = document.getElementById("block");

function mouse_hover() {
    red_box.className = "hidden";
}

function mouseOut() {
    red_box.classList.remove("hidden");
}