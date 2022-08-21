document.getElementById("html_number").innerHTML = localStorage.getItem("score") + " out of 10"

function logOut() {
    localStorage.setItem("count", "0")
    window.location.href = `../index.html`
}

window.onload = function () {
    var checkingCount = localStorage.getItem("count")
    if (checkingCount === "0") {
        window.location.href = `../index.html`
    }
}