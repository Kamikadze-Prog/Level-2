document.getElementById("display").onclick = display_box;
document.getElementById("remove").onclick = remove_box;
document.getElementById("hide").onclick = hide_box_1;
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
    } else {
        let para = document.createElement("div");
        para.id = 'rect';
        let element = document.getElementById("rect-wrapper");
        element.appendChild(para);
    }
}

function hide_box_1() {
    if (box.className === "hidden") {
        box.classList.remove("hidden");
    } else {
        box.className = "hidden";
    }
}

/*Task-3*/
document.getElementById("hide-2").onclick = hide_box_2;
let box_2 = document.querySelectorAll(".rect-wrapper")

function hide_box_2() {
    for (let i = 0; i < box_2.length; i++) {
        box_2[i].classList.toggle("hidden");
    }
}

/*Task-4*/
document.getElementById("hide-3").onclick = hide_box_3;

function hide_box_3() {
    let input = document.getElementById("input-checker").value;

    if (input.length !== 0) {
        let box_3 = document.querySelectorAll(input)
        for (let i = 0; i < box_3.length; i++) {
            box_3[i].classList.toggle("hidden");
        }
    } else {
        alert("You not write class name")
    }
}

/*Task-5*/
let yellow_box = document.getElementById("block");

yellow_box.addEventListener("click", say_hello);

function say_hello() {
    alert("Hello World!");
    yellow_box.removeEventListener("click", say_hello)
    yellow_box.addEventListener('click', remove);
}

function remove() {
    yellow_box.className = 'hidden'
}

/*Task-6*/
let red_box_1 = document.getElementById("block-2");

function mouse_hover_1() {
    red_box_1.className = "hidden";
}

function mouseOut() {
    red_box_1.classList.remove("hidden");
}

/*Task-7*/
let red_box_2 = document.getElementById("rect-2");

document.getElementById("input-checker-2")
    .addEventListener("focus", () => red_box_2.style.opacity = '1');
document.getElementById("input-checker-2")
    .addEventListener("input", () => red_box_2.style.opacity = '0');

/* Task-8*/
document.getElementById("img-btn-1").onclick = makeImg;

function makeImg() {
    let tagName = document.createElement("img");
    tagName.src = document.getElementById("input-checker-3").value;
    tagName.width = 200;
    let element = document.getElementById("img-wrapper-1");
    element.appendChild(tagName);
}

/* Task-9*/

document.getElementById("img-btn-2").onclick = makeAreaImg;

function makeAreaImg() {

    let areaValue = document.getElementById("text-area").value;
    let arrValue = areaValue.split('\n');

    for (let i = 0; i < arrValue.length; i++) {
        let tagName = document.createElement("img");
        tagName.src = arrValue[i];
        tagName.width = 200;
        let element = document.getElementById("img-wrapper-2");
        element.appendChild(tagName);
    }
}

/* Task-10*/
document.onmousemove = (function (event) {
    document.getElementById('mouseCord').value = "Х: " + event.pageX + "  " + "Y: " + event.pageY;
})

