let idoz = 3;
function timeDisplay() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (parseInt(date.getMonth()) + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const min = date.getMinutes().toString().padStart(2, '0');

    document.getElementById("time").innerHTML = hours + ":" + min;
    document.getElementById("date").innerHTML = year + "." + month + "." + day + ".";


}
setInterval(timeDisplay, 1000);
function menuShow() {
    var element = document.getElementById("menuClose");
    var turnOfflabel = document.getElementById("turnOfflabel")
    var logoutlabel = document.getElementById("logoutlabel")
    if (turnOfflabel.style.display === "none" && logoutlabel.style.display === "none") {
        turnOfflabel.style.display = "block"
        logoutlabel.style.display = "block"
    } else {
        turnOfflabel.style.display = "none"
        logoutlabel.style.display = "none"
    }
    element.classList.toggle("menuOpen");
}
function logout() {
    window.location.replace("../login/login.html");
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
    await window.location.replace("../startup/startup.html");
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
function iconRename() {
    let folderVal = document.getElementById("folder1").value;
    let folder = document.getElementById("folder1");
    folder.value = folderVal;
    console.log(folderVal);
}
function getLastDraggablePosition() {
    const draggables = document.querySelectorAll(".draggable");
    if (draggables.length === 0) {
        return 0; // Default position if no draggable elements exist
    }
    const lastDraggable = draggables[draggables.length - 1];
    return parseInt(lastDraggable.style.left, 10) || 0;
}
let magas = 50;
function newIcon() {
    idoz++;
    var table = document.querySelector("#table");
    let div = document.createElement('div');
    let img = document.createElement('img');
    let input = document.createElement('input');

    div.id = "folder" + idoz;
    div.classList.add("draggable");
    const lastPosition = getLastDraggablePosition();
    let lefti = JSON.stringify(lastPosition);
    console.log(lefti);
    if(parseInt(lefti) > 2300){
        magas += 150;
        div.style = `left:50px;top:${magas}px;z-index:1;`;
        
    }
    else{
        div.style = `left:${lastPosition + 150}px;top:${magas}px;z-index:1;`;
    }
    div.ondblclick = openfolder;

    img.style = "width:100%;height:100%;";
    img.src = "src/folder-svgrepo-com.svg";

    input.classList.add("iconName");
    input.value = "folder" + idoz;
    input.onchange = iconRename;

    div.appendChild(img);
    div.appendChild(input);
    table.appendChild(div);
    draggable()
}

async function openfolder() {
    console.log(this);
    if (!document.querySelector(".table .folderopened" + this.item1.id)) {
        var folder = document.createElement("div");
        folder.id = "folderopened" +" " + this.item1.id;
        console.log(folder.id);
        folder.classList.add("folderopened");
        folder.classList.add("draggable");
        table.appendChild(folder);
        var foldername = document.createElement("div");
        foldername.id = "foldername";
        foldername.classList.add("forlder_name");
        folder.appendChild(foldername);
        foldername.appendChild(document.createElement("p"));
        foldername.children[0].innerText = "Folder name";
        folder.appendChild(document.createElement("hr"));
        var folderitems = document.createElement("div");
        folder.appendChild(folderitems);
        for (let i = 0; i < 5; i++) {
            folderitems.appendChild(document.createElement("p"));
            folderitems.children[i].innerText = "Folder item " + i;
            folderitems.classList.add("folder_item");
        }
        
    }

    let mousePosition;
    if (this.style != undefined) {
        mousePosition = {
            clientX: this.style.left,
            clientY: this.style.top
        };
    } else {
        mousePosition = {
            clientX: this.item1.style.left,
            clientY: this.item1.style.top
        };
    }
    let tray = document.querySelector(".trayIcons");
    tray.style = "display:flex;flex-direction:row;";
    let icondiv = document.createElement("div");
    let iconimg = document.createElement("img");
    iconimg.src = "src/folder-svgrepo-com.svg";
    iconimg.style = "width:100%;height:100%;background-color:red;";
    icondiv.style = "width:50px;height:50px;";
    const folderopened = document.getElementById("folderopened " + this.item1.id);
    console.log(folderopened);
    folderopened.style.top = parseInt(mousePosition.clientY.split("px")[0]) + 100 + "px";
    folderopened.style.left = mousePosition.clientX;
    icondiv.appendChild(iconimg);
    tray.appendChild(icondiv);

    draggable()
}

function draggable(){
    document.querySelectorAll(".draggable").forEach(draggable => {
        console.log(draggable);
        draggable.addEventListener("mousedown", (event) => {
            item1 = draggable;

            let shiftX = event.clientX - draggable.getBoundingClientRect().left;
            let shiftY = event.clientY - draggable.getBoundingClientRect().top;

            const moveAt = (pageX, pageY) => {
                let newX = pageX - shiftX;
                let newY = pageY - shiftY;


                if (newX < 0) newX = 0;
                if (newY < 0) newY = 0;
                if (newX + draggable.offsetWidth > container.offsetWidth) newX = container.offsetWidth - draggable.offsetWidth;
                if (newY + draggable.offsetHeight > container.offsetHeight) newY = container.offsetHeight - draggable.offsetHeight;

                draggable.style.left = newX + "px";
                draggable.style.top = newY + "px";

                draggable.style.zIndex = "999";

                // console.log(draggable.id)
            }

            startPosX = draggable.style.left;
            startPosY = draggable.style.top;

            const onMouseMove = (event) => {
                moveAt(event.pageX, event.pageY);
                checkCollisionOnDrag(draggable); // Check collision while dragging
            }

            document.addEventListener("mousemove", onMouseMove);

            draggable.addEventListener("mouseup", () => {
                document.removeEventListener("mousemove", onMouseMove);
                CheckDelete();
                CheckCollide();
                draggable.style.zIndex = "1";
            });

            draggable.ondragstart = () => {
                return false;
            };
        });
    });
    document.querySelectorAll(".draggable").forEach(draggable => {
        draggable.style.zIndex = "1";
    });
}
function txt() {
    console.log("txt");
    let embed = document.createElement("embed");
    embed.type = "text/html";
    embed.src = "../txt/txt.html";
    embed.width = "2000px";
    embed.height = "1000px";
    embed.style.paddingTop = "100px";
    let tableElement = document.getElementById("table");
    tableElement.appendChild(embed);
}