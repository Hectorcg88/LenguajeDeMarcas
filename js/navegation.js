const beepSound = document.getElementById("beep-sound");

const button = document.querySelector(".formulario .enviar");
button.addEventListener("click", function() {
  beepSound.currentTime = 0;
  beepSound.play();
});