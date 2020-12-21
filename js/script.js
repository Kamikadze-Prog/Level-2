/*Task-1*/
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

/*Task-2*/
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
    document.getElementById('mouseCord').textContent = "Х: " + event.pageX + "  " + "Y: " + event.pageY;
})

/*Task-11*/
let userLang = navigator.language;
document.getElementById('userLanguage').textContent = "Lang: " + userLang;

/*Task-12*/
navigator.geolocation.getCurrentPosition(success);

function success(pos) {
    let crd = pos.coords;
    document.getElementById('latitude').textContent = `${crd.latitude}`;
    document.getElementById('longitude').textContent = `${crd.longitude}`;
}

/*Task-13*/
document.getElementById('local_store').innerHTML = localStorage['text'] || 'local';
document.getElementById('cookies_box').innerHTML = document.cookie.split('=')[1] || 'cookies';
document.getElementById('session_store').innerHTML = sessionStorage['text'] || 'session';

setInterval(function () {
    localStorage['text'] = document.getElementById('local_store').innerHTML;
}, 500);

setInterval(function () {
    document.cookie = `document=${document.getElementById('cookies_box').innerHTML}`;
}, 500);

setInterval(function () {
    sessionStorage['text'] = document.getElementById('session_store').innerHTML;
}, 500);

/*Task-14*/
function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled >= (scrollHeight - coords)) {
        goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < (scrollHeight - coords)) {
        goTopBtn.classList.remove('back_to_top-show');
    }
}

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -20);
        setTimeout(backToTop, 0);
    }
}

let goTopBtn = document.querySelector('.back_to_top');
window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

/*Task-15*/
document.getElementById('big-block').onclick = () => alert("You clicked big block");
document.getElementById('small-block').onclick = clickedSmallBlock;

function clickedSmallBlock(event) {
    alert("You clicked small block")
    event.stopPropagation()

}

/*Task-16*/
document.getElementById("show_hide_block").onclick = showBlock;
let body = document.querySelector('.silver_box');

function showBlock() {
    body.classList.add('not_scroll_box');
    document.querySelector('body').classList.add('stop-scrolling')
    if (body.classList.contains('not_scroll_box')) {
        body.addEventListener("click", removeBox);
    }
}

function removeBox() {
    document.querySelector('body').classList.remove('stop-scrolling')
    document.querySelector('.silver_box').classList.remove('not_scroll_box');
}

/*Task-17*/
document.getElementById('button-submit').onclick = offReload;

function offReload(e) {
    e.preventDefault();
}

/*Task-18*/
let fileInput = document.querySelector('input[type=file]');
let filenameContainer = document.querySelector('#filename');
let dropZone = document.querySelector('.label-input');

fileInput.addEventListener('change', function () {
    filenameContainer.innerText = fileInput.value.split('\\').pop();
});

fileInput.addEventListener('dragenter', function () {
    dropZone.classList.add('dragover');
});

fileInput.addEventListener('dragleave', function () {
    dropZone.classList.remove('dragover');
});

function mouseOutFile() {
    dropZone.classList.remove("dragover");
}