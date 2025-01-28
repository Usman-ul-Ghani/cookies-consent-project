const acceptBtn = document.querySelector("#accept-button")
const closeBtn = document.querySelector("#cross-button")
const popup = document.querySelector(".cookie-popup")
const cancel = document.querySelector("#cross-button")

acceptBtn.addEventListener("click", () => {
    popup.classList.add("hidden")
    popup.classList.remove("cookie-popup")
})

cancel.addEventListener("click", () => {
    popup.classList.add("hidden")
    popup.classList.remove("cookie-popup")
})