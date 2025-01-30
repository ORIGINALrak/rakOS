function clear(){
    setTimeout(function() {
        var icon = document.getElementById("icon");
        var loadingBar = document.getElementById("loading_bar");
        var progress = document.getElementById("progress");

        if (icon) {
            icon.style.display = "none";
        }
        if (loadingBar) {
            loadingBar.style.display = "none";
        }
        if (progress) {
            progress.style.display = "none";
        }
    }, 10600);
}
clear()
