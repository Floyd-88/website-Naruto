// При наведении на ссылки меню выдвигать кунаи
let kunai = document.querySelector(".header_menu")
kunai.addEventListener("pointerover", kunaiGo)
kunai.addEventListener("pointerout", kunaiBack)


function kunaiGo(event) {
    if (!event.target.closest(".menu__item")) return
    let kunaiLeft = event.target.nextElementSibling
    let n = 0;
    kunaiLeft.style.left = n + "px"
}

function kunaiBack(event) {
    if (!event.target.closest(".menu__item")) return
    let kunaiLeft = event.target.nextElementSibling
    let n = -78;
    kunaiLeft.style.left = n + "px"

}