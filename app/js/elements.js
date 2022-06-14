const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonPlus = document.querySelector('.plus');
const buttonMinus = document.querySelector('.minus');

const buttonFlorest = document.querySelector('.florest');
const buttonRain = document.querySelector('.rain');
const buttonCoffe = document.querySelector('.coffe');
const buttonFireplace = document.querySelector('.fireplace');

const buttonDark = document.querySelector('.button-dark');
const buttonLight = document.querySelector('.button-light');

//const buttonSound = document.querySelectorAll('.volume');
//alert(buttonSound.textContent)


let minutes = document.querySelector('.minutes');
let second = document.querySelector('.seconds');

let time;
let audio;
let vol;
let originMinutes = Number(minutes.textContent)

export {
  buttonCoffe,
  buttonFireplace,
  buttonFlorest,
  buttonMinus,
  buttonPause,
  buttonPlay,
  buttonPlus,
  buttonRain,
  buttonStop,
  minutes,
  second,
  time,
  audio,
  vol,
  originMinutes,
  buttonDark,
  buttonLight
};