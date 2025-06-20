const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const body = document.querySelector("body");
const ColorText = document.getElementById("randomColor");

let intervalId;


button1.addEventListener("click", ()=> {
  body.style.backgroundColor = 'red';
  ColorText.innerText = "Red";
  clearInterval(intervalId);
  intervalId = null;
});
button2.addEventListener("click", ()=> {
  body.style.backgroundColor = 'green';
  ColorText.innerText = "Green";
  clearInterval(intervalId);
  intervalId = null;
});
button3.addEventListener("click", ()=> {
  body.style.backgroundColor = 'blue';
  ColorText.innerText = "Blue";
  clearInterval(intervalId);
  intervalId = null;
});

button4.addEventListener("click", ()=> {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  ColorText.innerText = `rgb(${red}, ${green}, ${blue})`;
  clearInterval(intervalId);
  intervalId = null;
})

/* two issues in this code
1. when clicked multiple times the random nonstop gets activated couple of times(resolved)
2. it doesnt stop even when the other buttons are clicked(resolved) */
//now after we started the random non stop method, the non stop colors stop when any of the five buttons are clicked
button5.addEventListener("click", ()=> {
  if(intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    return;
  }
  intervalId = setInterval(()=> {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
  
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    ColorText.innerText = `rgb(${red}, ${green}, ${blue})`;
  }, 1000)
}
);