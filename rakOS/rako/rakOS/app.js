function timeDisplay() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours().toString().padStart(2, '0');
    const min = date.getMinutes().toString().padStart(2, '0');

    document.getElementById("time").innerHTML = hours + ":" + min ;
    document.getElementById("date").innerHTML = year + "." + month + 1 + "." + day + ".";


}
setInterval(timeDisplay, 1000);
function menuShow() {
    var element = document.getElementById("menuClose");
    element.classList.toggle("menuOpen");
}

function turnOff() {
    var elementfo = document.getElementById("fobody")
    elementfo.style = "background-color:white"
    var element = document.getElementById("body")
    element.style = "display:none"
    var elementbtn = document.getElementById("turnOnbtn")
    elementbtn.style = "display:block"
    var elementbtnon = document.getElementById("turnOn")
    elementbtnon.style = "display:flex;justify-content:center;align-items:center;width:100vw;height:100vh"
}
async function turnOn() {
    await window.location.replace("/rakOS/startup/startup.html");
    var elementbtnon = document.getElementById("turnOn")
    elementbtnon.style = "display:none"
    var element = document.getElementById("body")
    element.style = "display:block"
    var elementbtn = document.getElementById("turnOnbtn")
    elementbtn.style = "display:none"
    var elementfo = document.getElementById("fobody")
    elementfo.style = "background-color:blueviolet"
    var tableElement = document.getElementById("table");
    tableElement.style = "display:grid"
    var menuCloseElement = document.getElementById("menuClose");
    menuCloseElement.classList.remove("menuOpen");
}
