const e = require("express");

const audioElem = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");
const audioContext = window.AudioContext;
const audioCtx = new AudioContext();
const audioSource = audioCtx.createMediaElementSource(audioElem);

// Play/Pause audio button
playBtn.addEventListener("click", () => {
  // Check if context is in suspended state (autoplay policy)
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  // If track is paused, play it
  if (playBtn.getAttribute("class") === "paused") {
    audioElem.play();
    playBtn.setAttribute("class", "playing");
    playBtn.textContent = "Pause";
    // If track is playing, pause it
  } else if (playBtn.getAttribute("class") === "playing") {
    audioElem.pause();
    playBtn.setAttribute("class", "paused");
    playBtn.textContent = "Play";
  }
});

// If track ends
audioElem.addEventListener("ended", () => {
  playBtn.setAttribute("class", "paused");
  playBtn.textContent = "Play";
});

// Volume control
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});

audioSource.connect(gainNode).connect(audioCtx.destination);

const em = document.createElement("em");
const para = document.createElement("p");
em.textContent = "Hello World";
para.appendChild(em);
document.body.appendChild(para);

const canvas = document.querySelector("canvas");
