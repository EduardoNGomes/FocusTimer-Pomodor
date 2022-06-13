import {
    audio,
    buttonPlay,
    buttonPause,
    minutes,
    second,
    time
} from './elements.js'
import Events from './events.js';
import Controls from './Controls.js';


const controls = Controls({
  audio,
  buttonPause,
  buttonPlay,
  minutes,
  second,
  time
})

const events = Events({
  buttonPlay,
  buttonPause,
  controls
})



