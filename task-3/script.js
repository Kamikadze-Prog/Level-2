document.getElementById("hide").onclick = hide_box;
let box = document.querySelectorAll(".rect-wrapper")

function hide_box() {
    for (let i = 0; i < box.length; i++) {
        box[i].classList.toggle("hidden");
    }
}