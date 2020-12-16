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


