document.addEventListener("DOMContentLoaded", function () {
    const headerBurgerButton = document.querySelector(".header__burger-button");
    const mobileMenu = document.querySelector(".mobile-menu");
    const headerBurgerIcon = document.querySelector(".header__burger-icon");
    const headerCloseIcon = document.querySelector(".header__close-icon");
    const body = document.querySelector("body");

    const VISIBLE_CLASS = "visible";

    function openMenu() {
        mobileMenu.classList.add(VISIBLE_CLASS);
        headerBurgerIcon.classList.remove(VISIBLE_CLASS);
        headerCloseIcon.classList.add(VISIBLE_CLASS);
        body.classList.add("hidden");
    }

    function closeMenu() {
        mobileMenu.classList.remove(VISIBLE_CLASS);
        headerBurgerIcon.classList.add(VISIBLE_CLASS);
        headerCloseIcon.classList.remove(VISIBLE_CLASS);
        body.classList.remove("hidden");
    }

    headerBurgerButton.addEventListener("click", function () {

        if (mobileMenu.classList.contains(VISIBLE_CLASS)) {
            closeMenu();
        } else {
            openMenu();
        }


    });
});