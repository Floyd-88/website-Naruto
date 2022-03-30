//Игра в поисках сокровища

let gameTreasure = document.querySelector("#game_treasure")
let mapDiv = document.querySelector(".map")
let mapX = document.querySelector("#mapX"); //Картинка карты
let naru = document.querySelector(".map__naru") //Картинка Наруто

gameTreasure.addEventListener("click", showMap) //При клики на название игры показывать карту
function showMap(event) {
    mapDiv.style.display = "flex"

    //Функция определяет случайное число
    let treasureRandom = function(size) {
        return Math.floor(Math.random() * size);
    }

    //Ширина и высота карты
    let width = mapX.offsetWidth;
    let height = mapX.offsetHeight;

    //Координаты спрятонного сокровища
    treasure = {
        x: treasureRandom(width),
        y: treasureRandom(height),
    };
    event.preventDefault()
}

mapX.addEventListener('click', func); //Запускакем событие по клику

//Блок с результатом и количеством попыток
let result = document.querySelector("#result");
result.innerHTML = "";


let clicks = 0; //количество кликов
let c = 0; //Результат вычисления гипотинузы

//Увеличиваем кол-во кликов при нажатии на карту
function clickFunc() {
    clicks = clicks + 1;
}

function func(event) {
    mouseX = event.offsetX //Координаты клика Х
    mouseY = event.offsetY //Координаты клика Y
    clickFunc();
    position(event);
    hypotenuse();
    naruGo()
    check();
}

//Расстояние до клада по осям Х и Y
function position(event) {
    posX = event.offsetX - treasure.x;
    posY = event.offsetY - treasure.y;
    //console.log('x=[' + posX + '] y=[' + posY + ']');
}

//Вычисляем расстояние по прямой до сокровища
function hypotenuse() {
    c = Math.sqrt((posX * posX) + (posY * posY));

}

//Задаем условие что выводить при разных растояниях до клада
function check() {
    if (clicks === 7) {
        let naruto_shock = document.querySelector("#naruto_shock")
        naruto_shock.style.display = "flex"
        timerId = setTimeout(stopShow, 3000, naruto_shock)

    }
    if (clicks >= 10) {
        let naruto_agree = document.querySelector("#naruto_agree")
        naruto_agree.style.display = "flex"
        mapX.removeEventListener('click', func);
        close()
        return
    }
    if (c > 300) {
        result.innerHTML = `"Очень холодно" (осталось ${10 - clicks} попыток)`
        timerId = setTimeout(stopShow, 1000, result)
        result.style.display = "flex"
    } else if (c > 150) {
        result.innerHTML = `"Холодно" (осталось ${10 - clicks} попыток)`
        timerId = setTimeout(stopShow, 1000, result)
        result.style.display = "flex"
    } else if (c > 100) {
        result.innerHTML = `"Теплее" (осталось ${10 - clicks} попыток)`
        timerId = setTimeout(stopShow, 1000, result)
        result.style.display = "flex"
    } else if (c > 50) {
        result.innerHTML = `"Горячо"(осталось ${10 - clicks} попыток)`
        timerId = setTimeout(stopShow, 1000, result)
        result.style.display = "flex"
    } else if (c > 20) {
        result.innerHTML = `"Обожжешься" (осталось ${10- clicks} попыток)`
        timerId = setTimeout(stopShow, 1000, result)
        result.style.display = "flex"
    } else {
        let naruto_win = document.querySelector("#naruto_win")
        naruto_win.style.display = "flex"
        mapX.removeEventListener('click', func);
        close()
    }


}

//Движение Наруто на место клика мыши
function naruGo() {
    naru.style.top = mouseY + "px"
    naru.style.left = mouseX + "px"

    if (parseInt(naru.style.top) < 0) {
        naru.style.top = 0 + "px"
    }
    if (parseInt(naru.style.left) < 0) {
        naru.style.left = 0 + "px"
    }
    if (parseInt(naru.style.top) + naru.clientHeight > mapDiv.clientHeight) {
        naru.style.top = mapDiv.clientHeight - naru.offsetHeight + "px"
    }
    if (parseInt(naru.style.left) + naru.clientWidth > mapDiv.clientWidth) {
        naru.style.left = mapDiv.clientWidth - naru.offsetWidth + "px"
    }
}

//Запуск таймера по показыванию подсказки

// function timer() {
//     timerId = setTimeout(stopShow, 3000, element)

// }

function stopShow(element) {
    element.style.display = "none"
}

//Закрытие окна

function close() {
    let close = document.createElement("div")
    close.classList.add("infoPerson_close")
    mapDiv.append(close)
    close.style.top = 0 + "px"
    close.style.left = (mapX.clientWidth) - (close.getBoundingClientRect().width) + "px"

    addEventListener("click", (e) => {
        if (e.target.closest(".infoPerson_close")) {
            mapDiv.style.display = "none"
            close.style.display = "none"
            naruto_agree.style.display = "none"
            naruto_win.style.display = "none"
            clicks = 0
            naru.style.top = 0 + "px"
            naru.style.left = 0 + "px"
            mapX.addEventListener('click', func);
        }
    })

}