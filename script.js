let color = document.getElementById("color");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let bt1 = document.getElementById("btn1");
let bt2 = document.getElementById("btn2");
let bt3 = document.getElementById("btn3");
let bt4 = document.getElementById("btn4");

function setColor(backgroundColor) {
    color.style.backgroundColor = backgroundColor;
    color1.style.backgroundColor = backgroundColor;
    color2.style.backgroundColor = backgroundColor;
    color.style.transition = "1.5s ease-in-out";
    color1.style.transition = "1.5s ease-in-out";
    color2.style.transition = "1.5s ease-in-out";
}

bt1.addEventListener("click", function () {
    setColor("green");
});

bt2.addEventListener("click", function () {
    setColor("pink");
});

bt3.addEventListener("click", function () {
    setColor("black");
});

bt4.addEventListener("click", function () {
    setColor("blue");
});