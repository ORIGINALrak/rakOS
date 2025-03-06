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

function openfolder() {
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
}

isMaximized = false
let prevPosX
let prevPosY
let prevSizeWidth
let prevSizeHeight

function CloseWindow(id){
    const window = document.getElementById(id)
    window.remove()
}

function SetSize(id){
    if (!isMaximized){
        const window = document.getElementById(id)
        prevPosX = window.style.left
        prevPosY = window.style.top
        prevSizeWidth = window.style.width
        prevSizeHeight = window.style.height
        console.log("setting size")
    }
}

function Fullscreen(id){
    const window = document.getElementById(id)
    const icon = document.getElementById("sizeIcon")

    if (!isMaximized){
        window.style.width = ""+screen.width+"px"
        window.style.height = ""+screen.height+"px"
        window.style.left = "0"
        window.style.top = "0"
        icon.classList.remove("fa-up-right-and-down-left-from-center")
        icon.classList.add("fa-down-left-and-up-right-to-center")
        const lob = document.getElementById("Lobsterr");
        lob.style.width = "1000px";
        lob.style.height = "500px";
    
    }
    else{
        window.style.width = prevSizeWidth
        window.style.height = prevSizeHeight
        window.style.left = prevPosX
        window.style.top = prevPosY
        icon.classList.remove("fa-down-left-and-up-right-to-center")
        icon.classList.add("fa-up-right-and-down-left-from-center")
        
    }

    isMaximized = !isMaximized

}
function Minimize(id){
    const window = document.getElementById(id)
    window.style.display = "none"

    draggable()
}

function draggable(){
    document.querySelectorAll(".draggable").forEach(draggable => {
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
            }

            startPosX = draggable.style.left;
            startPosY = draggable.style.top;

            const onMouseMove = (event) => {
                moveAt(event.pageX, event.pageY);
                checkCollisionOnDrag(draggable);
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
function lobster() {
    let div = document.createElement('div');
    let table = document.getElementById("table");
    let img = document.createElement('img');
    let fejlec = document.createElement('div');
    const p = document.createElement('p');
    const closeIcon = document.createElement('i');
    closeIcon.className = 'fa-solid fa-xmark';
    closeIcon.setAttribute('onclick', "CloseWindow('app-bg-l')");
    const sizeIcon = document.createElement('i');
    sizeIcon.id = 'sizeIcon';
    sizeIcon.className = 'fa-solid fa-up-right-and-down-left-from-center';
    sizeIcon.setAttribute('onclick', "SetSize('app-bg-l'); Fullscreen('app-bg-l')");
    const minimizeIcon = document.createElement('i');
    minimizeIcon.className = 'fa-solid fa-minus';
    minimizeIcon.setAttribute('onclick', "Minimize('app-bg-l')");
    
    p.textContent = 'Lobster';
    p.appendChild(closeIcon);
    p.appendChild(sizeIcon);
    p.appendChild(minimizeIcon);
    fejlec.style = "height:50px;background-color:black;color:white;";
    fejlec.appendChild(p);
    div.draggable = "true";
    img.id="lobsterr";
    img.src = "src/lobster.png";
    img.style = "width:100%;height:100%;";
    div.classList.add("draggable");
    div.style = "width:fit-content;height:fit-content;z-index:1001;";
    div.id = "app-bg-l";
    div.appendChild(fejlec);
    div.appendChild(img);
    table.appendChild(div);
    
    draggable();
}


window.onload = function() {
    initDragElement();
    initResizeElement();
  };
  
  function initDragElement() {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    var popups = document.getElementsByClassName("app-background");
    var elmnt = null;
    var currentZIndex = 100; //TODO reset z index when a threshold is passed
  
    for (var i = 0; i < popups.length; i++) {
      var popup = popups[i];
      var header = getHeader(popup);
  
      popup.onmousedown = function() {
        this.style.zIndex = "" + ++currentZIndex;
      };
  
      if (header) {
        header.parentPopup = popup;
        header.onmousedown = dragMouseDown;
      }
    }
  
    function dragMouseDown(e) {
      elmnt = this.parentPopup;
      elmnt.style.zIndex = "" + ++currentZIndex;
  
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      if (!elmnt) {
        return;
      }
  
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  
    function getHeader(element) {
      var headerItems = element.getElementsByClassName("app-background-name");
  
      if (headerItems.length === 1) {
        return headerItems[0];
      }
  
      return null;
    }
  }

function initResizeElement() {
    var popups = document.getElementsByClassName("app-background");
    var element = null;
    var startX, startY, startWidth, startHeight, startLeft, startTop;
    var moveHandler = null;
    var upHandler = null;
    var minWidth = 250;
    var minHeight = 150;

    for (var i = 0; i < popups.length; i++) {
        var p = popups[i];

        createResizer(p, "resizer resizer-left", "left");
        createResizer(p, "resizer resizer-right", "right");
        createResizer(p, "resizer resizer-bottom", "bottom");
        createResizer(p, "resizer resizer-left-corner", "bottom-left");
        createResizer(p, "resizer resizer-right-corner", "bottom-right");
    }

    function createResizer(popup, className, direction) {
        var resizer = document.createElement("div");
        resizer.className = className;
        popup.appendChild(resizer);
        resizer.addEventListener("mousedown", initDrag.bind(resizer, direction), false);
        resizer.parentPopup = popup;
    }

    function initDrag(direction, e) {
        element = this.parentPopup;

        startX = e.clientX;
        startY = e.clientY;
        startWidth = parseInt(document.defaultView.getComputedStyle(element).width, 10);
        startHeight = parseInt(document.defaultView.getComputedStyle(element).height, 10);
        startLeft = parseInt(document.defaultView.getComputedStyle(element).left, 10) || 0;
        startTop = parseInt(document.defaultView.getComputedStyle(element).top, 10) || 0;

        e.preventDefault();

        moveHandler = function(e) { doDrag(e, direction); };
        upHandler = stopDrag;

        document.documentElement.addEventListener("mousemove", moveHandler, false);
        document.documentElement.addEventListener("mouseup", upHandler, false);
    }

    function doDrag(e, direction) {
        var deltaX = e.clientX - startX;
        var deltaY = e.clientY - startY;
        var newWidth, newHeight;

        switch (direction) {
            case "left":
                newWidth = startWidth - deltaX;
                if (newWidth >= minWidth) {
                    element.style.width = newWidth + "px";
                    element.style.left = startLeft + deltaX + "px";
                }
                break;
            case "right":
                newWidth = startWidth + deltaX;
                if (newWidth >= minWidth) {
                    element.style.width = newWidth + "px";
                }
                break;
            case "bottom":
                newHeight = startHeight + deltaY;
                if (newHeight >= minHeight) {
                    element.style.height = newHeight + "px";
                }
                break;
            case "bottom-left":
                newWidth = startWidth - deltaX;
                newHeight = startHeight + deltaY;
                if (newWidth >= minWidth) {
                    element.style.width = newWidth + "px";
                    element.style.left = startLeft + deltaX + "px";
                }
                if (newHeight >= minHeight) {
                    element.style.height = newHeight + "px";
                }
                break;
            case "bottom-right":
                newWidth = startWidth + deltaX;
                newHeight = startHeight + deltaY;
                if (newWidth >= minWidth) {
                    element.style.width = newWidth + "px";
                }
                if (newHeight >= minHeight) {
                    element.style.height = newHeight + "px";
                }
                break;
        }
    }

    function stopDrag() {
        document.documentElement.removeEventListener("mousemove", moveHandler, false);
        document.documentElement.removeEventListener("mouseup", upHandler, false);
    }
}
