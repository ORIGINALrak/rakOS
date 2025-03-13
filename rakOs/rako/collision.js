const container = document.getElementById("table");
const draggables = document.querySelectorAll(".draggable");

var deleteItem = false;
var colliding = false;
var item1;

var startPosX;
var startPosY;

draggables.forEach(draggable => {
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

function areColliding(div1, div2) {
  const rect1 = div1.getBoundingClientRect();
  const rect2 = div2.getBoundingClientRect();

  if (div1 === div2) {
    return false;
  }

  return !(rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom);
}

function checkCollisionOnDrag(draggable) {
  if (!draggable.classList.contains("icon")){
    return
  }

  const elements = document.getElementsByClassName('icon');

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    if (areColliding(draggable, element)) {
      colliding = true;

      if (element.id === "trashcan") {
        deleteItem = true;
      }

      break;
    }

    deleteItem = false;
    colliding = false;
  }
}

function CheckDelete() {
  if (deleteItem) {
    item1.remove();

    deleteItem = false;
  }
}

function CheckCollide() {
  if (colliding) {
    item1.style.left = startPosX;
    item1.style.top = startPosY;

    colliding = false;
  }
}
