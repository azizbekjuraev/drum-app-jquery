`use strict`;
let audio;
const snore = "./sounds/snare.mp3";
const crash = "./sounds/crash.mp3";
const kickBass = "./sounds/kick-bass.mp3";
const tom1 = "./sounds/tom-1.mp3";
const tom2 = "./sounds/tom-2.mp3";
const tom3 = "./sounds/tom-3.mp3";
const tom4 = "./sounds/tom-4.mp3";

//Click event
$("button").each(function (i, value) {
  $(value).click((b) => {
    makeSound(b.target.textContent);
    buttonAnimation(b.target.textContent);
  });
});

//Keyboard click event
$(window).keydown(function (e) {
  e.preventDefault();
  makeSound(e.key);
  buttonAnimation(e.key);
});

//Functions
function newAudio(audio) {
  return new Audio(audio);
}

function makeSound(key) {
  // key.style.color = "white";
  if (key === `w`) {
    audio = newAudio(snore);
    audio.play();
  } else if (key === `k`) {
    audio = newAudio(kickBass);
    audio.play();
  } else if (key === `a`) {
    audio = newAudio(crash);
    audio.play();
  } else if (key === `s`) {
    audio = newAudio(tom1);
    audio.play();
  } else if (key === `d`) {
    audio = newAudio(tom2);
    audio.play();
  } else if (key === `j`) {
    audio = newAudio(tom3);
    audio.play();
  } else if (key === `l`) {
    audio = newAudio(tom4);
    audio.play();
  }
}

function buttonAnimation(btn) {
  let activeBtn = document.querySelector("." + btn);
  activeBtn.classList.add("pressed");

  setTimeout(function () {
    activeBtn.classList.remove("pressed");
  }, 100);
}
