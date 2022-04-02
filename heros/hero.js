let cover_div = document.createElement("div") //Создаем div перекрывающий всю страницу кроме формы
let close = document.createElement("div") //Создаем иконку крестика

let cards__persones = document.querySelectorAll(".cards__persones-2") //Перебираем все разделы с карточками героев 
let carouse_2 = document.querySelectorAll(".carouse_2") //Перебираем подразделы с карточками героев


document.body.addEventListener("click", showCard)

function showCard(e) {

    if (!e.target.closest(".card__person")) return //если клик не по персонажу ничего не происходит

    cards__persones.forEach((elem => elem.style.position = "static")) //обнуляем свойство position у раздела с карточками героев что бы модальное окно всплыло по центру экрана
    carouse_2.forEach((elem => elem.style.transform = "none")) //обнуляем свойство transform у раздела с карточками героев что бы модальное окно всплыло по центру экрана

    //фон по карточкой с информацией запрещающий кликать по элементам пока карточка открыта
    cover_div.classList.add("cover_div")
    document.body.append(cover_div)

    //обращаемся к карточке с информацией
    infoPerson = e.target.closest(".card__person").lastElementChild
    infoPerson.style.display = "flex"

    // Кнопка закрытия окна
    close.classList.add("infoPerson_close")
    infoPerson.append(close)
    close.hidden = false
    close.style.top = 0 + "px"
    close.style.left = (infoPerson.clientWidth) - (close.getBoundingClientRect().width) + "px"

    //События после клика на крестик
    if (e.target.closest(".infoPerson_close")) {
        cover_div.classList.remove("cover_div")
        infoPerson.style.display = "none"
        close.hidden = true
        console.log(e.target)
        cards__persones.forEach((elem => elem.style.position = "relative"))
        carouse_2.forEach((elem => elem.style.transform = "translate(0rem, 0rem)"))
    }
}


//Прокрутка персонажей на маленьких экранах

let arrow_1 = document.querySelectorAll(".arrow_1")
let arrow_2 = document.querySelectorAll(".arrow_2")

for (elemBtnLeft of arrow_1) {
    elemBtnLeft.addEventListener("click", leftCards)
}
for (elemBtnRight of arrow_2) {
    elemBtnRight.addEventListener("click", rightCards)
}

function rightCards(e) {
    e.target.parentElement.firstElementChild.style.transform = `translate(${e.target.parentElement.firstElementChild.dataset.value -= 5}rem, 0rem)`
}

function leftCards(e) {
    e.target.parentElement.firstElementChild.style.transform = `translate(${e.target.parentElement.firstElementChild.dataset.value = +e.target.parentElement.firstElementChild.dataset.value + 5}rem, 0rem)`
}