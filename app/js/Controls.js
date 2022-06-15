export default function Controls({
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
}){
  function playAudio(nameAudio,nameVolume){
    
    if(!audio){
      vol = document.querySelector('.volume-'+nameVolume);
      audio = new Audio('./app/audio/'+ nameAudio);
      audio.play();
      vol.addEventListener('input',()=>{
        audio.volume = Number(vol.value)/100;
      })
    } else {
        audio.pause();
        vol.value = 50;
        audio = new Audio('../app/audio/'+ nameAudio);
        vol = document.querySelector('.volume-'+nameVolume);
        audio.play();
    }  
    audio.loop = true;
  }
  
  function stopAudio(){
    vol.value = 50;
    vol = !vol;
    audio.pause();
    audio = !audio;
  }
  
  function changeStyle(buttonSelected,buttonNone1,buttonNone2,buttonNone3){
    buttonSelected.classList.toggle('selected');
    buttonNone1.classList.remove('selected');
    buttonNone2.classList.remove('selected');
    buttonNone3.classList.remove('selected');
  
  };
  
  
  
  function reset(){
    clearTimeout(time);
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
  }
  
  function startOrPauseTimer(){
    buttonPlay.classList.toggle('hide');
    buttonPause.classList.toggle('hide');
    clearTimeout(time)

  };
  
  function addMinutes(){
    if(Number(minutes.textContent) < 55 ){
      minutes.textContent = String(Number(minutes.textContent) + 5).padStart(2, '0');
    }else {
      minutes.textContent = String(Number(5)).padStart(2, '0');
    }
  };
  
  function decMinutes(){
    if(minutes.textContent > 0 && minutes.textContent > 4){
      minutes.textContent = String(Number(minutes.textContent) - 5).padStart(2, '0');
  
    }else{
      minutes.textContent = String(Number(60)).padStart(2, '0');
    }
  };
  
  function counter(){
    time = setTimeout(() =>{
      
      if(Number(second.textContent) == 0 && Number(minutes.textContent) > 0){
        second.textContent = 60
        second.textContent =  String(Number(second.textContent) - 1).padStart(2,'0');
        minutes.textContent = String(Number(minutes.textContent) - 1).padStart(2,'0');
      }else {
        if(Number(minutes.textContent) == 0 && Number(second.textContent) == 0){
          reset();
          return;
        }else{
          second.textContent =  String(Number(second.textContent) - 1).padStart(2,'0');
  
        }
      };
      
      counter();
    },1000);
    
  }
  function darkOrLight(){
    buttonDark.classList.toggle('hide');
    buttonLight.classList.toggle('hide');
  
    document.querySelector('body').classList.toggle('dark-theme-bg-text-body');
  
    //COlOR DISPLAY
    minutes.classList.toggle('dark-theme-bg-text-body');
    document.querySelector('.dots').classList.toggle('dark-theme-bg-text-body')
    second.classList.toggle('dark-theme-bg-text-body');

    //TIMER-BUTTONS COLORS
    buttonPlay.classList.toggle('dark-theme-buttons');
    buttonPause.classList.toggle('dark-theme-buttons');
    buttonStop.classList.toggle('dark-theme-buttons');
    buttonPlus.classList.toggle('dark-theme-buttons');
    buttonMinus.classList.toggle('dark-theme-buttons');

    //SONG-BUTTONS COLLORS

    buttonFlorest.classList.toggle('dark-theme-buttons');
    buttonFlorest.classList.toggle('dark-theme-buttons-bg');

    buttonRain.classList.toggle('dark-theme-buttons');
    buttonRain.classList.toggle('dark-theme-buttons-bg');

    buttonCoffe.classList.toggle('dark-theme-buttons');
    buttonCoffe.classList.toggle('dark-theme-buttons-bg');

    buttonFireplace.classList.toggle('dark-theme-buttons');
    buttonFireplace.classList.toggle('dark-theme-buttons-bg');

    
  
  }
  return {
    counter,
    decMinutes,
    addMinutes,
    playAudio,
    reset,
    startOrPauseTimer,
    stopAudio,
    changeStyle,
    darkOrLight
  }

}



