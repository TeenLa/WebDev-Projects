const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultText = document.getElementById("result");

const clean = text => {
  const regex = /[\p{P}\s]/gu;
  return textInput.value.replace(regex, "");
}


const compare = () => {
  let backwardArray = []; 
  const cleanedTextArray = Array.from(clean(textInput.value));
  if (cleanedTextArray.length === 0) {
    return false;
  }
  const cleanedLowerCaseTextArray = cleanedTextArray.map(letter => letter.toLowerCase());
  const size =  cleanedTextArray.length;
  for(let i = size - 1; i >= 0; i--) {
    backwardArray.push(cleanedLowerCaseTextArray[i]); 
  }
  for (let i = 0; i < size; i++) {
    if (backwardArray[i] !== cleanedLowerCaseTextArray[i]) {
      return -1;
    }
  }
  return 1;
}

const printResult = () => {
  if(compare() === 1) {
    resultText.innerText = `${textInput.value} is a palindrome`;
  }
  else if (compare() === -1) {
    resultText.innerText = `${textInput.value} is not a palindrome`;
  }
  else if(!compare()) {
    alert("Please input a value");
  }
}

checkButton.addEventListener("click", printResult);

document.addEventListener("keyup", (event)=> {
  if(event.key === "Enter") {
    printResult();
  }
})