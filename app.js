window.onload = function () {
    setTimeout(function () {
        document.getElementsByClassName("loader")[0].style.height = "auto"
        document.getElementsByTagName("body")[0].children[0].children[0].classList.add("hidden");
        document.getElementsByTagName("body")[0].children[1].classList.remove("hidden");
        document.getElementsByTagName("body")[0].children[2].classList.remove("hidden");
        document.getElementsByTagName("body")[0].children[3].classList.remove("hidden");
    }, 1000)
}
function googleBtn() {
    var left = (screen.width - 515) / 2;
    var top = ((screen.height - 679) / 2) - 40;
    window.open("login/login.html", "", "width =  515, height = 679" + ", top = " + top + ", left = " + left);
}

window.onfocus = function () {
    var windowCheck = localStorage.getItem("window")
    if (windowCheck === "true") {
        localStorage.setItem("window","false")
        window.location.replace("home/home.html")
    }
}