const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonPlus = document.querySelector('.plus');
const buttonMinus = document.querySelector('.minus');

const buttonFlorest = document.querySelector('.florest');
const buttonRain = document.querySelector('.rain');
const buttonCoffe = document.querySelector('.coffe');
const buttonFireplace = document.querySelector('.fireplace');

let minutes = document.querySelector('.minutes');
let second = document.querySelector('.seconds');

let time;

let newMinutes = Number(minutes.textContent)

function changeStyle(buttonSelected,buttonNone1,buttonNone2,buttonNone3){
  buttonSelected.classList.add('selected');
  buttonNone1.classList.remove('selected');
  buttonNone2.classList.remove('selected');
  buttonNone3.classList.remove('selected');

};



function reset(){
  clearTimeout(time)
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

function startOrPauseTimer(){
  buttonPlay.classList.toggle('hide');
  buttonPause.classList.toggle('hide');
};

function addMinutes(){
  if(Number(minutes.textContent) < 60){
    minutes.textContent = String(Number(minutes.textContent) + 5).padStart(2, '0');
  }else {
    minutes.textContent = String(Number(5)).padStart(2, '0');
  }
};

function decMinutes(){
  if(minutes.textContent > 0){
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






buttonPlay.addEventListener('click', () =>{
  startOrPauseTimer();
  counter()
});

buttonPause.addEventListener('click', () =>{
  startOrPauseTimer();
  clearTimeout(time)
  
});

buttonStop.addEventListener('click', ()=>{
  reset();
  minutes.textContent = String(newMinutes).padStart(2,'0');
  second.textContent = String(0).padStart(2,'0'); 
})

buttonPlus.addEventListener('click', () =>{
  addMinutes();
})

buttonMinus.addEventListener('click', () =>{
  decMinutes();
})



buttonFireplace.addEventListener('click', ()=>{
  changeStyle(buttonFireplace,buttonCoffe,buttonFlorest,buttonRain);
});

buttonCoffe.addEventListener('click', ()=>{
  changeStyle(buttonCoffe,buttonFireplace,buttonFlorest,buttonRain);
});

buttonFlorest.addEventListener('click', ()=>{
  changeStyle(buttonFlorest,buttonFireplace,buttonCoffe,buttonRain);
});

buttonRain.addEventListener('click', ()=>{
  changeStyle(buttonRain,buttonFireplace,buttonCoffe,buttonFlorest);
});


