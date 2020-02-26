function showMenu() {
    console.log("hi");
    var menuElement = document.getElementById("myLinks");
    if (menuElement.style.display === "block") {
        menuElement.style.display = "none";
    } else {
        menuElement.style.display = "block";
    }
}
