function select() {
    let select = document.querySelector('#select')
    let myVideos = document.querySelector("#my_video")
    let otherVideos = document.querySelector("#other_video")

    if (select.value == "myVideo") {
        console.log(myVideos)
        myVideos.style.display = "flex"
        otherVideos.style.display = "none"
    } else if (select.value == "othetVideo") {
        console.log(otherVideos)
        otherVideos.style.display = "flex"
        myVideos.style.display = "none"
    }
}