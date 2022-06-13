export default function Controls({
  audio,
  buttonPause,
  buttonPlay,
  minutes,
  second,
  time
}){
  function playAudio(nameAudio){
    
    if(!audio){
      audio = new Audio('../app/audio/'+ nameAudio);
      audio.play();
    } else {
        audio.pause();
        audio = new Audio('../app/audio/'+ nameAudio);
        audio.play();
    }  
    audio.loop = true;
  }
  
  function stopAudio(){
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
        second.textContent = 5
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
  return {
    counter,
    decMinutes,
    addMinutes,
    playAudio,
    reset,
    startOrPauseTimer,
    stopAudio,
    changeStyle
  }

}



