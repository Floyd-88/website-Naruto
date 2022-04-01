let videoCahpter
let slideIndex = 1;

function select() {

    let select = document.querySelector('#select')
    let myVideos = document.querySelector("#my_video")
    let otherVideos = document.querySelector("#other_video")

    if (select.value == "myVideo") {

        myVideos.style.display = "flex"
        otherVideos.style.display = "none"
        if (window.matchMedia("(max-width: 500px)").matches) {
            videoCahpter = "my"
            slideIndex = 1;
            showSlides(slideIndex);
        }

    } else if (select.value == "othetVideo") {

        otherVideos.style.display = "flex"
        myVideos.style.display = "none"
        if (window.matchMedia("(max-width: 500px)").matches) {
            videoCahpter = "other"
            slideIndex = 1;
            showSlides(slideIndex);
        }
    }
}
select()
    //Слайдер для маленьких экранов

// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

function showSlides(n) {
    let i;
    if (videoCahpter === "my") {
        console.log("111")
        slides = document.querySelectorAll("#my_video > .amv__video");
    } else if (videoCahpter === "other") {
        console.log("222")
        slides = document.querySelectorAll("#other_video > .amv__video");
    }

    // let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "block";

    // dots[slideIndex - 1].className += " active";
}