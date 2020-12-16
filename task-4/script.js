document.getElementById("hide").onclick = hide_box;

function hide_box() {
    let input = document.getElementById("input-checker").value;

    if (input.length !==0 ) {
        box = document.querySelectorAll(input)
        for (let i = 0; i < box.length; i++) {
            box[i].classList.toggle("hidden");
        }
    }
    else {
        alert("You not write class name")
    }


}