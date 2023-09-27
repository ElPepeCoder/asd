
let btnMenu = document.getElementById("toggleMenu");
btnMenu.addEventListener("click", function () {
    if(document.getElementById("menu").classList.contains("hidden")) {
        document.getElementById("menu").classList.remove("hidden");
    }else {
        document.getElementById("menu").classList.add("hidden");
    }
})
