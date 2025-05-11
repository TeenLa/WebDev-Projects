const input = document.getElementById("task");
const addBtn = document.getElementById("add");
const list = document.getElementsByClassName("list")[0];
// since getElementsByClassName returns array like list
const clearBtn = document.getElementById("clear");

const taskArr = JSON.parse(localStorage.getItem("localList")) || [];

const cleaner = (string)=> {
  const regex = /\s/g;
  return string.replace(regex, "");
}

const addToArr = (task)=> {
  taskArr.push(task);
}

const saveToLocalStorage = (tasks)=> {
  localStorage.setItem("localList", JSON.stringify(tasks));
}



const printToList = (task, num)=> {
  list.innerHTML += `<label for="listItems" id="listLabel" ><input id="listItems" type="checkbox">${task}<button id="remove-${num}">x</button> </label>`;
  // we are alwasy printing the last one from the array
}

const addTask = ()=> {
  if(cleaner(input.value)) {
    addToArr(input.value);
    saveToLocalStorage(taskArr);
    printToList(taskArr[taskArr.length - 1]); 
    input.value= ""; // clears the input field
  }
  else {
    alert("Please type in a task first!");
    input.value = "";
  }
}

const remover = (btn)=> {
  
}

addBtn.addEventListener("click", addTask);
 
clearBtn.addEventListener("click", ()=> {
  localStorage.clear();
  taskArr.length = 0;
  list.innerHTML = "";
});

document.addEventListener('keyup', (event)=> {
  if(event.key === "Enter") {
    addTask();
  }
});

document.addEventListener("DOMContentLoaded", (task)=> {
  taskArr.forEach((task)=> {
    printToList(task);
  })
})