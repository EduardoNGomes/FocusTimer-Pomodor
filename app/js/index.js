import {
    audio,
    buttonPlay,
    buttonPause,
    buttonMinus,
    buttonPlus,
    buttonStop,
    buttonDark,
    buttonLight,
    buttonFlorest,
    buttonRain,
    buttonCoffe,
    buttonFireplace,
    minutes,
    second,
    time,
    vol
} from './elements.js'
import Events from './events.js';
import Controls from './Controls.js';


const controls = Controls({
  audio,
  buttonPause,
  buttonPlay,
  buttonMinus,
  buttonPlus,
  buttonStop,
  buttonDark,
  buttonLight,
  buttonFlorest,
  buttonRain,
  buttonCoffe,
  buttonFireplace,
  minutes,
  second,
  time,
  vol
})

const events = Events({
  buttonPlay,
  buttonPause,
  controls
})


