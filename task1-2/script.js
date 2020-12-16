document.getElementById("display").onclick = display_box;
document.getElementById("remove").onclick = remove_box;
document.getElementById("hide").onclick = hide_box;
let box = document.getElementById("rect");
box.style.display = 'block'

function display_box() {
    if (box.style.display === 'block') {
        box.style.display = "none"
    } else {
        box.style.display = "block"
    }
}

function remove_box() {
    if (document.getElementById("rect") != null) {
        box.remove();
        /*block else work not good if you do x3 click*/
    } else   {
        let para = document.createElement("div");
        para.id = 'rect';
        let element = document.getElementById("rect-wrapper");
        element.appendChild(para);
    }
}

function hide_box() {
    if (box.className === "hidden") {
        box.classList.remove("hidden");
    } else {
        box.className = "hidden";
    }

}