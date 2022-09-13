const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hi-hat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("open-hat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");
const tss = document.getElementById("badumtss");
const intro = document.getElementById("intro");
const egg = document.getElementById("easteregg");

const canvas = document.getElementById("playground");
const ctx = canvas.getContext("2d");

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

const drawCircle = (fill, border) => {
  const x = Math.ceil(Math.random() * canvas.width);
  const y = Math.ceil(Math.random() * canvas.height);
  let size = Math.ceil(Math.random() * 150);
  let i = 0;

  setInterval(() => {
    if (i < size) {
      ctx.beginPath();
      ctx.arc(x, y, i, 0, 2 * Math.PI, false);
      ctx.fillStyle = fill;
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = border;
      ctx.stroke();
      i++;
    }
  }, 1);
};

const drawSquare = (fill, border) => {
  const posx = Math.ceil(Math.random() * canvas.width);
  const posy = Math.ceil(Math.random() * canvas.height);
  let size = Math.ceil(Math.random() * 150);
  let i = 0;

  setInterval(() => {
    if (i < size) {
      ctx.beginPath();
      ctx.fillStyle = fill;
      ctx.fillRect(posx, posy, i, i);
      ctx.strokeStyle = border;
      ctx.strokeRect(posx, posy, i, i);
      i++;
    }
  }, 1);
};

const drawShape = () => {
  const colours = [
    "Aqua",
    "BlueViolet",
    "Chartreuse",
    "Crimson",
    "DarkOliveGreen",
    "DeepPink",
    "DarkViolet",
    "LawnGreen",
    "Gold",
    "Orange",
    "RebeccaPurple",
    "Snow",
    "Teal",
    "Tomato",
    "Yellow",
    "SkyBlue",
    "MintCream",
    "Azure",
    "Chocolate",
    "DarkGrey",
    "DarkSalmon",
    "DarkTurquoise",
    "FireBrick",
    "GoldenRod",
    "HoneyDew",
    "HotPink",
    "Ivory",
    "Lavender",
    "LightGreen",
    "MediumSlateBlue",
    "MediumVioletRed",
    "MidnightBlue",
    "OliveDrab",
    "Orchid",
  ];
  const randomNum = Math.ceil(Math.random() * 2);
  const fill = colours[Math.floor(Math.random() * colours.length)];
  const border = colours[Math.floor(Math.random() * colours.length)];

  switch (randomNum) {
    case 1:
      drawCircle(fill, border);
      break;
    case 2:
      drawSquare(fill, border);
      break;
  }
};

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      boom.pause();
      boom.currentTime = 0;
      boom.play();
      drawShape();
      break;
    case "s":
      clap.pause();
      clap.currentTime = 0;
      clap.play();
      drawShape();
      break;
    case "d":
      hihat.pause();
      hihat.currentTime = 0;
      hihat.play();
      drawShape();
      break;
    case "f":
      kick.pause();
      kick.currentTime = 0;
      kick.play();
      drawShape();
      break;
    case "g":
      openhat.pause();
      openhat.currentTime = 0;
      openhat.play();
      drawShape();
      break;
    case "h":
      ride.pause();
      ride.currentTime = 0;
      ride.play();
      drawShape();
      break;
    case "j":
      snare.pause();
      snare.currentTime = 0;
      snare.play();
      drawShape();
      break;
    case "k":
      tink.pause();
      tink.currentTime = 0;
      tink.play();
      drawShape();
      break;
    case "l":
      tom.pause();
      tom.currentTime = 0;
      tom.play();
      drawShape();
      break;
    case "Escape":
      tss.pause();
      tss.currentTime = 0;
      tss.play();
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      break;
  }
});

const playSound = (key) => {
  switch (key) {
    case "a":
      boom.pause();
      boom.currentTime = 0;
      boom.play();
      drawShape();
      break;
    case "s":
      clap.pause();
      clap.currentTime = 0;
      clap.play();
      drawShape();
      break;
    case "d":
      hihat.pause();
      hihat.currentTime = 0;
      hihat.play();
      drawShape();
      break;
    case "f":
      kick.pause();
      kick.currentTime = 0;
      kick.play();
      drawShape();
      break;
    case "g":
      openhat.pause();
      openhat.currentTime = 0;
      openhat.play();
      drawShape();
      break;
    case "h":
      ride.pause();
      ride.currentTime = 0;
      ride.play();
      drawShape();
      break;
    case "j":
      snare.pause();
      snare.currentTime = 0;
      snare.play();
      drawShape();
      break;
    case "k":
      tink.pause();
      tink.currentTime = 0;
      tink.play();
      drawShape();
      break;
    case "l":
      tom.pause();
      tom.currentTime = 0;
      tom.play();
      drawShape();
      break;
  }
};

const playIntro = () => {
  intro.pause();
  intro.currentTime = 1;
  intro.play();
};

const badumtss = () => {
  tss.pause();
  tss.currentTime = 0;
  tss.play();
};

const easteregg = () => {
  egg.pause();
  egg.currentTime = 0;
  egg.play();
};
