const sec1 = document.getElementById("sec-1");
const sec2 = document.getElementById("sec-2");
const min1 = document.getElementById("min-1");
const min2 = document.getElementById("min-2");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");

const counter = (element)=> {
  element.innerText++;
}
const backToZero = (value)=> {
  value.innerText = 0;
}
let intervalId;

const startTimer = ()=> {
  if(intervalId) {
    return;
  }
  intervalId = setInterval(()=> {
    if(sec1.innerText < 9) {
      counter(sec1);
    }
    else if(sec1.innerText === "9" && sec2.innerText < 5) {
      backToZero(sec1);
      counter(sec2);
    }
    else if(sec2.innerText === "5" && min1.innerText < 9) {
      backToZero(sec2);
      backToZero(sec1);
      counter(min1);
    }
    else if(min1.innerText === "9" && min2.innerText < 5) {
      backToZero(min1);
      backToZero(sec2);
      backToZero(sec1);
      counter(min2);
    }
    else if(min2.innerText === "9" || min1.innerText === "9") {
      pauseTimer();
    }
  }, 1000);
  
}

const stopTimer = ()=> {

}

const pauseTimer = ()=> {
  clearInterval(intervalId);
  intervalId = null;
}

startBtn.addEventListener("click", ()=>{
  startTimer();
})
pauseBtn.addEventListener("click", pauseTimer);