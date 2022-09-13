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
  ctx.beginPath();
  ctx.arc(
    Math.ceil(Math.random() * canvas.width),
    Math.ceil(Math.random() * canvas.height),
    Math.ceil(Math.random() * 150),
    0,
    2 * Math.PI,
    false
  );
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = border;
  ctx.stroke();
};

const drawSquare = (fill, border) => {
  const posx = Math.ceil(Math.random() * canvas.width);
  const posy = Math.ceil(Math.random() * canvas.height);
  const posw = Math.ceil(Math.random() * 150);
  const posh = Math.ceil(Math.random() * 150);

  ctx.fillStyle = fill;
  ctx.fillRect(posx, posy, posw, posh);
  ctx.strokeStyle = border;
  ctx.strokeRect(posx, posy, posw, posh);
};

const drawTriangle = (fill, border) => {
  console.log("draw triangle");
  const pos1x = Math.ceil(Math.random() * canvas.width);
  const pos1y = Math.ceil(Math.random() * canvas.height);
  const pos2x = Math.ceil(Math.random() * canvas.width);
  const pos2y = Math.ceil(Math.random() * canvas.height);
  const pos3x = Math.ceil(Math.random() * canvas.width);
  const pos3y = Math.ceil(Math.random() * canvas.height);

  ctx.beginPath();
  ctx.moveTo(pos1x, pos1y);
  ctx.lineTo(pos2x, pos2y);
  ctx.lineTo(pos3x, pos3y);
  ctx.closePath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = border;
  ctx.stroke();
  ctx.fillStyle = fill;
  ctx.fill();
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
  const randomNum = Math.ceil(Math.random() * 3);
  const fill = colours[Math.floor(Math.random() * colours.length)];
  const border = colours[Math.floor(Math.random() * colours.length)];

  switch (randomNum) {
    case 1:
      drawCircle(fill, border);
      break;
    case 2:
      drawSquare(fill, border);
      break;
    case 3:
      drawTriangle(fill, border);
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
