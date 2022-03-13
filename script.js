// Elements in DOM with variables in Javascript

const startEl = document.getElementById("btn-start"); 
const countEl = document.getElementById("count")

let count = 120;
let myCounter = null;

function handleStartClick(){
  // console.log ("start button clicked!");
myCounter = setInterval(function(){
    count--; 
    countEl.innerText = ":" + count;
  }, 1000);
};

startEl.addEventListener('click', handleStartClick);
