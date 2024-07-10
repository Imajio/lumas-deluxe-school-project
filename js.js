function changeVideoSource() {
    let videoElement = document.querySelector(".back-video");
    let videoSourceElement = document.querySelector("#bgvideo");
    let buttonOut = document.querySelector("#bgButtonOut");
    let buttonIn = document.querySelector("#bgButtonIn");

    let currentVideo = videoSourceElement.getAttribute("src");
    if (currentVideo === "media/video.mp4") {
        videoSourceElement.src = "media/elevators.mp4";
        buttonOut.style.justifyContent = "left";
        buttonIn.style.boxShadow = "0 0 1px white, 0 0 5px white, 0 0 10px white";
    } else {
        videoSourceElement.src = "media/video.mp4";
        buttonOut.style.justifyContent = "right";
        buttonIn.style.boxShadow = "0 0 1px white, 0 0 2px white";
    }



    videoElement.load();
}
