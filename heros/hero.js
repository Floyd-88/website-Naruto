let cardPerson = document.querySelectorAll(".card__person")
cardPerson.forEach((elem) => {
    elem.addEventListener("click", showCard)
})
let cover_div = document.createElement("div") //Создаем div перекрывающий всю страницу кроме формы

function showCard(e) {


    cover_div.classList.add("cover_div")
    document.body.append(cover_div)

    let card = e.target.closest(".card__person")
    infoPerson = card.lastElementChild
    document.body.prepend(infoPerson)
    infoPerson.style.display = "flex"

    // Кнопка закрытия окна
    close = document.createElement("div")
    close.classList.add("infoPerson_close")
    infoPerson.append(close)

    close.style.top = 0 + "px"
    close.style.left = (infoPerson.clientWidth) - (close.getBoundingClientRect().width) + "px"
}

//Запускаем функцию закрытия окна с информацией при клике на иконку
document.body.addEventListener("click", closeShowCard)

function closeShowCard(e) {
    if (e.target.closest(".infoPerson_close")) {
        cover_div.classList.remove("cover_div")
        infoPerson.style.display = "none"
        close.style.display = "none"
        console.log(e.target)
    }
}

//Прокрутка персонажей на маленьких экранах

let arrow_1 = document.querySelectorAll(".arrow_1")
let arrow_2 = document.querySelectorAll(".arrow_2")
let carouse_2 = document.querySelectorAll(".carouse_2")
let wrap_carouse_2 = document.querySelector("#wrap_carouse_2")

// for (elem of carouse_2) {
//     elem.setAttribute("value", 0)
// }

for (elemBtnLeft of arrow_1) {
    elemBtnLeft.addEventListener("click", leftCards)
        // elemBtnLeft.setAttribute("value", 0)
}
for (elemBtnRight of arrow_2) {
    elemBtnRight.addEventListener("click", rightCards)
}
// arrow_1.addEventListener("click", leftCards)
// arrow_2.addEventListener("click", rightCards)

let num = 0

function leftCards(e) {
    // console.log(wrap_carouse_2.getBoundingClientRect().left)
    // console.log(carouse_2.getBoundingClientRect().left)
    // n = e.target.parentElement.firstElementChild.dataset.value
    // num -= 5

    e.target.parentElement.firstElementChild.style.transform = `translate(${e.target.parentElement.firstElementChild.dataset.value -= 5}rem, 0rem)`

    // if (num <= 0) {
    //     num = 0
    // }
    // console.log(num)
}

function rightCards(e) {


    // console.log(wrap_carouse_2.getBoundingClientRect().left + carouse_2.getBoundingClientRect().width)
    // console.log(carouse_2.getBoundingClientRect().left + carouse_2.getBoundingClientRect().width)

    e.target.parentElement.firstElementChild.style.transform = `translate(${e.target.parentElement.firstElementChild.dataset.value = +e.target.parentElement.firstElementChild.dataset.value + 5}rem, 0rem)`
    console.log(e.target.parentElement.firstElementChild)
        // if (num >= 0) {
        //     num = 0
        // }

}