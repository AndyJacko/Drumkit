const canvas = document.getElementById("playground");
const ctx = canvas.getContext("2d");

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hi-hat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("open-hat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

const drawShape = (colour) => {
  ctx.strokeStyle = colour;
  ctx.fillStyle = colour;

  ctx.beginPath();

  ctx.arc(
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000) * Math.PI
  );

  ctx.stroke();
};

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      boom.pause();
      boom.currentTime = 0;
      boom.play();
      drawShape("red");
      break;
    case "s":
      clap.pause();
      clap.currentTime = 0;
      clap.play();
      drawShape("white");
      break;
    case "d":
      hihat.pause();
      hihat.currentTime = 0;
      hihat.play();
      drawShape("black");
      break;
    case "f":
      kick.pause();
      kick.currentTime = 0;
      kick.play();
      drawShape("brown");
      break;
    case "g":
      openhat.pause();
      openhat.currentTime = 0;
      openhat.play();
      drawShape("orange");
      break;
    case "h":
      ride.pause();
      ride.currentTime = 0;
      ride.play();
      drawShape("blue");
      break;
    case "j":
      snare.pause();
      snare.currentTime = 0;
      snare.play();
      drawShape("green");
      break;
    case "k":
      tink.pause();
      tink.currentTime = 0;
      tink.play();
      drawShape("yellow");
      break;
    case "l":
      boom.pause();
      boom.currentTime = 0;
      tom.play();
      drawShape("purple");
      break;
  }
});
