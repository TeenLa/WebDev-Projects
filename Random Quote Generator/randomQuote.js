const generateBtn = document.getElementById("generator");
const addBtn = document.getElementById("add-quote");
const quoteParagraph = document.getElementById("quote-paragraph");
const inputElements = document.getElementsByClassName("input");
const container = document.getElementsByClassName("container");
const quoteInput = document.getElementById("quote-input");
const addQuoteBtn = document.getElementById("add-quote-tolist");
const goBack = document.getElementById("return");

let inputElementsArr = Array.from(inputElements);
let containerElementsArr = Array.from(container);

const quotes =JSON.parse(localStorage.getItem("quotes")) || ["Success is not final, failure is not fatal: it is the courage to continue that counts",
  "The best thing to hold onto in life is each other",
  "Knowing yourself is the beginning of all wisdom",
  "Courage is resistance to fear, mastery of fear—not absence of fear",
  "Lost time is never found again",
  "You can’t use up creativity. The more you use, the more you have",
  "Happiness depends upon ourselves",
  "I have not failed. I've just found 10,000 ways that won't work",
  "A real friend is one who walks in when the rest of the world walks out",
  "Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly"   
];


const addQuote = (input)=> {
   quotes.push(input);
   localStorage.setItem("quotes", JSON.stringify(quotes));
}

addBtn.addEventListener("click", ()=> {
  inputElementsArr.forEach((element)=> {
    element.classList.toggle("input");
  })
  containerElementsArr.forEach(element=> {
    element.classList.add("hidden");
  })
});

const generate = ()=> {
  const index = Math.floor(Math.random() * quotes.length);
  quoteParagraph.innerText = `"${quotes[index]}"`;
}

generateBtn.addEventListener("click", ()=> {
  generate();
});

goBack.addEventListener("click", ()=> {
  inputElementsArr.forEach((element)=> {
    element.classList.toggle("input")
  });
  containerElementsArr.forEach(element=> {
    element.classList.remove("hidden")
  });
})

addQuoteBtn.addEventListener("click", ()=> {
  if(!quoteInput.value) {
    alert("Please write a quote");
  }
  else {
    addQuote(quoteInput.value);
    inputElementsArr.forEach((element)=> {
      element.classList.toggle("input")
    });
    containerElementsArr.forEach(element=> {
      element.classList.remove("hidden")
    });
    quoteInput.value = "";
  }

})