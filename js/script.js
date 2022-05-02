const burger = document.querySelector(".header__menu-icon");
const menu = document.querySelector(".header__menu");
if (burger) {
  burger.addEventListener("click", function () {
    document.body.classList.toggle("_lock");
    burger.classList.toggle("_active");
    menu.classList.toggle("_active");
  });
}