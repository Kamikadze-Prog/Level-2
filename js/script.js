/*Task 1-2*/
const displayBox = document.getElementById("display"),
    removeTagBox = document.getElementById("remove"),
    hideBox = document.getElementById("hide");

const box = document.getElementById("rect");
box.style.display = 'block'

displayBox.addEventListener("click", () => {
    if (box.style.display === 'block') {
        box.style.display = "none"
    } else {
        box.style.display = "block"
    }
});

removeTagBox.addEventListener("click", () => {
    if (document.getElementById("rect") != null) {
        box.remove();
    } else {
        let para = document.createElement("div");
        para.id = 'rect';
        let element = document.getElementById("rect-wrapper");
        element.appendChild(para);
    }
});
hideBox.addEventListener("click", () => {
    if (box.className === "hidden") {
        box.classList.remove("hidden");
    } else {
        box.className = "hidden";
    }
});

/*Task-3*/
const hideBoxes = document.getElementById("hide-2");
hideBoxes.addEventListener("click", hide_box_2);

function hide_box_2() {
    let boxes = document.querySelectorAll(".rect-wrapper");
    boxes.forEach(el => el.classList.toggle("hidden"));
}

/*Task-4*/
const hideBoxByClassName = document.getElementById("hide-3");
hideBoxByClassName.addEventListener("click", hide_box_3);

function hide_box_3() {
    let input = document.getElementById("input-checker").value;
    if (input.length !== 0) {
        let box_3 = document.querySelectorAll(input)
        box_3.forEach(el => el.classList.toggle("hidden"));
    } else {
        alert("You not write class name")
    }
}

/*Task-5*/
const paintedBox = document.getElementById("block");
paintedBox.addEventListener("click", say_hello);

function say_hello() {
    alert("Hello World!");
    paintedBox.removeEventListener("click", say_hello)
    paintedBox.addEventListener('click', remove);
}

function remove() {
    paintedBox.className = 'hidden'
}

/*Task-6*/
const redBox = document.getElementById("block-2");

function mouse_hover_1() {
    redBox.className = "hidden";
}

function mouseOut() {
    redBox.classList.remove("hidden");
}

/*Task-7*/
const greenBox = document.getElementById("rect-2");
const inputChecker = document.getElementById("input-checker-2")
;
inputChecker.addEventListener("focus", () => greenBox.style.opacity = '1');
inputChecker.addEventListener("input", () => greenBox.style.opacity = '0');

/* Task-8*/
document.getElementById("img-btn-1").addEventListener("click", makeImg);

function makeImg() {
    let tagName = document.createElement("img");
    tagName.src = document.getElementById("input-checker-3").value;
    tagName.width = 200;
    let element = document.getElementById("img-wrapper-1");
    element.appendChild(tagName);
}

/* Task-9*/
const areaImgBtn = document.getElementById("img-btn-2");
areaImgBtn.addEventListener("click", makeAreaImg);

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
const userLang = navigator.language;
document.getElementById('userLanguage').textContent = "Lang: " + userLang;

/*Task-12*/
navigator.geolocation.getCurrentPosition(success);

function success(pos) {
    let crd = pos.coords;
    document.getElementById('latitude').textContent = `${crd.latitude}`;
    document.getElementById('longitude').textContent = `${crd.longitude}`;
}

/*Task-13*/
const localStorageVal = document.getElementById('local_store'),
    documentCookieVal = document.getElementById('cookies_box'),
    sessionStorageVal = document.getElementById('session_store');

localStorageVal.textContent = localStorage['text'] || 'local';
documentCookieVal.textContent = document.cookie.split('=')[1] || 'cookies';
sessionStorageVal.textContent = sessionStorage['text'] || 'session';

setInterval(function () {
    localStorage['text'] = localStorageVal.textContent;
}, 500);

setInterval(function () {
    document.cookie = `document=${documentCookieVal.textContent}`;
}, 500);
setInterval(function () {
    sessionStorage['text'] = sessionStorageVal.textContent;
}, 500);

/*Task-14*/
window.addEventListener('scroll', trackScroll);
const goTopBtn = document.querySelector('.back_to_top');
goTopBtn.addEventListener('click', backToTop);

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

const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

/*Task-15*/
const bigBox = document.getElementById('big-block'),
    smallBox = document.getElementById('small-block');
bigBox.addEventListener("click", () => alert("You clicked big block"));
smallBox.addEventListener("click", (event) => {
    alert("You clicked small block");
    event.stopPropagation();
});

/*Task-16*/
const modalWindow = document.getElementById("show_hide_block");
const body = document.querySelector('.silver_box');
modalWindow.addEventListener("click", showModalBox);

function showModalBox() {
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

const submitButton = document.getElementById('button-submit');

submitButton.addEventListener("click", offReload);

function offReload(e) {
    e.preventDefault();
}

/*Task-18*/
const fileInput = document.querySelector('input[type=file]'),
    filenameContainer = document.querySelector('#filename'),
    dropZone = document.querySelector('.label-input');

fileInput.addEventListener('change', function () {
    let splitValue = fileInput.value.split('\\').pop();
    if (splitValue.length > 26) {
        filenameContainer.innerText = splitValue.slice(0, 26) + "...";
    } else {
        filenameContainer.innerText = splitValue;
    }
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

/*Big task*/

{
    let csvText = "10,21,Кропивницкий,200000\n" +
        "11,22,Луганськ,12300\n" +
        "12,23,Дніпропетровськ,2350\n" +
        "\n" +
        "13,24,Одесса,23522\n" +
        "14,25,Харків,2352510\n" +
        "15,26,Вінниця,23423\n" +
        "#\n" +
        "16,27,Чернігів,34636\n" +
        "17,28,Миколаїв,234638\n" +
        "18,29,Львів,457474\n" +
        "#,#,#,#\n" +
        "19,30,Тернопіль,3453\n" +
        "20,31,Київ,354367\n" +
        "21,32,Волинь,35368\n" +
        "22,33,Сумми,235373\n" +
        "23,34,Івано-Франківськ,365983\n" +
        "24,35,Тернопіль,342450";

    function parseCsvText(csvText) {
        let count = 1;
        let parsedText= csvText
            .split("\n")
            .filter(elem => /[0-9 а-я]/.test(elem))
            .map(elem => countryObject(elem.split(",")))
            .sort((first, second) => second.population - first.population)
            .slice(0, 10)
            .map(elem => makeTopCityObj(elem, count++, elem.city))
            .reduce(function (parsedText, item) {
                Object.keys(item).forEach(function (items) {
                    parsedText[items] = item[items];
                })
                return parsedText;
            }, {});
        return (parsedText);
    }

    function makeTopCityObj(e, count, cites) {
        let obj = {};
        obj[cites] = {
            "population": e.population,
            "rating": count
        }
        return obj;
    }

    function countryObject(...e) {
        return {
            "x": e[0][0],
            "y": e[0][1],
            "city": e[0][2],
            "population": e[0][3],
        };
    }

    console.log(parseCsvText(csvText));
}