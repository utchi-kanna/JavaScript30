window.addEventListener("keydown", function (one) {
  console.log(one.keyCode);
  const audio = document.querySelector(`audio[data-key="${one.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${one.keyCode}"]`);
  console.log(audio);
  if (!audio) {
    return;
  }

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});

function removeTransition(one) {
  if (one.propertyName !== "transform") {
    return;
  }
  one.target.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
