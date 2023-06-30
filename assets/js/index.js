const headerBtn = document.querySelector(".header__btn")
const headerMenu = document.querySelector(".header__menu")

headerBtn.addEventListener("click", () => {
    headerMenu.classList.toggle("header__menu-active")
})