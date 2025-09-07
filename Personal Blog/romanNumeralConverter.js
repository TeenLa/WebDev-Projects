const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const outputParagraph = document.getElementById("output");
let outputArr = [];


//This will convert the arabic number to the Roman Numeral when called
const converter = (number)=> {
  if(!number) {
    outputParagraph.innerText = "Please enter a valid number";
    numberInput.value = "";
    return;
  }
  else if(number <= 0) {
    outputParagraph.innerText = "Please enter a number greater than or equal to 1";
    numberInput.value = "";
    return;
  }
  else if(number >= 4000) {
    outputParagraph.innerText = "Please enter a number less than or equal to 3999";
    numberInput.value = "";
    return;
  }
  else {
    if(number - 1000 >= 0) {
      outputArr.push("M");
      converter(number - 1000);
    }
    else if(number - 900 >= 0) {
      outputArr.push("CM");
      converter(number - 900);
    }
    else if(number - 500 >= 0) {
      outputArr.push("D");
      converter(number - 500);
    }
    else if(number - 400 >= 0) {
      outputArr.push("CD");
      converter(number - 400);
    }
    else if(number - 100 >= 0) {
      outputArr.push("C");
      converter(number - 100);
    }
    else if(number - 90 >= 0) {
      outputArr.push("XC");
      converter(number - 90);
    }
    else if(number - 50 >= 0) {
      outputArr.push("L");
      converter(number - 50);
    }
    else if(number - 40 >= 0) {
      outputArr.push("XL");
      converter(number - 40);
    }
    else if(number - 10 >= 0) {
      outputArr.push("X");
      converter(number - 10);
    }
    else if(number - 9 >= 0) {
      outputArr.push("IX");
      converter(number - 9);
    }
    else if(number - 5 >= 0) {
      outputArr.push("V");
      converter(number - 5);
    }
    else if(number - 4 >= 0) {
      outputArr.push("IV");
      converter(number - 4);
    }
    else if(number - 1 > 0){
      outputArr.push("I");
      converter(number - 1);
    }
    else {
      outputArr.push("I");
      return;
    }
  }
}

const print = ()=> {
  if(outputArr.length === 0) {
    return;
  }

  const OutputString = outputArr.join("");
  outputParagraph.innerText = OutputString;
  numberInput.value = "";
  outputArr = [];
  OutputString = "";
  return;
}

convertBtn.addEventListener("click", ()=> { 
  setTimeout(()=> {
    converter(numberInput.value);
    print();
  }, 100)
})

document.addEventListener("keydown", (event)=> {
  setTimeout(()=> {
    if(event.key === "Enter") {
      converter(numberInput.value);
      print();
    }
  }, 100)
});