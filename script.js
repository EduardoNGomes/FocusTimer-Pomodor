const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonPlus = document.querySelector('.plus');
const buttonMinus = document.querySelector('.minus');

let minutes = document.querySelector('#minutes');
let second = document.querySelector('#seconds');

let time;






function reset(){
  buttonPlay.classList.toggle('hide');
  buttonPause.classList.toggle('hide');
}

function startTimer(){
  reset();
};

function addMinutes(){
  minutes.textContent =  Number(minutes.textContent) + 5;
};

function decMinutes(){
  minutes.textContent =  Number(minutes.textContent) - 5;
};

function counter(){
    time = setTimeout(() =>{
    
    if(Number(second.textContent) == 0 && Number(minutes.textContent) > 0){
      second.textContent = 5
      second.textContent =  Number(second.textContent) - 1;
      minutes.textContent = Number(minutes.textContent) - 1;
    }else {
      if(Number(minutes.textContent) == 0 && Number(second.textContent) == 0){
        clearTimeout(time)
      }else{
        second.textContent =  Number(second.textContent) - 1;
      }
    };
    
    counter();
  },1000);

}






buttonPlay.addEventListener('click', () =>{
  startTimer();
  counter()
});

buttonPause.addEventListener('click', () =>{
  startTimer();
  clearTimeout(time)

});

buttonStop.addEventListener('click', ()=>{
  clearTimeout(time)
  reset();
  minutes.textContent = minutes.textContent;
  second.textContent = second.textContent; 
})

buttonPlus.addEventListener('click', () =>{
  addMinutes();
})

buttonMinus.addEventListener('click', () =>{
  decMinutes();
})
