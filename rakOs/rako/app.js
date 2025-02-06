function timeDisplay() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (parseInt(date.getMonth())+1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const min = date.getMinutes().toString().padStart(2, '0');

    document.getElementById("time").innerHTML = hours + ":" + min ;
    document.getElementById("date").innerHTML = year + "." + month  + "." + day + ".";


}
setInterval(timeDisplay, 1000);
function menuShow() {
    var element = document.getElementById("menuClose");
    var turnOfflabel = document.getElementById("turnOfflabel")
    var logoutlabel = document.getElementById("logoutlabel")
    if(turnOfflabel.style.display === "none" && logoutlabel.style.display === "none"){
        turnOfflabel.style.display = "block"
        logoutlabel.style.display = "block"
    }else{
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
function iconRename(){
    let folderVal = document.getElementById("folder1").value;
    let folder = document.getElementById("folder1");
    folder.value = folderVal;
    console.log(folderVal);
}

function openfolder(){
    console.log("openfolder");
    document.getElementById("folderopened").style.display = "block";
}

let dragEl;
let dragHandleEl
const lastPosition = {};

setupResizable();
setupDraggable();

function setupDraggable(){
  dragHandleEl = document.querySelector('[data-drag-handle]');
  dragHandleEl.addEventListener('mousedown', dragStart);
  dragHandleEl.addEventListener('mouseup', dragEnd);    
  dragHandleEl.addEventListener('mouseout', dragEnd);
}

function setupResizable(){
  const resizeEl = document.querySelector('[data-resizable]');
  resizeEl.style.setProperty('resize', 'both');
  resizeEl.style.setProperty('overflow','hidden');
}

function dragStart(event){
  dragEl = getDraggableAncestor(event.target);
  dragEl.style.setProperty('position','absolute');
  lastPosition.left = event.target.clientX;
  lastPosition.top = event.target.clientY;
  dragHandleEl.classList.add('dragging');
  dragHandleEl.addEventListener('mousemove', dragMove);
}

function dragMove(event){
  const dragElRect = dragEl.getBoundingClientRect();
  const newLeft = dragElRect.left + event.clientX - lastPosition.left;
  const newTop = dragElRect.top + event.clientY - lastPosition.top;
  dragEl.style.setProperty('left', `${newLeft}px`);
  dragEl.style.setProperty('top', `${newTop}px`);
  lastPosition.left = event.clientX;
  lastPosition.top = event.clientY;
  window.getSelection().removeAllRanges();
}

function getDraggableAncestor(element){
  if (element.getAttribute('data-draggable')) return element;
  return getDraggableAncestor(element.parentElement);
}

function dragEnd(){
  dragHandleEl.classList.remove('dragging');
  dragHandleEl.removeEventListener('mousemove',dragMove);
  dragEl = null;
}
