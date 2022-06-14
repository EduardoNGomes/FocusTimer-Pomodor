import {
  minutes,
  second,
  originMinutes,
  buttonCoffe,buttonFireplace,
  buttonFlorest,
  buttonMinus,
  buttonPlus,
  buttonRain,
  buttonStop,
  buttonDark,
  buttonLight
} from './elements.js';

export default function Events({
  buttonPlay,
  buttonPause,
  controls
}){
  buttonPlay.addEventListener('click', () =>{
    controls.startOrPauseTimer();
    controls.counter()
  });
  
  buttonPause.addEventListener('click', () =>{
    controls.startOrPauseTimer();
    
  });
  
  buttonStop.addEventListener('click', ()=>{
    controls.reset();
    minutes.textContent = String(originMinutes).padStart(2,'0');
    second.textContent = String(0).padStart(2,'0'); 
  })
  
  buttonPlus.addEventListener('click', () =>{
    controls.addMinutes();
  })
  
  buttonMinus.addEventListener('click', () =>{
    controls.decMinutes();
  })
  
  
  
  buttonFireplace.addEventListener('click', ()=>{
    controls.changeStyle(buttonFireplace,buttonCoffe,buttonFlorest,buttonRain);
  
    if(!buttonFireplace.classList.contains('selected')){
      controls.stopAudio();
    }else{
      controls.playAudio('Lareira.wav','fireplace');
    }
  
  });
  
  buttonCoffe.addEventListener('click', ()=>{
  
    controls.changeStyle(buttonCoffe,buttonFireplace,buttonFlorest,buttonRain);
    if(!buttonCoffe.classList.contains('selected')){
      controls.stopAudio();
    }else{
      controls.playAudio('Cafeteria.wav','coffe');
    }
  });
  
  
  buttonFlorest.addEventListener('click', ()=>{
  
    controls.changeStyle(buttonFlorest,buttonFireplace,buttonCoffe,buttonRain);
    if(!buttonFlorest.classList.contains('selected')){
      controls.stopAudio();
    }else{
      controls.playAudio('Floresta.wav','florest');
    }
  });
  
  buttonRain.addEventListener('click', ()=>{
  
    controls.changeStyle(buttonRain,buttonFireplace,buttonCoffe,buttonFlorest);
  
    if(!buttonRain.classList.contains('selected')){
      controls.stopAudio();
    }else{
      controls.playAudio('Chuva.wav','rain');
    }
  });

  buttonDark.addEventListener('click', ()=>{
    controls.darkOrLight();
  });
  
  buttonLight.addEventListener('click', ()=>{
    controls.darkOrLight();
  });

  
  
  

}


