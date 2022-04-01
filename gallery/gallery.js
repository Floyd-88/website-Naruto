let section = document.querySelector(".section_gallery")
let containerMain = document.querySelector(".wrapper_main_gallery")
let container = document.querySelector(".wrapper__gallery")

waveSrc = [] //Массив для картинок идущих снизу вверх
waveSrcUp = [] //Массив для картинок идущих сверху вниз
imgLoc = "img/w"
j = 1

//Получаем ширину и высоту экрана
let screenWidth = window.screen.width;
let screenHeight = window.screen.height;

//Получаем случайное число
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Функция для картинок идущих вверх
function createImg() {
    for (var i = 0; i < 50; i++) {
        //Создаем картинки
        img = document.createElement("img")
        img.src = imgLoc + (i + 1) + ".jpg";

        //Присваем 3м переменным случайное значение в диапозоне
        x = getRandomInRange(-800, window.screen.width - 700);
        y = getRandomInRange(1000, -1000);
        z = getRandomInRange(300, 2000);

        //Размещаем картинки
        img.style.transform = "translate3d(" + x + "px, " + y + "px, -" + z + "px)";
        img.style.cursor = "pointer"
        container.append(img);
        waveSrc.push(img)
    }
}

//Функция для картинок идущих вниз
function createImgUp() {
    for (var i = 0; i < 50; i++) {
        //Создаем картинки
        img = document.createElement("img")
        img.src = imgLoc + (i + 1) + ".jpg";

        //Присваем 3 переменным случайное значение в диапозоне
        xU = getRandomInRange(100, window.screen.width - 100);
        yU = getRandomInRange(-15000, -16500);
        zU = getRandomInRange(300, 2000);

        //Размещаем картинки
        img.style.transform = "translate3d(" + xU + "px, " + yU + "px, -" + zU + "px)";
        img.style.cursor = "pointer"
        container.append(img);
        waveSrcUp.push(img)
    }
}
//Если ширина экрана менее 600px прекращаем рандом и запускаем картинку снизу вверх одна за другой
if (window.matchMedia("(max-width: 600px)").matches) {
    function createImg() {
        for (var i = 0; i < 50; i++) {
            //Создаем картинки
            img = document.createElement("img")
            img.src = imgLoc + (i + 1) + ".jpg";
            y = 0
                //Размещаем картинки
            img.style.transform = `translate(${0}px,${y}px)`
            img.style.cursor = "pointer"
            container.append(img);
            waveSrc.push(img)
        }
    }
}

//Если ширина экрана менее 600px картинки сверху вниз больше не двигаются
if (window.matchMedia("(max-width: 600px)").matches) {
    function createImgUp() {
        return false
    }
}

//События при клики на любую картинку
document.body.addEventListener("click", bigSizeImg)

//Событие при клики на крестик
document.body.addEventListener("click", smallSizeImg)

//Увеличение картинки при клики на нее
function bigSizeImg(event) {

    if (!event.target.closest("img")) return //если кликаем не на картинку - ничего не происходит

    let img = document.querySelectorAll(".wrapper__gallery img")
    img.forEach(i => i.style.opacity = 0) //Перебераем все отсальные картинки и делаем их прозрачными
    window.cancelAnimationFrame(animationUp) //Останавливаем движение
    window.cancelAnimationFrame(animationDown)
    sectionTop.style.position = "absolute"
    headerGallery.style.zIndex = 0
    event.target.classList.add("bigImg") //Доавляем класс к картинке по которой мы кликнуле
    event.target.style.transform = "initial"
    picture = event.target //создаем глобальную переменную и передаем в нее картинку по корой мы кликнули

    // Добавление иконки крестика
    let close = document.createElement("div")
    close.classList.add("infoPerson_close")
    container.append(close)
    close.hidden = false
    console.log(event.target.getBoundingClientRect().top)
    close.style.top = event.target.getBoundingClientRect().top + "px"
    close.style.left = (container.clientWidth) - (close.getBoundingClientRect().width) + "px"
    document.body.removeEventListener("click", bigSizeImg)
}
//Скрываем картинку при клике на крестик
function smallSizeImg(event) {
    if (!event.target.closest(".infoPerson_close")) return //Если кликнули не на крестик ничего не происходит
    let img = document.querySelectorAll(".wrapper__gallery img")
    img.forEach(i => i.style.opacity = 1) //Перебираем остальные картинки и делаем их опять видимыми
    window.requestAnimationFrame(yGo); //Запускаем движение картинок
    window.requestAnimationFrame(yUp)
    sectionTop.style.position = "static"
    headerGallery.style.zIndex = 1000
    picture.classList.remove("bigImg") //Удаляем присвоенной класс открывшеся картинке
    picture.style.transform = "initial"
    picture.style.overflow = "hidden"
    event.target.classList.remove("infoPerson_close") //Удаляем класс для иконки крестика
    document.body.addEventListener("click", bigSizeImg)
}

//Функция по запуску движения картинок
function yGo() {
    waveSrc.forEach((i) => {
        i.style.top = `${y -= 0.06}px `
    })
    animationUp = window.requestAnimationFrame(yGo);
}
if (window.matchMedia("(max-width: 600px)").matches) {
    function yGo() {
        waveSrc.forEach((i) => {
            i.style.top = `${y -= 0.04}px `
        })
        animationUp = window.requestAnimationFrame(yGo);
    }
}

function yUp() {
    waveSrcUp.forEach((i) => {
        i.style.top = `${yU=+yU+0.06}px `
    })
    animationDown = window.requestAnimationFrame(yUp);
}

yGo()
yUp()
createImg()
createImgUp()