const inputName = document.getElementById("name-input")
const outputName = document.getElementById("name-output")
const oneclick = document.getElementById("one-click")
const doubleclick = document.getElementById("double-click")
const pressclick = document.getElementById("press-click")
const yearSelect = document.getElementById("select-year")
const image = document.getElementById("img")
const interact = document.getElementById("interaction")


inputName.addEventListener(
    "input", function (){
        outputName.innerHTML = inputName.value
        interact.innerHTML = "typing..."
    }
)

inputName.addEventListener(
    "focus", function (){
         interact.innerHTML = "Input is active";
    }
)

inputName.addEventListener(
    "blur", function (){
         interact.innerHTML = "Input is no longer active";
    }
)

//Functions for BUTTONS
oneclick.addEventListener(
    "click", function(){
        outputName.innerHTML = "Future Web Developer"
        interact.innerHTML = "Click event activated"
    }
)

doubleclick.addEventListener(
    "dblclick", function(){
        outputName.style.color = "brown"
        interact.innerHTML = "Double Click event activated"
    }
)

pressclick.addEventListener(
    "mousedown", function () {

    pressclick.style.backgroundColor = "green";
    pressclick.style.transform = "scale(0.95)";
    interact.innerHTML = "Mouse button is pressed.";

});


pressclick.addEventListener(
    "mouseup", function () {

    pressclick.style.backgroundColor = "brown";
    pressclick.style.transform = "scale(1)";
    interact.innerHTML = "Mouse button was released.";

});


image.addEventListener(
    "mouseover", function(){
        interact.innerHTML = "Mouse enter the image"
    }
)

image.addEventListener(
    "mouseout", function(){
        interact.innerHTML = "Mouse left the image"
    }
)

yearSelect.addEventListener(
    "change", function () {

    interact.innerHTML = "Year selected: " + yearSelect.value;

});
