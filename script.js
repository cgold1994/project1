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

function stopCount(){
      if (count == 0 ) {
          clearInterval(myCounter);

// Declare variables for input fields
const easyOne = document.getElementById("myText1");
const mediumOne = document.getElementById("myText2");
const hardOne = document.getElementById("myText3");
const bonusOne = document.getElementById("myText4");

const buttonOne = document.getElementById("btn1");
const buttonTwo = document.getElementById("btn2");
const buttonThree = document.getElementById("btn3");
const buttonFour = document.getElementById("btn4");

const out1 = document.getElementById("word1");
const out2 = document.getElementById("word2");
const out3 = document.getElementById("word3");
const out4 = document.getElementById("word4");

function fun1(e) {
    e.preventDefault();
    out1.innerHTML = easyOne.value;

}

function fun2(e) {
    e.preventDefault();
    out2.innerHTML = mediumOne.value;

}

function fun3(e) {
    e.preventDefault();
    out3.innerHTML = hardOne.value;

}

function fun4(e) {
    e.preventDefault();
    out4.innerHTML = bonusOne.value;

}



btn1.addEventListener('click', fun1);
btn2.addEventListener('click', fun2);
btn3.addEventListener('click', fun3);
btn4.addEventListener('click', fun4);



let words = [
    'BRICK',
    'TIMBS',
    'BARCLAYS',
    'BACONEGGNCHEESE',
];
