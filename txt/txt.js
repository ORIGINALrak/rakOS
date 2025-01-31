function filemenu() {
    var fileElement = document.getElementById("file");
    if (fileElement.style.display === "block") {
        fileElement.style.display = "none";
        fileElement.style.position = "static";
    } else {
        fileElement.style.display = "block";
        fileElement.style.position = "absolute";
    }
}

function filemenutext(){
    var fileElement = document.getElementById("file");
        fileElement.style.display = "none";
        fileElement.style.position = "static";
}

function notepad() {
    var fileElement = document.getElementById("mentes");
        fileElement.style.display = "block";
        fileElement.style.position = "absolute";
    if(document.getElementById("nev").value == ""){
        
    }
    else{
        const link = document.createElement("a");
        const content = document.querySelector("textarea").value;
        const file = new Blob([content], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        var filename = document.getElementById("nev").value;
        link.download = filename+".txt";
        link.click();
        URL.revokeObjectURL(link.href);
    }

}
