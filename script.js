var audio = document.createElement("audio");
document.body.appendChild(audio);
audio.src="audio/caraudio.mp3"


document.body.addEventListener("mousemove", function(){
    audio.play();
    audio.loop();
})