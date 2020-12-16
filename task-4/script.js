document.getElementById("hide").onclick = hide_box;


function hide_box() {
    let input = document.getElementById("input-checker").value;
        box = document.querySelectorAll(input)
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