const burger = document.getElementById("burger-button")
const menu = document.getElementById("menu")

burger.addEventListener("click", () => {
    menu.classList.toggle("visible")
    
})

