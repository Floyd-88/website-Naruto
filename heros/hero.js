let cardPerson = document.querySelectorAll(".card__person")
cardPerson.forEach((elem) => {
    elem.addEventListener("click", showCard)
})
let cover_div = document.createElement("div") //Создаем div перекрывающий всю страницу кроме формы

function showCard(e) {


    cover_div.classList.add("cover_div")
    document.body.append(cover_div)

    let card = e.target.closest(".card__person")
    let infoPerson = card.lastElementChild

    infoPerson.style.display = "flex"

    infoPerson.style.top = (document.documentElement.clientHeight) - (infoPerson.getBoundingClientRect().height) - 20 + "px"
    infoPerson.style.left = (document.documentElement.clientWidth / 2) - (infoPerson.getBoundingClientRect().width / 2) + "px"

    // Кнопка закрытия окна
    let close = document.createElement("div")
    close.classList.add("infoPerson_close")
    infoPerson.append(close)

    close.style.top = 0 + "px"
    close.style.left = (infoPerson.clientWidth) - (close.getBoundingClientRect().width) + "px"

    if (e.target.closest(".infoPerson_close")) {
        cover_div.classList.remove("cover_div")
        infoPerson.style.display = ""
        close.style.display = ""

    }
}