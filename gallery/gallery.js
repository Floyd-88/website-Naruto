let section = document.querySelector(".section_gallery")
let containerMain = document.querySelector(".wrapper_main_gallery")
let container = document.querySelector(".wrapper__gallery")


waveSrc = [],
    imgLoc = "img/w",
    j = 1;

let screenWidth = window.screen.width;
let screenHeight = window.screen.height;

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createImg() {
    for (var i = 0; i < 50; i++) {
        img = document.createElement("img")
        img.src = imgLoc + (i + 1) + ".jpg";

        x = getRandomInRange(-1000, window.screen.width - 500);
        y = getRandomInRange(-500, 1000);
        z = getRandomInRange(300, 2000);

        img.style.transform = "translate3d(" + x + "px, " + 0 + "px, -" + z + "px)";
        img.style.cursor = "pointer"
        container.append(img);
        waveSrc.push(img)
    }

}

document.body.addEventListener("click", bigSizeImg)
document.body.addEventListener("click", smallSizeImg)

function bigSizeImg(event) {
    if (!event.target.closest("img")) return
    window.cancelAnimationFrame(stop)
        // event.target.classList.add("big_foto")
    event.target.style.transform = "none"
    event.target.style.width = 100 + "%";
    event.target.style.height = 95 + "vh";
    event.target.style.position = "absolute";
    event.target.style.top = -200 + "px";
    event.target.style.left = 0;
    event.target.style.zIndex = 1000;
    event.target.cursor = "pointer";
    container.style.overflow = "initial"
    document.body.removeEventListener("click", bigSizeImg)
}

function smallSizeImg(event) {
    if (event.target.contains(section) || event.target.contains(containerMain)) {
        window.requestAnimationFrame(yGo)

        // img.style.width = 30 + "vw";
        // img.style.height = 50 + "vh";
        // img.style.position = "";
        // img.style.zIndex = 0;

        container.style.overflow = "hidden"
        console.log(img)
        document.body.addEventListener("click", bigSizeImg)
    }
}

function yGo() {
    waveSrc.forEach((i) => {
        i.style.top = `${y -= 0.05}px`
    })
    stop = window.requestAnimationFrame(yGo);
}

yGo()
createImg()


// let arr = []

// function preloadImage(filename) {
//     let img = new Image();
//     img.onload = function() {
//         img.xPlane = getRandomInRange(-500, screenWidth - 500);
//         img.yPlane = getRandomInRange(0, 1000);
//         img.zPlane = getRandomInRange(300, 2000);


//         arr.push(img.xPlane)
//         if (Math.abs(arr[arr.length - 1] - arr[arr.length - 2]) > 300) {
//             img.style = "transform: translate3d(" + img.xPlane + "px, " + img.yPlane + "px, -" + img.zPlane + "px)";
//             container.appendChild(img);
//             console.log(img.xPlane)
//         } else {
//             preloadImage(filename)

//         }




//     };
//     imgLoc = "";
//     img.src = imgLoc + filename;
//     img.alt = "";
//     waves[j] = img;
//     j++;


// }


// function loadImages() {
//     for (var i = 0; i < waveSrc.length; ++i) {
//         var filename = waveSrc[i];
//         preloadImage(filename);
//     }
// }

// function moveImages() {
//     waves.forEach(function(image) {
//         image.yPlane = image.yPlane - 2;
//         image.style.cssText = "transform: translate3d(" + image.xPlane + "px, " + image.yPlane + "px,  -" + image.zPlane + "px); z-index: " + image.zIndex;
//         console.log("z: +" + image.xPlane)
//     });
//     window.requestAnimationFrame(moveImages);
// }

// var perspImages = container.getElementsByTagName("img"),
//     screenWidth = window.screen.width,
//     screenHeight = window.screen.height;

// loadImages();
// window.requestAnimationFrame(moveImages);