let menuBtn = document.getElementsByClassName("menu-btn")[0];

menuBtn.addEventListener("click", handleMenuBtnClick);

function handleMenuBtnClick(event) {
    let navTag = document.querySelector("nav");
    navTag.classList.toggle("hide");
    menuBtn.classList.toggle("change")
}