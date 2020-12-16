document.getElementById("hide").onclick = hide_box;
let box = document.querySelectorAll(".rect-wrapper")

function hide_box() {
    if (box.className === "hidden") {
        for (let i = 0; i < box.length; i++) {
            box[i].classList.remove("hidden");
        }
    } else {
        for (let i = 0; i < box.length; i++) {
            box[i].classList.toggle("hidden");
        }
    }

}